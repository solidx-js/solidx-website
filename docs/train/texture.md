# 纹理 Texture

纹理是一种用于表达物体表面细节的图像，它可以被映射到物体的表面上。纹理通常是二维图像，但也可以是三维图像。纹理可以用于模拟物体的表面细节，例如木纹、金属纹、皮肤纹等。纹理可以用于模拟物体的颜色、光泽、透明度等表面特性。

## 代码示例

这里演示，将下面的图片作为纹理，绘制。

![aaa](/img/boy.jpeg)

<CodeLive libs="">
{`
<canvas id="canvas" width="400" height="400"></canvas>

<script type="shader/vertex">
  attribute vec2 a_position;
  attribute vec2 a_uv;
  varying vec2 v_uv;
  void main() {
    gl_Position = vec4(a_position, 0, 1);
    v_uv = a_uv;
  }
</script>

<script type="shader/fragment">
  precision mediump float;
  uniform sampler2D u_texture;
  varying vec2 v_uv;
  void main() {
    gl_FragColor = texture2D(u_texture, v_uv);
  }
</script>

<script>
  const canvas = document.getElementById('canvas');
  const gl = canvas.getContext('webgl');

  // 顶点着色器
  const vertexShaderSource = document.querySelector('script[type="shader/vertex"]').textContent;

  // 片元着色器
  const fragmentShaderSource = document.querySelector('script[type="shader/fragment"]').textContent;

  // 创建顶点着色器
  const vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, vertexShaderSource);
  gl.compileShader(vertexShader);

  if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(vertexShader));
  }

  // 创建片元着色器
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, fragmentShaderSource);
  gl.compileShader(fragmentShader);

  if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(fragmentShader));
  }

  // 创建着色器程序
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error(gl.getProgramInfoLog(program));
  }

  // 使用着色器程序
  gl.useProgram(program);

  // 绑定 attribute 变量
  const a_position = gl.getAttribLocation(program, 'a_position');
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    -0.5, 0.5,
    -0.5, -0.5,
    0.5, 0.5,
    0.5, -0.5,
  ]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(a_position);
  gl.vertexAttribPointer(a_position, 2, gl.FLOAT, false, 0, 0);

  const a_uv = gl.getAttribLocation(program, 'a_uv');
  const uvBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    0, 1,
    0, 0,
    1, 1,
    1, 0,
  ]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(a_uv);
  gl.vertexAttribPointer(a_uv, 2, gl.FLOAT, false, 0, 0);

  // 索引
  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([
    0, 1, 2,
    1, 2, 3,
  ]), gl.STATIC_DRAW);

  // 创建纹理
  const texture = gl.createTexture();
  const image = new Image();
  image.crossOrigin = 'anonymous';
  image.src = "{{ BASE_URL }}/img/boy.jpeg";


  // 设置 uniform 变量
  const u_texture = gl.getUniformLocation(program, 'u_texture');
  gl.uniform1i(u_texture, 0);

  // 清空画布
  gl.clearColor(0, 0, 0, 1);

  // 纹理加载完成后绘制图元
  image.onload = function() {
    // 翻转图像 Y
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);

    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
    gl.generateMipmap(gl.TEXTURE_2D);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    // 绘制图元
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
  }

</script>
`}
</CodeLive>

## 要点解析

### 纹理坐标

纹理坐标是一个二维坐标，用于指定纹理图像上的一个点。使用纹理坐标获取纹理颜色叫做 **采样(Sampling)**。纹理坐标的范围是从 (0, 0) 到 (1, 1)。纹理坐标的原点是左下角，x 轴正方向是右，y 轴正方向是上，如下图所示：

<img src="https://rshop.tech/gw/assets/upload/202402021353739.png" alt="纹理坐标" />

通过给顶点添加纹理坐标，我们可以在顶点着色器中将纹理坐标传递给片元着色器，然后在片元着色器中使用纹理坐标从纹理图像中获取颜色。

:::info

`varying` 关键字用于在顶点着色器和片元着色器之间传递数据。在光栅化阶段，GPU 会对顶点着色器输出的数据进行插值，这也就是为什么我们只定义了 4 个顶点，但四边形内的每个像素都能正确显示颜色的原因。

:::

#### Y 翻转

在 WebGL 中，纹理坐标的原点定义在左下角，而图片本身的原点通常定义在左上角。因此，我们需要在加载纹理时，将图片的 Y 轴翻转，以适应 WebGL 的纹理坐标。

```js
gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
```

`gl.pixelStorei(pname, param)` 是WebGL中的一个函数，用于设置像素存储的状态。这个函数的参数决定了如何在 WebGL 中解释和处理像素数据，如像素存储的模式、像素数据的排列方式等。

参数：

- `pname`：要设置的像素存储状态。
    - `gl.UNPACK_FLIP_Y_WEBGL`：设置为 1 时，WebGL 会自动将 Y 轴方向的像素数据翻转。这通常用于图像数据。
    - `gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL`：设置为 1 时，WebGL 会自动将像素的 alpha 通道值乘以颜色值。
    - `gl.UNPACK_COLOR_ENCODING_WEBGL`：设置为 gl.SRGB_EXT 时，WebGL 会以 sRGB 颜色空间解释像素数据。
    - `gl.UNPACK_ALIGNMENT`：设置像素数据的对齐方式。
- `param`：设置的参数值。

详细文档请参考 [WebGLRenderingContext: pixelStorei() method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/pixelStorei)


:::warning

在WebGL中，通常不需要手动设置像素存储对齐的值，因为WebGL默认的对齐方式（通常是4字节对齐）已经能够满足大多数场景的需求。然而，在某些特定情况下，你可能需要手动设置像素存储对齐的值，比如一些特殊硬件架构。

:::

### 创建和绑定纹理

在 WebGL 中，我们可以使用 `gl.createTexture()` 函数创建一个纹理对象，然后使用 `gl.bindTexture()` 函数将其绑定到 WebGL 上下文中的一个目标（target）上。

```js
const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);
```

纹理对象的类型是 `gl.TEXTURE_2D`，它表示一个二维纹理。WebGL 还支持其他类型的纹理对象，具体解释如下：

- `gl.TEXTURE_2D`：二维纹理，只有宽高，是最常见的纹理类型，通常用于纹理映射。
- `gl.TEXTURE_3D`：三维纹理。有宽高和深度信息，可以被看作是一个三维数据集，可以用于存储体积数据，如环境映射、医学图像或体积渲染效果。
- `gl.TEXTURE_CUBE_MAP`：立方体贴图。包含六个纹理图像，每个图像代表立方体的一个面，具有相同的宽高，常用于环境映射。


### 加载纹理数据

可以使用 `gl.texImage2D()` 函数加载纹理数据。这个函数的参数列表有多个重载：

```js
// WebGL1
texImage2D(target, level, internalformat, width, height, border, format, type, pixels)
texImage2D(target, level, internalformat, format, type, pixels)


// WebGL2
texImage2D(target, level, internalformat, width, height, border, format, type, pixels)
texImage2D(target, level, internalformat, width, height, border, format, type, offset)
texImage2D(target, level, internalformat, width, height, border, format, type, pixels, offset)
```

参数比较多，逐一解释如下：

- `target`：指定纹理对象的类型，可以是：
    - `gl.TEXTURE_2D`：二维纹理。
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_X`: 立方体纹理的 +X 面。
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`: 立方体纹理的 -X 面。
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`: 立方体纹理的 +Y 面。
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`: 立方体纹理的 -Y 面。
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`: 立方体纹理的 +Z 面。
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`: 立方体纹理的 -Z 面。
- `level`：指定纹理的层级，通常设置为 0，表示原始纹理。更大的数字表示纹理的缩小版本（mipmap）。
- `internalformat`：指定纹理的 **内部格式**，即纹理数据在 GPU 内部的存储格式。它可以是以下值之一：
    - `gl.RGB`：红绿蓝三个通道。
    - `gl.RGBA`：红绿蓝三个通道和一个 alpha 通道。
    - `gl.LUMINANCE`：亮度。
    - `gl.LUMINANCE_ALPHA`：亮度和 alpha 通道。
    - `gl.ALPHA`：只有 alpha 通道。
    - `gl.RED`：只有红色通道。
    - `gl.RG`：红绿两个通道。
- `width`：纹理的宽度。
- `height`：纹理的高度。
- `border`：边框的宽度，通常设置为 0。
- `format`：指定纹理数据的格式（指传入的 pixels）。枚举值同 `internalformat`。
- `type`：指定纹理数据的数据类型。
    - `gl.UNSIGNED_BYTE`：无符号字节，范围是 0 ~ 255。
    - `gl.UNSIGNED_SHORT_5_6_5`：无符号短整型，范围是 0 ~ 65535。
    - `gl.UNSIGNED_SHORT_4_4_4_4`：无符号短整型，范围是 0 ~ 65535。
    - `gl.UNSIGNED_SHORT_5_5_5_1`：无符号短整型，范围是 0 ~ 65535。
- `pixels`：指定纹理数据的来源。可以是 `HTMLImageElement`、`HTMLCanvasElement`、`HTMLVideoElement` 或 `ImageData` 对象。
- `offset`：指定数据在缓冲区中的偏移量。

上述参数在 webgl1 和 webgl2 之间还 **存在差异**，尤其是 `format`、`type` 和 `pixels` 的取值方式等。详细文档参考：[WebGLRenderingContext: texImage2D() method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texImage2D)

:::info

按需指定 `type` 可以提高性能、节约显存。

:::

:::warning

在 webgl1 中，`format` 的值必须和 `internalformat` 的值相同，与 `type` 的约束关系如下：

| `format`         | `type`            | Channels | Bytes per pixel |
|------------------|-------------------|----------|----------------|
| RGBA             | UNSIGNED_BYTE     | 4        | 4              |
| RGBA             | UNSIGNED_SHORT_4_4_4_4 | 4        | 2              |
| RGBA             | UNSIGNED_SHORT_5_5_5_1 | 4        | 2              |
| RGB              | UNSIGNED_BYTE     | 3        | 3              |
| RGB              | UNSIGNED_SHORT_5_6_5 | 3        | 2              |
| LUMINANCE_ALPHA  | UNSIGNED_BYTE     | 2        | 2              |
| LUMINANCE        | UNSIGNED_BYTE     | 1        | 1              |
| ALPHA            | UNSIGNED_BYTE     | 1        | 1              |


在 webgl2 中，`format` 的值可以和 `internalformat` 的值不同，约束关系见 [WebGL 2.0 Specification](https://registry.khronos.org/webgl/specs/latest/2.0/#TEXTURE_TYPES_FORMATS_FROM_DOM_ELEMENTS_TABLE)

:::


针对下面代码的具体理解：

```js
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
```

- 这个调用的重载形式是 `texImage2D(target, level, internalformat, format, type, pixels)`。
- 参数 `target` 是 `gl.TEXTURE_2D`，表示二维纹理。
- 参数 `internalformat` 是 `gl.RGB`，因为我们的图片是 jpeg，是 RGB 格式的。
- 参数 `format` 是 `gl.RGB`，因为 webgl1 要求 `format` 和 `internalformat` 的值必须相同。
- 参数 `type` 是 `gl.UNSIGNED_BYTE`，因为当 `format` 为 `gl.RGB` 时，`type` 被约束到 `gl.UNSIGNED_BYTE`。
- 参数 `pixels` 是 `image`，是 `HTMLImageElement` 类型。


### 多级渐远纹理(Mipmap)

在纹理映射中，通常会使用多级渐远纹理（Mipmap）来提高渲染性能。Mipmap 是一组纹理，每个纹理都是前一个纹理的一半大小。Mipmap 的作用是在远处的物体上使用低分辨率的纹理，而在近处的物体上使用高分辨率的纹理，以提高渲染性能。

![](https://rshop.tech/gw/assets/upload/202402021627841.png)

> 由于远处的物体可能只产生很少的片元，从高分辨率纹理中为这些片元获取正确的颜色值就很困难，因为它需要对一个跨过纹理很大部分的片段只拾取一个纹理颜色。在小物体上这会产生不真实的感觉，更不用说对它们使用高分辨率纹理浪费内存的问题了。
> 
> 近处锯齿，远处摩尔纹，非常严重的走样现象：
>
> ![Mipmap](https://rshop.tech/gw/assets/upload/202402021622000.png?image_process=resize,w_400)

手工为每个纹理图像创建一系列多级渐远纹理很麻烦，但幸运的是，WebGL 提供了 `gl.generateMipmap(target)` 函数，可以自动生成多级渐远纹理。它会逐次往下 1/2 采样，直到纹理大小为 1x1。

#### mipmap level 选取规则

利用屏幕像素的相邻像素点估算 footprint 大小，然后根据这个大小选择合适的 mipmap level。

具体步骤如下：

1. 求当前像素点的下面几个值：
    1. u 在 x 方向上的偏微分：`∂u/∂x`
    1. u 在 y 方向上的偏微分：`∂u/∂y`
    1. v 在 x 方向上的偏微分：`∂v/∂x`
    1. v 在 y 方向上的偏微分：`∂v/∂y`
1. 求 x 方向上，单位像素对应的 uv 空间矢量长：`length_x = sqrt(∂u/∂x * ∂u/∂x + ∂v/∂x * ∂v/∂x)`
1. 求 y 方向上，单位像素对应的 uv 空间矢量长：`length_y = sqrt(∂u/∂y * ∂u/∂y + ∂v/∂y * ∂v/∂y)`
1. 上述两者取大值，作为 uv 空间矢量长：`length = max(length_x, length_y)`
1. mip level：`L = log2(length)`


用人类的话来说，就是：当屏幕像素沿 x 或 y 轴变化一个单位，贴图沿 u 或 v 方向变化了几个单位。最大变化量 log2 一下就是 mip level。

![](https://rshop.tech/gw/assets/upload/202402021642773.png)

> from [计算机图形学七：纹理映射(Texture Mapping)及Mipmap技术 - 知乎](https://zhuanlan.zhihu.com/p/144332091)

:::warning

如果是 TEXTURE_3D 类型，则还有考虑纹理空间的 `w` 分量。

![](https://rshop.tech/gw/assets/upload/202402021733637.png)

:::

### 纹理过滤

纹理过滤是指在纹理坐标映射到纹理图像上的过程中，如何获取纹理颜色。例如，纹理图像尺寸是 512x512，纹理坐标 (0.6, 0.6) 会落到 `(512 * 0.6, 512 * 0.6) => (307.2, 307.2)` 的位置。这个位置是一个浮点数，但是纹理图像的像素是整数，所以我们需要对这个位置进行插值得到新的颜色。**插值过程即纹理过滤**。

纹理过滤有很多个选项，但是现在我们只讨论最重要的两种：

1. `gl.NEAREST`：邻近过滤，Nearest Neighbor Filtering，是默认的纹理过滤方式。它会选择最近的一个纹理像素，不做任何插值。
1. `gl.LINEAR`：线性过滤，Linear Filtering，会对纹理像素进行线性插值，即使用周围四个纹理像素的加权平均值。

通常，邻近过滤适会产生颗粒状的效果，而线性过滤则会产生模糊的效果。

#### 放大和缩小

纹理图像有时候需要覆盖到一个比它自身大的区域，这个情况叫做 **放大(Magnify)**。相反，有时候需要覆盖到一个比它自身小的区域，这个情况叫做 **缩小(Minify)**。

如下图所示，格子代表像素点。粉色的区域是纹理图像，它是一个 3x3 的图像。当它要覆盖到 5x5 的区域（绿色）时，就是放大操作。当它要覆盖到 2x2 的区域（红色）时，就是缩小操作。

![](https://rshop.tech/gw/assets/upload/202402022147072.png)

在 WebGL 中，我们可以使用 `gl.texParameteri(target, pname, param)` 函数给放大和缩小设置不同的过滤方式。

```js
// 放大操作
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

// 缩小操作
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
```

:::info

放大操作使用 `NEAREST` 的意义在于减少模糊，缩小操作使用 `LINEAR` 的意义在于减少锯齿（使用 `NEAREST` 会导致明显的颗粒感）。

:::

#### mipmap 下的纹理过滤

在渲染中 mipmap 级别发生跨越时，容易产生不真实的生硬边界。因此，额外的，还有其他 4 个纹理过滤选项：

1. `gl.NEAREST_MIPMAP_NEAREST`：选择最近的 mipmap 级别，然后使用邻近过滤。
1. `gl.LINEAR_MIPMAP_NEAREST`：选择最近的 mipmap 级别，然后使用线性过滤。
1. `gl.NEAREST_MIPMAP_LINEAR`：选择两个最近的 mipmap 级别，然后使用邻近过滤。
1. `gl.LINEAR_MIPMAP_LINEAR`：选择两个最近的 mipmap 级别，然后使用线性过滤。

`gl.LINEAR_MIPMAP_LINEAR` 是最常用的纹理过滤方式，它会在 mipmap 级别之间进行线性插值，然后在纹理像素之间进行线性插值。

因此，启用 mipmap 后，通常会如下设置过滤选项：

```js
// 放大
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

// 缩小
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
```
