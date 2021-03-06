# AutoComplete 自动完成

## 获取组件

```js
import { AutoComplete } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<AutoComplete>`

| 属性名称      | 类型`(默认值)`                                                  | 描述                                    |
| ------------- | --------------------------------------------------------------- | --------------------------------------- |
| classPrefix   | string `('auto-complete')`                                      | 组件 CSS 类的前缀                       |
| data \*       | Array&lt;string&gt;, Array&lt;[DataItemType](#DataItemType)&gt; | 组件数据                                |
| defaultValue  | string                                                          | 设置默认值 `非受控`                     |
| disabled      | boolean                                                         | 禁用组件                                |
| menuClassName | string                                                          | 选项菜单的 className                    |
| onChange      | (value:string, event)=>void                                     | `value` 发生改变时的回调函数            |
| onClose       | ()=>void                                                        | 隐藏时的回调函数                        |
| onSelect      | (item:DataItemType, event)=>void                                | 选项被点击选择后的回调函数              |
| placeholder   | React.Node                                                      | 占位符                                  |
| renderItem    | (label:React.Node, item: DataItemType)=>React.Node              | 自定义被选中的选项                      |
| selectOnEnter | boolean `(true)`                                                | 当设为 `false` 时，回车键不能作选值操作 |
| value         | string                                                          | 设置值 `受控`                           |

## Types

### DataItemType

```ts
type DataItemType = {
  value: string,
  label: React.Node
};
```
