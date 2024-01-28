---
sidebar_position: 2
---

# 绘制立方体

现在我们已经了解了如何在页面中引入 solidx.js，接下来我们将学习如何使用 solidx.js 绘制一个立方体。

## 通过 xr-mesh 组件绘制立方体

在 solidx.js 中，我们使用 `xr-mesh` 组件来绘制立方体。`xr-mesh` 组件是一个通用的网格渲染器组件，可以绘制多种类型的几何体，包括立方体、球体、圆柱体、圆锥体、平面等。

<CodeLive>
{`

<style>
  xr-scene {
    ---background: #000;
  }

  xr-camera {
    animation: rotate 20s linear infinite;
    ---beta: 70;
    ---radius: 3;
  }

  @keyframes rotate {
    from {
      ---alpha: 0;
    }
    to {
      ---alpha: 360;
    }
  }
</style>

<xr-scene>
  <xr-camera></xr-camera>
  <xr-mesh geometry="primitive://box"></xr-mesh>
</xr-scene>
`}
</CodeLive>

上述代码中，我们使用了 `xr-scene`、`xr-camera` 和 `xr-mesh` 三个组件，这三个组件是 solidx.js 中最基础的组件。

- `xr-scene` 组件是整个 3D 场景的容器，所有的 3D 元素都需要放置在 `xr-scene` 组件中。
- `xr-camera` 组件是相机，用于控制场景中的视角。
- `xr-mesh` 组件是网格渲染器，用于绘制几何体。

`xr-mesh` 的 geometry 属性用于指定几何体的类型，目前支持的几何体类型有：

- `primitive://box` 立方体
- `primitive://sphere` 球体
- `primitive://cylinder` 圆柱体
- `primitive://plane` 平面
- `primitive://disc` 圆盘
- `primitive://torus` 圆环

因此，如果需要绘制一个球体，只需要将 `xr-mesh` 的 geometry 属性设置为 `primitive://sphere` 即可。

如果需要指定几何体参数，可以通过 `?` 符号传递参数，例如：

- `primitive://box?size=2` 指定立方体的大小为 2
- `primitive://plane?size=10` 指定平面的大小为 10
- `primitive://cylinder?height=2&diameter=1` 指定圆柱体的高度为 2，直径为 1

所有参数都是可选的，如果不指定参数，则会使用默认值。参数文档请参考 [geometry](/docs/element/xr-mesh#geometry)。


:::warning

你可能注意到了，我们在 `xr-scene` 组件中使用了 `---background` 属性，这是一个自定义属性，用于设置场景的背景颜色。在 solidx.js 中，我们可以通过 CSS 自定义属性来设置组件的状态，甚至是应用动画，这是 solidx.js 的核心特性之一。

:::

## 调整位置、旋转和缩放

在上面的例子中，我们绘制了一个立方体，但是立方体的位置和旋转都是默认值，我们可以通过 `position`、 `rotation`, `scale` 属性来调整立方体的位置、旋转和缩放。

<CodeLive>
{`
<style>
  xr-scene {
    ---background: #000;
  }
  xr-camera {
    ---beta: 70;
    ---radius: 3;
  }
  xr-mesh {
    ---geometry: "primitive://box";
    animation: box-animation 2s ease-out infinite alternate;
  }
  @keyframes box-animation {
    from {
      ---position: 0 -0.5 0;
      ---rotation: 0 0 0;
      ---scale: 1 0.5 1;
    }
    to {
      ---position: 0 0.5 0;
      ---rotation: 0 30 0;
      ---scale: 1 1 1;
    }
  }
</style>

<xr-scene>
  <xr-camera></xr-camera>
  <xr-mesh></xr-mesh>
</xr-scene>
`}
</CodeLive>

我们在 `xr-mesh` 组件中添加了 `position`、`rotation` 和 `scale` 属性，这三个属性分别用于设置立方体的位置、旋转和缩放，并添加了一个跳跃 CSS 动画，用于演示这三个属性的作用。

## 变换颜色

在 solidx.js 中，我们可以通过 `material` 属性来设置几何体的材质，目前支持的材质类型有：

- `primitive://pbr` 物理渲染材质

`primitive://pbr` 材质是一种基于物理的渲染材质，它可以模拟真实世界中的光照效果，包括漫反射、高光反射、环境光遮蔽、折射、透明等效果。pbr 材质的参数非常多，但是大部分参数都是可选的，如果不指定参数，则会使用默认值。参数文档请参考 [xr-material](/docs/element/xr-material)。

<CodeLive>
{`
<style>
  xr-scene {
    ---background: #000;
  }
  xr-camera {
    ---beta: 70;
    ---radius: 3;
  }
  xr-mesh {
    ---geometry: primitive://box;
    ---material: primitive://pbr?albedo-color=var(---albedo-color);
    animation: box-animation 5s linear infinite;
  }
  @keyframes box-animation {
    0% {
      ---albedo-color: red;
    }
    33% {
      ---albedo-color: green;
    }
    66% {
      ---albedo-color: blue;
    }
    100% {
      ---albedo-color: red;
    }
  }
</style>
<xr-scene>
  <xr-camera></xr-camera>
  <xr-mesh></xr-mesh>
</xr-scene>
`}
</CodeLive>

我们在 `xr-mesh` 组件中添加了 `material` 属性，用于设置立方体的材质，同时添加了一个颜色渐变的 CSS 动画，用于演示 `albedo-color` 参数的作用。

## 添加光源

在 solidx.js 中，我们可以通过 `xr-directional-light`、`xr-point-light`、`xr-hemispheric-light` 组件来添加光源。

- `xr-directional-light` 组件是方向光，它的光线是从一个方向发出的，例如太阳光。
- `xr-point-light` 组件是点光源，它的光线是从一个点向四周发散的，例如灯泡。
- `xr-hemispheric-light` 组件是半球光，它的光线从一个方向发出，但是光线的强度是根据方向的不同而不同的，例如天空光。

这里我们把立方体换成球体，并添加一个方向光，照亮它。

<CodeLive>
{`
<style>
  xr-scene {
    ---background: #000;
    ---env-intensity: 0.05;
  }
  xr-camera {
    ---beta: 70;
    ---radius: 3;
  }
  xr-directional-light {
    ---intensity: 3;
    ---inspect: 'scale: 5';
    animation: rotate 10s linear infinite;
  }
  xr-mesh {
    ---geometry: primitive://sphere;
  }
  @keyframes rotate {
    from {
      ---diffuse: red;
      ---alpha: 0;
    }
    to {
      ---diffuse: green;
      ---alpha: 360;
    }
  }
</style>

<xr-scene>
  <xr-camera></xr-camera>
  <xr-directional-light></xr-directional-light>
  <xr-mesh></xr-mesh>
</xr-scene>
`}
</CodeLive>

- `xr-directional-light` 组件的 `intensity` 属性用于设置光源的强度， `diffuse` 属性用于设置光源的颜色，`alpha` 属性用于设置光源的方向。

:::info

- `xr-directional-light` 组件的 `inspect` 属性用于设置组件的调试信息，这里我们设置为 `scale: 5`，表示将组件的缩放比例设置为 5 倍，方便我们观察光源的方向。

:::


## 添加阴影

在 solidx.js 中，我们可以通过 `shadow-caster` 属性来为光源添加阴影。

<CodeLive>
{`
<style>
  xr-scene {
    ---background: #000;
    ---env-intensity: 0.05;
  }
  xr-camera {
    ---beta: 70;
    ---radius: 3;
  }
  xr-directional-light {
    ---intensity: 3;
    ---inspect: 'scale: 5';
    ---shadow-caster: xr-mesh;
    ---shadow-caster-normal-bias: 0.05;
    animation: rotate 10s linear infinite;
  }
  .sphere {
    ---geometry: primitive://sphere;
  }
  .ground {
    ---geometry: primitive://plane?size=10;
    ---position: 0 -0.8 0;
    ---rotation: 90 0 0;
  }
  @keyframes rotate {
    from {
      ---diffuse: red;
      ---alpha: 0;
    }
    to {
      ---diffuse: green;
      ---alpha: 360;
    }
  }
</style>

<xr-scene>
  <xr-camera></xr-camera>
  <xr-directional-light></xr-directional-light>
  <xr-mesh class="sphere"></xr-mesh>
  <xr-mesh class="ground"></xr-mesh>
</xr-scene>
`}
</CodeLive>

- 我们用 `xr-mesh` 组件绘制了一个球体和一个平面，球体用于接受阴影，平面用于投射阴影。
- `xr-directional-light` 组件的 `shadow-caster` 属性用于设置光源的阴影投射对象，这里我们设置为 `xr-mesh`，表示光源会对所有 `xr-mesh` 组件命中的对象产生阴影。
- `xr-directional-light` 组件的 `shadow-caster-normal-bias` 属性用于设置阴影投射对象的法线偏移，这里我们设置为 `0.05`，表示阴影投射对象的法线会向外偏移 0.05。


:::info

投影对象的法线偏移是为了解决 **自阴影龊疮** 的问题，即阴影投射对象自身的阴影会产生龊疮。如果阴影投射对象的法线偏移不够大，会导致阴影投射对象自身的阴影产生龊疮，如果阴影投射对象的法线偏移过大，会导致阴影投射对象的阴影产生空洞。因此，阴影投射对象的法线偏移需要根据具体的场景进行调整。

:::