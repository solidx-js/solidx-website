# 引入

## 通过 CDN 链接引入

作为一个 Web 应用，你可以通过 CDN 链接引入 solidx.js。这也是推荐的 **零构建** 使用方式。

脚本加载完毕后，会在全局注册自定义组件，并为每个处于文档流的 `xr-scene` 标签创建独立的 3D 引擎实例。通常你不需要关心 xr 组件之间是如何相互作用的，只需要声明元素状态即可。

```html
<head>
  <link rel="stylesheet" href="https://registry.npmmirror.com/solidx.js/latest/files/assets/preset.css" />
</head>

<body>
  <xr-scene>
    <xr-camera radius="6" beta="75"></xr-camera>
    <xr-mesh geometry="primitive://box" material="primitive://pbr?albedo-color=#ffc069"></xr-mesh>
  </xr-scene>

  <script src="https://registry.npmmirror.com/solidx.js/latest/files/dist/index.js"></script>
</body>
```

:::info

- 如有本地开发需求，可以下载对应版本的 js 文件，自主进行部署。
- `window.SOLIDX` 对象暴露了 xr 组件和 babylonjs 的 API，可以进阶使用。

:::

## 通过 NPM 安装

使用 npm 命令在提示行中安装依赖：

```bash
npm install solidx.js --save
```

在项目开始处：
  
```js
import 'solidx.js/assets/preset.css';
import 'solidx.js';
```

具体业务中，可以引入指定模块进行操作：

```js
import { Vector3, Matrix } from 'solidx.js';
```

:::warning

- 由于显式引用了 `.css` 文件，因此需要在 webpack 中配置对应的 loader。或者在项目的入口 html 文件中通过 CDN 链接的形式引入对应的 css 文件，而不是在 js 文件中引入。

:::