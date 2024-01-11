# light 灯光

灯光是一种特殊的组件，它可以照亮场景中的其他物体。

## 公共属性

| 属性                                | 描述                           | 类型     | 默认值 |
| ----------------------------------- | ------------------------------ | -------- | ------ |
| **diffuse**                         | 光颜色                         | `Color`  | -      |
| **intensity**                       | 光强度                         | `Number` | -      |
| **shadow-caster**                   | 阴影对象选择器（css selector） | `String` | -      |
| **shadow-caster-filtering-quality** | 阴影质量: 0, 1, 2              | `Number` | 1      |
| **shadow-caster-bias**              | 阴影偏移                       | `Number` | 0.01   |
| **shadow-caster-normal-bias**       | 阴影法向偏移                   | `Number` | 0.01   |

:::info

`shadow-caster` 用来指定哪些对象可以投射阴影，它的值是一个 css selector，例如 `#box`，表示 id 为 `box` 的对象可以投射阴影。

`shadow-caster-bias` 和 `shadow-caster-normal-bias` 用来调整阴影的偏移，防止阴影龊疮。

:::
