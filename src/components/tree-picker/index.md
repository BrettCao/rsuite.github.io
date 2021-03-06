# TreePicker 树形选择器

- `<TreePicker>` 选择器组件，树形单项选择器。

## 获取组件

```js
import { TreePicker } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<TreePicker>`

| 属性名称             | 类型 `(默认值)`                                               | 描述                            |
| -------------------- | ------------------------------------------------------------- | ------------------------------- |
| appearance           | enum: 'default', 'subtle' `('default')`                       | 设置外观                        |
| block                | boolean                                                       | 堵塞整行                        |
| childrenKey          | string `('children')`                                         | tree 数据结构 children 属性名称 |
| classPrefix          | string`('picker')`                                            | 组件 CSS 类的前缀               |
| cleanable            | boolean `(true)`                                              | 是否可以清除                    |
| container            | HTMLElement or (() => HTMLElement)                            | 设置渲染的容器                  |
| data \*              | Array&lt;[DataItemType](#DataItemType)&gt;                    | tree 数据                       |
| defaultExpandAll     | boolean                                                       | 默认展开所有节点                |
| defaultOpen          | boolean                                                       | 默认打开                        |
| defaultValue         | DataItemType.value                                            | 默认选中的值                    |
| disabled             | boolean                                                       | 是否禁用 Picker                 |
| disabledItemValues   | Array&lt;DataItemType.value&gt;                               | 禁用选项                        |
| expandAll            | boolean                                                       | (受控)展示/收起所有节点         |
| inline               | boolean                                                       | 是否内联显示 tree               |
| labelKey             | string `('label')`                                            | tree 数据结构 label 属性名称    |
| locale               | object                                                        | 本地语言                        |
| menuClassName        | string                                                        | 应用于菜单 DOM 节点的 css class |
| menuStyle            | object                                                        | 应用于菜单 DOM 节点的 style     |
| onChange             | (value:DataItemType.value)=>void                              | 数据改变的回调函数              |
| onClose              | ()=>void                                                      | 关闭 Dropdown 的回调函数        |
| onExpand             | (activeNode:DataItemType, layer:number)=>void                 | 树节点展示时的回调              |
| onOpen               | ()=>void                                                      | 展开 Dropdown 的回调函数        |
| onSearch             | (searchKeyword:string, event)=>void                           | 搜索回调函数                    |
| onSelect             | (activeNode:DataItemType, layer:number, event)=>void          | 选择树节点后的回调函数          |
| open                 | boolean                                                       | 打开（受控）                    |
| placeholder          | React.Node `('Select')`                                       | 占位符                          |
| placement            | enum: [Placement](#Placement)`('bottomLeft')`                 | 打开位置                        |
| renderExtraFooter    | ()=>React.Node                                                | 自定义页脚内容                  |
| renderTreeIcon       | (nodeData:DataItemType)=>React.Node                           | 自定义渲染 图标                 |
| renderTreeNode       | (nodeData:DataItemType)=>React.Node                           | 自定义渲染 tree 节点            |
| renderValue          | (activeNode:DataItemType, placeholder:React.Node)=>React.Node | 自定义渲染 placeholder          |
| seasrchable          | boolean `(true)`                                              | 是否可以搜索                    |
| toggleComponentClass | React.ElementType `('a')`                                     | 为组件自定义元素类型            |
| value                | DataItemType.value                                            | 当前选中的值                    |
| valueKey             | string `('value')`                                            | tree 数据结构 value 属性名称    |

## Types

### Placement

```ts
type Placement =
  | 'bottomLeft'
  | 'bottomRight'
  | 'topLeft'
  | 'topRight'
  | 'leftTop'
  | 'rightTop'
  | 'leftBottom'
  | 'rightBottom'
  | 'auto'
  | 'autoVerticalLeft'
  | 'autoVerticalRight'
  | 'autoHorizontalTop'
  | 'autoHorizontalBottom';
```

### DataItemType

```ts
type DataItemType = {
  value: any;
  label: React.Node;
  children?: Array<DataItemType>;
};
```

## 相关组件

- [`<CheckTreePicker>`](./check-tree-picker) 选择器组件，在 TreePicker 节点上支持 Checkbox，用于多选 。
- [`<Tree>`](./tree) 用于展示一个树结构数据。
- [`<CheckTree>`](./check-tree) 用于展示一个树结构数据，同时支持 Checkbox 选择。
