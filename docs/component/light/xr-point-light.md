# xr-point-light 点光源

点光源是一种特殊的光源，它的光线是从一个点向四周发散的，例如灯泡。

## 示例

<CodeLive>
{`
<style>
  xr-point-light {
    animation: rotate 10s linear infinite;
    ---inspect: '?scale=5';
  }
  @keyframes rotate {
    from {
      ---diffuse: red;
      ---position: 0 -0.3 0;
    }
    30% {
      ---diffuse: yellow;
    }
    50% {
      ---position: 0 1 0;
    }
    60% {
      ---diffuse: blue;
    }
    to {
      ---diffuse: green;
      ---position: 0 -0.3 0;
    }
  }
</style>

<xr-scene env-intensity="0.05" background="#000">
  <xr-camera radius="3"></xr-camera>
  <xr-point-light intensity="3" shadow-caster="xr-mesh"></xr-point-light>
  <xr-mesh geometry="?type=sphere" position="-1 0 0"></xr-mesh>
  <xr-mesh geometry="?type=box" position="1 0 0"></xr-mesh>
  <xr-mesh geometry="?type=plane &size=10" position="0 -0.8 0" rotation="90 0 0"></xr-mesh>
  <xr-loading>
    <div class='loading'></div>
  </xr-loading>
</xr-scene>
`}
</CodeLive>

## 公共属性

- [light 灯光](/docs/component/light)

## 自有属性

| 属性名       | 描述       | 类型     | 默认值  |
| ------------ | ---------- | -------- | ------- |
| **position** | 光源的位置 | `String` | `0 0 0` |
