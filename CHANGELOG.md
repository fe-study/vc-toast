<h1 align="center">vc-toast - @changelog</h1>

## 0.0.2

`2016-09-25`

- 新增 `stack` 属性，控制消息展示模式
  - 默认全局弹出，后弹出的覆盖先弹出的
  - 可选 `stack`(stack: true) 模式，默认页面右上角依次列出消息，可直接对组件使用class来自定义样式

- 新增 `top`, `right` 模式，快捷的控制显示位置，注意，right设置在非堆叠模式不可用

## 0.0.1

`2016-09-21`

- init
  - 功能和样式上模仿ant.design，提供全局的快捷方法来弹出toast
  - window.vcToast.info(message, duration, icon)，还有success, danger, warning等快捷方法
  - type: `primary`, `info`, `success`, `danger`, `warning`
