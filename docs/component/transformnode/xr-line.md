# xr-line 多段线

多段线是由多个点组成的线段，可以用来绘制任意形状的线条。

## 示例

### 任意线段

<CodeLive defaultHeight={300}>
{`
<style>
  xr-camera {
    animation: rotate 20s linear infinite;
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
  <xr-camera radius="4"></xr-camera>
  <xr-line points="-1 1 0, 1 1 0" colors="#00ff00"></xr-line>
  <xr-line points="-1 0 0, 1 0 0" colors="#ff0000"></xr-line>
  <xr-line points="-1 -1 0, 1 -1 0" colors="#0000ff"></xr-line>
  <xr-line
    points="-1 -1 0, 1 1 0, 0 0.8 0, -1 -1 0"
    colors="#000000"
  ></xr-line>
</xr-scene>
`}
</CodeLive>

### 动态修改

<CodeLive defaultHeight={300}>
{`
<style>
  @property --line-y {
    syntax: '<number>';
    initial-value: 0;
    inherits: false;
  }
  xr-line {
    animation: morph 1s ease-in-out infinite alternate;
    ---colors: #ff0000;
    ---points: -1 0 0, 0 var(--line-y) 0, 1 0 0;
  }
  @keyframes morph {
    from {
      --line-y: -0.5;
    }
    to {
      --line-y: 0.5
    }
  }
</style>

<xr-scene>
  <xr-camera radius="2"></xr-camera>
  <xr-line></xr-line>
</xr-scene>
`}
</CodeLive>

## 公共属性

- [transform node 节点](/docs/component/transformnode)

## 自有属性

| 属性名     | 描述                          | 类型     | 默认值 |
| ---------- | ----------------------------- | -------- | ------ |
| **points** | 点集合，按 `,` 分割成点坐标组 | `String` | -      |
| **color**  | 线条颜色，按 `,` 分割成颜色段 | `String` | -      |

:::info
`points` 和 `color` 的数量可以不一致。如果 `color` 数量不足，那么会按照 `color` 的最后一个值进行填充。
:::
