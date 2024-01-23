# 平行光源

平行光是一种特殊的光源，它的光线是平行的，例如太阳光。


<CodeLive>
{`
<style>
  xr-directional-light {
    ---intensity: 3;
    ---shadow-caster: xr-mesh;
    ---inspect: 'scale: 5';
    animation: rotate 10s linear infinite alternate;
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
  <xr-directional-light></xr-directional-light>

  <xr-mesh geometry="primitive://sphere" position="-1 0 0"></xr-mesh>
  <xr-mesh geometry="primitive://box" position="1 0 0"></xr-mesh>
  <xr-mesh geometry="primitive://plane?size=10" position="0 -0.8 0" rotation="90 0 0"></xr-mesh>
  <xr-loading>
    <div class='loading'></div>
  </xr-loading>
</xr-scene>
`}
</CodeLive>


- ---intensity: 3;：设置光源的强度为 3。强度越高，光源发出的光越亮。
- ---shadow-caster: xr-mesh;：设置光源会对 xr-mesh 元素产生阴影。xr-mesh 是 solidx.js 中的一个元素，用于创建一个 3D 几何体。
- ---inspect: 'scale: 5';：设置光源在检查模式下的缩放比例为 5。检查模式通常用于调试和开发。
- animation: rotate 10s linear infinite alternate;：设置一个动画，使光源进行旋转。这个动画会在 10 秒内完成一次旋转，旋转速度是线性的，动画会无限次重复，且每次重复时动画方向会交替改变。