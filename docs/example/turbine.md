# 涡轮喷气发动机

<CodeLive vpHeight={400}>
{`
<style>
  /* 空压机叶片 */
  .scene xr-model xr-node[name='blades_turbine_003'] xr-mesh {
    ---enable-edges: true;
    ---edges-color: #00c4fb;
    ---edges-width: 0.5;
    ---material: '?alpha=0 &transparency-mode=2 &metallic=0';
  }
  /* 壳体 */
  .scene xr-model xr-node[name='hull_turbine_004'] xr-mesh {
    ---enable-edges: true;
    ---edges-color: #fbae00;
    ---edges-width: 0.2;
    ---material: '?alpha=0 &transparency-mode=2 &metallic=0';
  }
  /* 管道 */
  .scene xr-model xr-mesh[name='pipes_turbine_009_Stainlesssteel-Black-PBR_0'] {
    ---material: '?albedo-color=#00c4fb &emissive-color=#00c4fb &emissive-intensity=2 &wireframe=true';
  }
  /* 空气滤芯 */
  .scene xr-model xr-mesh[name='canister_turbine_011_Nickel-Light-PBR_0'] {
    ---material: '?albedo-color=#00c4fb &emissive-color=#00c4fb &emissive-intensity=1 &wireframe=true';
  }
  /* 燃烧室 */
  .scene xr-model xr-node[name='plates_turbine_016'] xr-mesh {
    ---material: '?albedo-color=yellow &emissive-color=yellow &emissive-intensity=1.2 &wireframe=true';
  }
</style>

<xr-scene class="scene" inspectx background="#000">
  <xr-camera radius="3" alpha="-50"></xr-camera>

  <xr-glow intensity="0.5"></xr-glow>

  <xr-model src="{{ BASE_URL }}/model/turbine-01.glb" rotation="0 150 0" auto-play loop></xr-model>

  <xr-loading>
    <div class="loading"></div>
  </xr-loading>
</xr-scene>
`}
</CodeLive>