---
sidebar_position: 3
---

# 加载 3D 模型

我们推荐使用 glTF（Graphics Language Transmission Format）作为模型加载格式。

:::warning

模型文件必须是可被 babylon.js 识别的格式，否则无法被正确载入。截止目前，babylon.js 支持的模型格式有：glTF、OBJ。

:::


## 通过 xr-model 组件加载模型

在 solidx.js 中，我们使用 `xr-model` 组件来加载模型。`xr-model` 组件是一个通用的模型加载器组件。

<CodeLive>
{`
<style>
  xr-scene {
    ---background: #000;
  }
  xr-camera {
    ---radius: 3;
    ---alpha: 45;
    ---attach-control: true;
  }
  xr-model {
    ---src: {{ BASE_URL }}/model/DamagedHelmet.glb;
    animation: rotate 15s linear infinite;
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

<xr-scene>
  <xr-camera></xr-camera>
  <xr-model></xr-model>
</xr-scene>
`}
</CodeLive>

- `xr-model` 组件的 src 属性用于指定模型文件的路径，必须是一个 `http` 开头的地址，例如网络地址或 BlobURl。
- 我们给 `xr-model` 组件添加了一个动画，使模型可以自动旋转。这里使用了 CSS 动画，通过修改 `xr-model` 的 rotation 属性来实现旋转。


## 动态修改模型属性

在 solidx.js 中，所有组件的属性都可以通过 CSS 选择器和 CSS 变量配合修改。这里，我们演示一下，如何让头盔模型的灯光闪烁起来。


<CodeLive>
{`
<style>
  xr-scene {
    ---background: #000;
    ---env-intensity: 0.3;
  }
  xr-camera {
    ---radius: 3;
    ---alpha: 70;
    ---attach-control: true;
  }
  xr-model {
    ---src: {{ BASE_URL }}/model/DamagedHelmet.glb;
  }
  xr-model xr-texture[name="Material_MR (Emissive)"] {
    animation: blink 0.5s ease-in-out infinite alternate;
  }
  @keyframes blink {
    from {
      ---level: 0;
    }
    to {
      ---level: 4;
    }
  }
</style>

<xr-scene>
  <xr-camera></xr-camera>
  <xr-model></xr-model>
</xr-scene>
`}
</CodeLive>

`xr-model` 在加载 glTF 模型时，会自动解析 glTF 文件中的材质，并将材质的贴图关联到 `xr-texture` 组件。我们可以通过 `xr-texture` 组件的 `name` 属性来选择对应的贴图，然后通过 CSS 变量来修改贴图的属性。 
