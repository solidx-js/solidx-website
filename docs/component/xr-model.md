# xr-model 模型

模型是可被场景载入的外部 3D 文件，例如 glTF、FBX、OBJ 等。

:::warning
模型文件必须是可被 babylon.js 识别的格式，否则无法被正确载入。截止目前，babylon.js 支持的模型格式有：glTF、OBJ。
:::

[![Edit DamagedHelmet](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/damagedhelmet-4cv2n3?file=%2Findex.html%3A9%2C10)

## 公共属性

| 属性名                                                           | 参考                                                 |
| ---------------------------------------------------------------- | ---------------------------------------------------- |
| **position**, **rotation**, **quaternion**, **scale**, **layer** | [transform node 节点](/docs/component/transformnode) |

## 自有属性

| 属性名               | 描述                                                                                                                                                        | 类型               | 默认值 |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------ |
| **src**              | 模型文件路径，必须是一个 `http` 开头的地址，例如网络地址或 BlobURl。                                                                                        | `String`           | -      |
| **extension**        | 模型文件扩展名                                                                                                                                              | `String`           | -      |
| **material**         | 模型材质。如果指定了，那么模型内所有网格的材质都会被替换掉。                                                                                                | `String`、`Object` | -      |
| **auto-play**        | 自动播放动画组                                                                                                                                              | `String`、`Array`  | -      |
| **loop**             | 循环播放动画                                                                                                                                                | `Boolean`          | -      |
| **flat-shading**     | 强制将模型内所有网格设置为[平面着色](https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/custom/vertexNormals#normals-and-flat-shaded-meshes) | `Boolean`          | -      |
| **origin-transform** | 原点变换矩阵                                                                                                                                                | `Matrix`           | -      |

:::warning
当 `src` 是 BlobURL 时，必须同时指定 `extension` 原始扩展名，否则无法被正确载入。
:::
