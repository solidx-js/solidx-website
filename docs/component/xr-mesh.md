# xr-mesh 网格

网格是3D场景中的基本元素，它由顶点和面组成。网格可以用来表示各种物体，比如地形、建筑、人物、动物等。

网格通常需要指定以下两种数据：

1. **geometry** 网格数据源，用来描述网格的顶点和面，例如形状、法线、UV等。
2. **material** 材质数据源，用来描述网格的材质，例如颜色、纹理、光照等。

## 属性

| 属性名         | 描述           | 类型               | 默认值    |
| -------------- | -------------- | ------------------ | --------- |
| **geometry**   | 网格 [1]       | `Object`           | -         |
| **material**   | 材质数据源 [2] | `String`、`Object` | -         |
| **position**   | 位置           | `Vector3`          | `0 0 0`   |
| **rotation**   | 旋转           | `Vector3`          | `0 0 0`   |
| **scale**      | 缩放           | `Vector3`          | `1 1 1`   |
| **quaternion** | 四元数         | `Vector4`          | `0 0 0 1` |
| **layer**      | 渲染层         | `Number`           | `0`       |

1. 如果没有指定网格，mesh 将不会被渲染。
1. 如果没有指定材质，则使用内部的默认材质（呈现灰色）。

`geometry` 是一个按 type 分类的对象，每种类型都有不同的属性

## geometry 几何体

### **type: box** 立方体

| 属性名     | 描述 | 类型     |
| ---------- | ---- | -------- |
| **width**  | 宽度 | `Number` |
| **height** | 高度 | `Number` |
| **depth**  | 深度 | `Number` |

### **type: sphere** 球体

| 属性名        | 描述  | 类型     |
| ------------- | ----- | -------- |
| **diameter**  | 直径  | `Number` |
| **diameterX** | 直径X | `Number` |
| **diameterY** | 直径Y | `Number` |
| **diameterZ** | 直径Z | `Number` |
| **arc**       | 弧度  | `Number` |
| **slice**     | 切片  | `Number` |

### **type: cylinder** 圆柱体

| 属性名             | 描述     | 类型      |
| ------------------ | -------- | --------- |
| **height**         | 高度     | `Number`  |
| **diameterTop**    | 顶部直径 | `Number`  |
| **diameterBottom** | 底部直径 | `Number`  |
| **tessellation**   | 细分数   | `Number`  |
| **subdivisions**   | 细分数   | `Number`  |
| **hasRings**       | 是否有环 | `Boolean` |
| **enclose**        | 是否封闭 | `Boolean` |
| **cap**            | 是否封顶 | `Boolean` |

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
