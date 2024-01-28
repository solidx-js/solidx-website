# 组件

solidx.js 表现为一系列的自定义 HTML 标签，这些标签被称为组件。组件是 solidx.js 的最小单元，每个组件都有自己的功能和属性，并遵从如下约定:

- 组件的名称以 `xr-` 开头，例如 `xr-scene`、`xr-camera`、`xr-mesh` 等。
- `xr-scene` 组件是整个 3D 场景的容器，所有的 3D 元素都需要放置在 `xr-scene` 组件中。一个页面中可以有多个 `xr-scene` 组件，每个 `xr-scene` 组件都会创建一个独立的 3D 引擎实例。
- 组件的属性，既可以通过 HTML 属性的形式传入，也可以通过 CSS 变量的形式传入。HTML 属性的优先级高于 CSS 变量。为了和普通的 CSS 属性区分开来，组件的 CSS 变量属性名以 `---` 开头，例如 `---radius`、`---diffuse`、`---position` 等。