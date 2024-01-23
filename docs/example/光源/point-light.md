# 点光源

点光源是一种特殊的光源，它的光线是从一个点向四周发散的，例如灯泡。


<CodeLive>
{`
<style>
  xr-point-light {
    animation: rotate 10s linear infinite;
    ---inspect: 'scale: 5';
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
  <xr-gui>
    <xr-gui-folder source="xr-point-light"></xr-gui-folder>
  </xr-gui>

  <xr-camera radius="3"></xr-camera>
  <xr-point-light intensity="3" shadow-caster="xr-mesh"></xr-point-light>
  <xr-mesh geometry="primitive://sphere" position="-1 0 0"></xr-mesh>
  <xr-mesh geometry="primitive://box" position="1 0 0"></xr-mesh>
  <xr-mesh geometry="primitive://plane?size=10" position="0 -0.8 0" rotation="90 0 0"></xr-mesh>
  <xr-loading>
    <div class='loading'></div>
  </xr-loading>
</xr-scene>
`}
</CodeLive>


- xr-point-light：定义了一个点光源，intensity="3" 表示光源的强度，shadow-caster="xr-mesh" 表示这个光源会对 xr-mesh 选择器命中的对象产生阴影。
- 三个 xr-mesh：定义了三个几何体，分别是一个球体、一个立方体和一个平面。这些几何体的位置和旋转通过 position 和 rotation 属性定义。