# xr-line 多段线

多段线是由多个点组成的线段，可以用来绘制任意形状的线条。

## 示例

<CodeSandboxLink url="https://codesandbox.io/embed/xyxkq2?view=preview&module=%2Findex.html" />

## 公共属性

| 属性名                                                           | 参考                                                 |
| ---------------------------------------------------------------- | ---------------------------------------------------- |
| **position**, **rotation**, **quaternion**, **scale**, **layer** | [transform node 节点](/docs/component/transformnode) |

## 自有属性

| 属性名     | 描述                          | 类型     | 默认值 |
| ---------- | ----------------------------- | -------- | ------ |
| **points** | 点集合，按 `,` 分割成点坐标组 | `String` | -      |
| **color**  | 线条颜色，按 `,` 分割成颜色段 | `String` | -      |

:::info
`points` 和 `color` 的数量可以不一致。如果 `color` 数量不足，那么会按照 `color` 的最后一个值进行填充。
:::
