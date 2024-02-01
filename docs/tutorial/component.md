# 组件

solidx.js 表现为一系列的自定义 HTML 标签，这些标签被称为组件。组件是 solidx.js 的最小单元，每个组件都有自己的功能和属性，并遵从如下约定:

- 组件的名称以 `xr-` 开头，例如 `xr-scene`、`xr-camera`、`xr-mesh` 等。
- `xr-scene` 组件是整个 3D 场景的容器，所有的 3D 元素都需要放置在 `xr-scene` 组件中。一个页面中可以有多个 `xr-scene` 组件，每个 `xr-scene` 组件都会创建一个独立的 3D 引擎实例。
- 组件的属性，既可以通过 HTML 属性的形式传入，也可以通过 CSS 变量的形式传入。HTML 属性的优先级高于 CSS 变量。为了和普通的 CSS 属性区分开来，组件的 CSS 变量属性名以 `---` 开头，例如 `---radius`、`---diffuse`、`---position` 等。


solidx.js 的组件可以直接在 HTML 中使用，无需额外引入。具体的组件列表和使用方法，请参考 [组件文档](/docs/element/xr-scene)。

以下是常用的组件列表：

| 组件 | 说明 |
| --- | --- |
| [xr-scene](/docs/element/xr-scene) | 3D 场景的容器，所有的 3D 元素都需要放置在 `xr-scene` 组件中。 |
| [xr-camera](/docs/element/xr-camera) | 相机组件 |
| [xr-mesh](/docs/element/xr-mesh) | 几何体组件 |
| [xr-texture](/docs/element/xr-texture) | 纹理组件 |
| [xr-material](/docs/element/xr-material) | 材质组件 |
| [xr-model](/docs/element/xr-model) | 模型组件，用于加载 3D 模型。 |
| [xr-point-light](/docs/element/xr-point-light) | 点光源组件。|

## 基本用法

将属性直接写在 HTML 标签中：

```html
<xr-scene>
  <xr-camera radius="6" beta="75"></xr-camera>
  <xr-mesh geometry="primitive://box" material="primitive://pbr?albedo-color=#ffc069"></xr-mesh>
</xr-scene>
```

或者，通过 CSS 变量的形式传入：

```html
<style>
  xr-scene {
    ---background: #000;
  }
  xr-camera {
    ---radius: 6;
    ---beta: 75;
  }
  xr-mesh {
    ---geometry: primitive://box;
    ---material: primitive://pbr?albedo-color=#ffc069;
  }
</style>
<xr-scene>
  <xr-camera></xr-camera>
  <xr-mesh></xr-mesh>
</xr-scene>
```