# 半球光

半球光是一种特殊的光源，它的光线从一个方向发出，但是光线的强度是根据方向的不同而不同的，例如天空光。

半球光通常有两种颜色，一种是从上到下的颜色，一种是从下到上的颜色，这两种颜色会在中间进行混合。可用于模拟天空光和地面反射光。

在一些需要模拟开阔环境的场景中，如户外或大型室内空间，半球光是一种非常实用的光照模型。

:::warning
在 babylon.js 引擎中，半球光不产生阴影，因此 `shadow-caster` 属性不起作用。如果需要阴影，可以使用 directional-light。
:::

<CodeLive>
{`
<style>
  xr-hemispheric-light {
    animation: rotate 10s linear infinite;
    ---diffuse: yellow;
    ---ground-color: blue;
    ---inspect: 'scale: 5';
    ---beta: 30;
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

<xr-scene env-intensity="0.05" background="#000">
  <xr-gui>
    <xr-gui-folder source="xr-hemispheric-light"></xr-gui-folder>
  </xr-gui>

  <xr-camera radius="3"></xr-camera>
  <xr-hemispheric-light></xr-hemispheric-light>
  
  <xr-mesh geometry="primitive://sphere" position="-1 0 0"></xr-mesh>
  <xr-mesh geometry="primitive://box" position="1 0 0"></xr-mesh>
  <xr-loading>
    <div class="loading"></div>
  </xr-loading>
</xr-scene>
`}
</CodeLive>
