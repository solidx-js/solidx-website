# 模型

模型是可被场景载入的外部 3D 文件，例如 glTF、FBX、OBJ 等。

:::warning
模型文件必须是可被 babylon.js 识别的格式，否则无法被正确载入。截止目前，babylon.js 支持的模型格式有：glTF、OBJ。
:::

## DamagedHelmet

<CodeLive>
{`
<style>
  xr-model {
    ---src: "{{ BASE_URL }}/model/DamagedHelmet.glb";
    ---rotation: 0 150 0;
  }
</style>

<xr-scene background="#000">
  <xr-gui>
    <xr-gui-folder source="xr-scene"></xr-gui-folder>
  </xr-gui>
  <xr-camera radius="3"></xr-camera>
  <xr-model></xr-model>
  <xr-loading>
    <div class="loading"></div>
  </xr-loading>
</xr-scene>
`}
</CodeLive>
