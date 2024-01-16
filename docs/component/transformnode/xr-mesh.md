# xr-mesh 网格

网格是3D场景中的基本元素，它由顶点和面组成。网格可以用来表示各种物体，比如地形、建筑、人物、动物等。

网格渲染通常需要指定以下两种数据：

1. **geometry** 几何数据，用来描述网格的顶点和面，例如形状、法线、UV等。
2. **material** 材质数据，用来描述网格的材质，例如颜色、纹理、光照等。

## 公共属性

- [transform 变换](/docs/component/transformnode)

## 自有属性

| 属性名       | 描述     | 类型               | 默认值 |
| ------------ | -------- | ------------------ | ------ |
| **geometry** | 几何数据 | `Object`           | -      |
| **material** | 材质数据 | `String`、`Object` | -      |

:::warning

- 如果没有指定 `geometry`，mesh 将不可见。
- 如果没有指定 `material`，则使用内部的默认材质（呈现灰色）。

:::

## geometry 几何体

`geometry` 属性是一个按 type 分类的对象，每种类型都有不同的属性：

### **type: box** 立方体

<CodeLive>
{`
<style>
  xr-mesh {
    animation: rotate 20s linear infinite;
  }
   xr-mesh:nth-of-type(1) {
    ---geometry: "?type=box &size=0.5";
    ---position: -2 0 0;
  }
  xr-mesh:nth-of-type(2) {
    ---geometry: "?type=box";
    ---position: 0 0 0;
  }
  xr-mesh:nth-of-type(3) {
    ---geometry: "?type=box &width=0.5 &height=1 &depth=0.1 &subdivisions=1";
    ---position: 2 0 0;
  }
  @keyframes rotate {
    from {
      ---rotation: 0 0 0;
    }
    to {
      ---rotation: 0 360 0;
    }
  }
</style>

<xr-scene>
  <xr-camera radius="3"></xr-camera>
  <xr-mesh></xr-mesh>
  <xr-mesh></xr-mesh>
  <xr-mesh></xr-mesh>
  <xr-loading>
    <div class='loading'></div>
  </xr-loading>
</xr-scene>
`}
</CodeLive>

| 属性名     | 描述 | 类型     |
| ---------- | ---- | -------- |
| **width**  | 宽度 | `Number` |
| **height** | 高度 | `Number` |
| **depth**  | 深度 | `Number` |
| **size**   | 尺寸 | `Number` |

:::info

`size` 属性是 `width`、`height`、`depth` 的缩写。如果同时指定了 `width`、`height` 或 `depth`，则 `size` 属性无效。

:::

### **type: sphere** 球体

<CodeLive>
{`
<style>
  xr-mesh {
    animation: rotate 20s linear infinite;
  }
  xr-mesh:nth-of-type(1) {
    ---geometry: "?type=sphere &diameter=0.5";
    ---position: -2 0 0;
  }
  xr-mesh:nth-of-type(2) {
    ---geometry: "?type=sphere &arc=0.8 &slice=0.7";
    ---position: 0 0 0;
  }
  xr-mesh:nth-of-type(3) {
    ---geometry: "?type=sphere &diameter=0.5 &diameter-x=0.5 &diameter-y=1 &diameter-z=0.1";
    ---position: 2 0 0;
  }
  @keyframes rotate {
    from {
      ---rotation: 0 0 0;
    }
    to {
      ---rotation: 0 360 0;
    }
  }
</style>

<xr-scene>
  <xr-camera radius="3" beta="80"></xr-camera>
  <xr-mesh></xr-mesh>
  <xr-mesh></xr-mesh>
  <xr-mesh></xr-mesh>
  <xr-loading>
    <div class='loading'></div>
  </xr-loading>
</xr-scene>
`}
</CodeLive>

| 属性名         | 描述                                                                 | 类型     |
| -------------- | -------------------------------------------------------------------- | -------- |
| **diameter**   | 直径                                                                 | `Number` |
| **diameter-x** | 直径X                                                                | `Number` |
| **diameter-y** | 直径Y                                                                | `Number` |
| **diameter-z** | 直径Z                                                                | `Number` |
| **arc**        | 圆弧值，范围 0-1。以基于此值给定的周长（纬度环线）的比例创建非闭合球 | `Number` |
| **slice**      | 切片值，范围 0-1。作用同 `arc` 属性，但是应用在 _经度环线_ 上        | `Number` |

### **type: cylinder** 圆柱体

<CodeLive>
{`
<style>
  xr-mesh {
    animation: rotate 20s linear infinite;
  }
  xr-mesh:nth-of-type(1) {
    ---geometry: "?type=cylinder &height=1 &diameter-top=0.3";
    ---position: -2 0 0;
  }
  xr-mesh:nth-of-type(2) {
    ---geometry: "?type=cylinder &height=1";
    ---position: 0 0 0;
  }
  xr-mesh:nth-of-type(3) {
    ---geometry: "?type=cylinder &height=1 &diameter-bottom=0 &cap=false";
    ---position: 2 0 0;
  }
  @keyframes rotate {
    from {
      ---rotation: 0 0 0;
    }
    to {
      ---rotation: 0 360 0;
    }
  }
</style>

<xr-scene>
  <xr-camera radius="3" beta="60"></xr-camera>
  <xr-mesh></xr-mesh>
  <xr-mesh></xr-mesh>
  <xr-mesh></xr-mesh>
  <xr-loading>
    <div class='loading'></div>
  </xr-loading>
</xr-scene>
`}
</CodeLive>

| 属性名              | 描述     | 类型      |
| ------------------- | -------- | --------- |
| **height**          | 高度     | `Number`  |
| **diameter-top**    | 顶部直径 | `Number`  |
| **diameter-bottom** | 底部直径 | `Number`  |
| **tessellation**    | 细分数   | `Number`  |
| **subdivisions**    | 细分数   | `Number`  |
| **has-rings**       | 是否有环 | `Boolean` |
| **enclose**         | 是否封闭 | `Boolean` |
| **cap**             | 是否封顶 | `Boolean` |

### **type: disc** 圆盘

| 属性名           | 描述   | 类型     |
| ---------------- | ------ | -------- |
| **radius**       | 半径   | `Number` |
| **tessellation** | 细分数 | `Number` |

### **type: plane** 平面

| 属性名     | 描述 | 类型     |
| ---------- | ---- | -------- |
| **size**   | 尺寸 | `Number` |
| **width**  | 宽度 | `Number` |
| **height** | 高度 | `Number` |

### **type: torus** 圆环

| 属性名           | 描述   | 类型     |
| ---------------- | ------ | -------- |
| **diameter**     | 直径   | `Number` |
| **thickness**    | 厚度   | `Number` |
| **tessellation** | 细分数 | `Number` |
