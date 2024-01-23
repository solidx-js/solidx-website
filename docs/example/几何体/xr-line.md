# 多段线

多段线是由多个点组成的线段，可以用来绘制任意形状的线条。

## 任意线段

<CodeLive>
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

## 动态修改

<CodeLive>
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

:::info
`points` 和 `color` 的数量可以不一致。如果 `color` 数量不足，那么会按照 `color` 的最后一个值进行填充。
:::
