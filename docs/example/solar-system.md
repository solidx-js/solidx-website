# 运转的太阳系

<CodeLive vpHeight={400}>
{`
<style>
  .orth {
    ---color: #666;
  }
  #sun {
    animation: rotate 60s linear infinite;
  }
  #earth {
    animation: rotate 10s linear infinite;
  }
  #mercury {
    animation: rotate 5s linear infinite;
  }
  #venus {
    animation: rotate 8s linear infinite;
  }
  #earth-root {
    animation: rotate 10s linear infinite;
  }
  #mercury-root {
    animation: rotate 5s linear infinite;
  }
  #venus-root {
    animation: rotate 8s linear infinite;
  }
  @keyframes rotate {
    from {
      ---rotation: 0 0 0;
    }
    to {
      ---rotation: 0 360 0;
    }
  }
</style>
  
<xr-scene background="#000000" env-intensity="0.2">
  <xr-camera radius="20" alpha="-45" beta="85" max-z="1000"></xr-camera>

  <!-- 设置特效 -->
  <xr-volumetric-light source="#sun" excluded="xr-ground xr-mesh" exposure="0.1" weight="0.6" density="1.6"></xr-volumetric-light>
  <xr-ground size="1000"></xr-ground>

  <!-- 准备贴图 -->
  <xr-texture id="earth-tex" url="{{ BASE_URL }}/img/1k_earth_daymap.jpg"></xr-texture>
  <xr-texture id="sun-tex" url="{{ BASE_URL }}/img/1k_sun.jpg"></xr-texture>
  <xr-texture id="mercury-tex" url="{{ BASE_URL }}/img/1k_mercury.jpg"></xr-texture>
  <xr-texture id="venus-tex" url="{{ BASE_URL }}/img/1k_venus_surface.jpg"></xr-texture>

  <!-- 太阳 -->
  <xr-mesh id="sun" geometry="primitive://sphere" material="primitive://pbr?albedo-texture=#sun-tex&unlit=true" scale="-8 8 8">
    <xr-point-light position="0 0 0" intensity="1000"></xr-point-light>
  </xr-mesh>

  <!-- 水星 -->
  <xr-node id="mercury-root">
    <xr-mesh id="mercury" geometry="primitive://sphere" material="primitive://pbr?albedo-texture=#mercury-tex" position="8 0 0" scale="-0.5 0.5 0.5"></xr-mesh>
    <xr-ellipse class="orth" id="mercury-orth" radius-x="8" radius-y="8" rotation="90 0 0"></xr-ellipse>
  </xr-node>

  <!-- 金星 -->
  <xr-node id="venus-root">
    <xr-mesh id="venus" geometry="primitive://sphere" material="primitive://pbr?albedo-texture=#venus-tex" position="10 0 0" scale="-0.8 0.8 0.8"></xr-mesh>
    <xr-ellipse class="orth" id="venus-orth" radius-x="10" radius-y="10" rotation="90 0 0"></xr-ellipse>
  </xr-node>

  <!-- 地球 -->
  <xr-node id="earth-root">
    <xr-mesh id="earth" geometry="primitive://sphere" material="primitive://pbr?albedo-texture=#earth-tex" position="12 0 0" scale="-1 1 1"></xr-mesh>
    <xr-ellipse class="orth" id="earth-orth" radius-x="12" radius-y="12" rotation="90 0 0"></xr-ellipse>
  </xr-node>
  
  <xr-loading>
    <div class='loading'></div>
  </xr-loading>
</xr-scene>
`}
</CodeLive>
