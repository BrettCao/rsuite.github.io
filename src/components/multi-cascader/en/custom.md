### Custom options

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/province-simplified.js
 */

const instance = (
  <MultiCascader
    data={data}
    style={{ widht: 224 }}
    renderMenuItem={(label, item) => {
      return (
        <div>
          <i className="rs-icon rs-icon-circle" /> {label}
        </div>
      );
    }}
    renderValue={(value, selectedItems) =>
      selectedItems.map(item => item.label).join(' , ')
    }
  />
);
ReactDOM.render(instance);
```

<!--end-code-->
