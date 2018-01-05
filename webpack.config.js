const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const markdownRenderer = require('react-markdown-reader').renderer;

const iconPath = ['./node_modules/rsuite-theme', '../rsuite-theme'].map(relativePath => path.resolve(__dirname, relativePath));

const { NODE_ENV, STYLE_DEBUG } = process.env;
const extractLess = new ExtractTextPlugin({
  filename: '[contenthash].css',
  disable: NODE_ENV === 'development'
});
const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(NODE_ENV)
    }
  }),
  extractLess,
  new webpack.optimize.ModuleConcatenationPlugin(),
  new HtmlwebpackPlugin({
    title: 'RSUITE | 一套 React 的 UI 组件库',
    filename: (NODE_ENV === 'development' ? '' : '../') + 'index.html',
    template: 'src/index.html',
    inject: true,
    hash: true
  })
];
const publicPath = NODE_ENV === 'development' ? '/' : '/assets/';

if (NODE_ENV === 'development') {
  plugins.push(new webpack.DllReferencePlugin({
    context: path.resolve(__dirname, 'src/'),
    manifest: require('./dist/vendor-manifest.json')
  }));
}

if (NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
  plugins.push(new webpack.BannerPlugin(`Last update: ${new Date().toString()}`));
  plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
      names: 'vendor',
      filename: 'vendor.js'
    })
  );
  plugins.push(new CompressionPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.(js|html)$/,
    threshold: 10240,
    minRatio: 0.8
  }));

}

const getStyleLoader = () => {
  const sourceMap = STYLE_DEBUG === 'SOURCE' ? '?sourceMap' : '';
  const loaders = ['css-loader', 'postcss-loader', 'less-loader'];
  const filterLoader = loader => (STYLE_DEBUG === 'STYLE' || NODE_ENV === 'production') ? true : loader !== 'postcss-loader';
  return loaders.filter(filterLoader).map(loader => ({
    loader: `${loader}${sourceMap}`
  }));
};

const common = {
  entry: {
    app: ['babel-polyfill', path.resolve(__dirname, 'src/index')],
    vendor: ['react', 'react-dom'],
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    disableHostCheck: true,
    historyApiFallback: true,
    publicPath: '/',
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    publicPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'transform-loader?brfs',
          'babel-loader?babelrc'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(less|css)$/,
        loader: extractLess.extract({
          use: getStyleLoader(),
          // use style-loader in development
          fallback: 'style-loader?{attrs:{prop: "value"}}'
        })
      },
      {
        test: /\.md$/,
        use: [{
          loader: 'html-loader'
        }, {
          loader: 'markdown-loader',
          options: {
            pedantic: true,
            renderer: markdownRenderer
          }
        }]
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader'
        }]
      },
      {
        test: /\.(jpg|png)$/,
        //`publicPath`  only use to assign assets path in build
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            publicPath
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)($|\?)/,
        include: iconPath,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1,
            size: 16,
            hash: 'sha512',
            digest: 'hex',
            name: 'resources/[hash].[ext]',
            publicPath: NODE_ENV === 'development' ? '/' : './'
          }
        }]
      },
      {
        test: /\.svg$/,
        exclude: iconPath,
        use: [{
          loader: 'svg-sprite-loader',
          options: {
            symbolId: 'icon-[name]'
          }
        }]
      }]
  },
  plugins: plugins
};

module.exports = () => {
  if (NODE_ENV === 'development') {
    return Object.assign({}, common, {
      entry: [
        // https://github.com/facebook/react/issues/8379#issuecomment-264934168
        'babel-polyfill',
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://127.0.0.1:3200',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, 'src/index')
      ],
      devtool: 'source-map'
    });
  }

  return common;
};
