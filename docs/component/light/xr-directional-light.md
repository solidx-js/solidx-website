# xr-directional-light 平行光

平行光是一种特殊的光源，它的光线是平行的，例如太阳光。

## 示例

<CodeLive>
{`
<style>
  xr-directional-light {
    animation: rotate 10s linear infinite;
  }
  @keyframes rotate {
    from {
      ---diffuse: red;
      ---alpha: 0;
      ---beta: 0;
    }
    30% {
      ---diffuse: yellow;
      ---beta: 80;
    }
    60% {
      ---diffuse: blue;
      ---beta: 30;
    }
    to {
      ---diffuse: green;
      ---alpha: 360;
    }
  }
</style>

<xr-scene env-intensity="0.05" background="#000">
  <xr-gui>
    <xr-gui-folder source="xr-directional-light"></xr-gui-folder>
  </xr-gui>

  <xr-camera radius="3"></xr-camera>
  <xr-directional-light intensity="3" shadow-caster="xr-mesh"></xr-directional-light>
  <xr-mesh geometry="primitive://sphere" position="-1 0 0"></xr-mesh>
  <xr-mesh geometry="primitive://box" position="1 0 0"></xr-mesh>
  <xr-mesh geometry="primitive://plane?size=10" position="0 -0.8 0" rotation="90 0 0"></xr-mesh>
  <xr-loading>
    <div class='loading'></div>
  </xr-loading>
</xr-scene>
`}
</CodeLive>

## 公共属性

- [light 灯光](/docs/component/light)

## 自有属性

| 属性名    | 描述              | 类型     | 默认值 |
| --------- | ----------------- | -------- | ------ |
| **alpha** | 光线的角度(alpha) | `Number` | 40     |
| **beta**  | 光线的角度(beta)  | `Number` | 30     |
