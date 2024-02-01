# 绘制三角形

调用原生 webgl 接口绘制三角形。

## 代码实现

<CodeLive libs="">
{`
<canvas id="canvas" width="400" height="400"></canvas>

<script type="shader/vertex">
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0, 1);
  }
</script>

<script type="shader/fragment">
  precision mediump float;
  uniform vec4 u_color;
  void main() {
    gl_FragColor = u_color;
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

  // 创建片元着色器
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, fragmentShaderSource);
  gl.compileShader(fragmentShader);

  // 创建着色器程序
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  // 获取 attribute 变量的地址
  const a_position = gl.getAttribLocation(program, 'a_position');

  // 获取 uniform 变量的地址
  const u_color = gl.getUniformLocation(program, 'u_color');

  // 创建缓冲区
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

  // 设置顶点数据
  const points = [
    0, 0,
    0, 0.5,
    0.7, 0,
  ];
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points), gl.STATIC_DRAW);

  // 清空画布
  gl.clearColor(0, 0, 0, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);

  // 使用着色器程序
  gl.useProgram(program);

  // 启用 attribute 变量
  gl.enableVertexAttribArray(a_position);

  // 设置 attribute 变量指向缓冲区
  gl.vertexAttribPointer(a_position, 2, gl.FLOAT, false, 0, 0);

  // 设置 uniform 变量
  gl.uniform4fv(u_color, [1, 0, 0, 1]);

  // 绘制三角形
  gl.drawArrays(gl.TRIANGLES, 0, 3);
  
</script>
`}
</CodeLive>

## 要点解析

### 顶点缓冲对象 VBO (Vertex Buffer Object)

顶点缓冲对象（Vertex Buffer Object，简称 VBO）是一种在图形处理器（GPU）内存中存储顶点数据的机制，它是 WebGL 和 OpenGL 这类图形 API 的一个重要组成部分。

顶点数据可以包括各种类型的信息，如顶点的位置、颜色、法线、纹理坐标等。通过使用 VBO，我们可以一次性地将这些数据发送到 GPU，然后在渲染过程中重复使用，这比每次渲染时都发送数据要高效得多。

这个缓冲有一个独一无二的ID，我们可以使用 `gl.createBuffer()` 创建一个缓冲对象，然后使用 `gl.bindBuffer()` 将其绑定到 WebGL 上下文中的一个目标（target）上。

顶点缓冲对象的缓冲类型是 `gl.ARRAY_BUFFER`。同时还有其他类型的缓冲对象：

- `gl.ELEMENT_ARRAY_BUFFER`：用于索引的缓冲，这些索引定义了图元中顶点的顺序，通常用于 `gl.drawElements()` 函数，以指定绘制哪个顶点。
- `gl.PIXEL_UNPACK_BUFFER`：用于存储像素数据，通常用于 gl.texImage2D 函数。它允许在纹理数据被加载到GPU之前先在CPU上进行预处理。由于性能考虑，通常不推荐使用gl.PIXEL_UNPACK_BUFFER，因为它会增加CPU和GPU之间的数据传输。
- `gl.PIXEL_PACK_BUFFER`：用于从纹理中提取像素数据。它通常用于将渲染结果从GPU传输到CPU。
- `gl.TEXTURE_BUFFER`：用于存储纹理数据，通常用于大型纹理的存储。它允许将纹理数据存储在缓冲对象中，而不是直接存储在纹理图像中。
- `gl.QUERY_BUFFER`：用于存储查询结果，如时间查询、渲染时间查询等。
- `gl.BUFFER_ACCESS_OBJECT`：用于跟踪缓冲对象的数据访问模式。它允许开发者指定数据如何被访问和修改，以便GPU可以进行更有效的优化。
- `gl.BUFFER_BINDING_OBJECT`：用于跟踪绑定到特定目标上的缓冲对象。它允许开发者绑定多个缓冲对象到一个目标，并在需要时选择使用哪个缓冲对象。

当需要解绑时，可以使用 `gl.bindBuffer(target, null)`。

### 指定缓冲区数据的用途

在 WebGL 中，我们可以使用 `gl.bufferData()` 函数向缓冲区中写入数据。它有三个参数：

- target：指定要绑定的缓冲区类型，如 `gl.ARRAY_BUFFER`、`gl.ELEMENT_ARRAY_BUFFER` 等。
- data：指定要写入缓冲区的数据，可以是 `ArrayBuffer`、`TypedArray` 或 `DataView`。
- usage：指定缓冲区数据的用途，如 `gl.STATIC_DRAW`、`gl.DYNAMIC_DRAW` 等。

当创建一个缓冲区并为其分配数据时，需要指定这些数据是如何被使用的，以便WebGL可以优化数据传输到GPU的方式。

- `gl.STATIC_DRAW`：缓冲区中的数据 **不会经常改变**，它们在渲染过程中保持不变，因此它可以将这些数据一次性传输到GPU的内存中，并将其存储在一个不会经常被替换的位置。
- `gl.DYNAMIC_DRAW`：用于数据在绘制调用之间 **经常改变** 的情况。
- `gl.STREAM_DRAW`：用于数据在每次绘制调用之间 **都会改变** 的情况

### 清空画布

在 WebGL 中，我们可以使用 `gl.clearColor(red, green, blue, alpha)` 函数设置画布的清空颜色，然后使用 `gl.clear(mask)` 函数清空画布。

`gl.COLOR_BUFFER_BIT` 是WebGL中的一个标志位，指示应该清除颜色缓冲区中的内容。颜色缓冲区存储了帧缓冲区中每个像素的颜色值，这些值在渲染过程中被用来绘制图形。通常用于初始化屏幕或在渲染新帧之前清除之前的帧。

`gl.clear()` 函数还接受其他标志位：

- `gl.DEPTH_BUFFER_BIT`：用于清除深度缓冲区。
- `gl.STENCIL_BUFFER_BIT`：用于清除模板缓冲区。

可以使用按位或 `|` 运算符将这些标志位组合在一起，一次性清除多个缓冲区。

### 变量地址

在 WebGL 中，我们可以使用 `gl.getAttribLocation()` 函数获取 attribute 变量的地址，使用 `gl.getUniformLocation()` 函数获取 uniform 变量的地址。

所谓地址，其实是索引值，它指向了 WebGL 内部的一个变量。举例：

`gl.getAttribLocation()` 函数执行以下操作：

1. 搜索：函数在顶点着色器中搜索名为 'a_position' 的 attribute 变量。
1. 返回位置：如果找到了该变量，函数返回该变量的位置索引。位置索引是一个整数。
1. 如果没有找到：如果变量在顶点着色器中没有找到，函数将返回-1。


### 链接顶点属性

在 WebGL 中，我们可以使用 `gl.vertexAttribPointer()` 函数链接顶点属性。它有六个参数：

1. `index`：指定要链接的顶点属性的索引，即上述 `gl.getAttribLocation()` 函数返回的位置索引。
1. `size`：指定每个顶点属性的分量数，如 `vec2` 是 2，`vec3` 是 3，`vec4` 是 4。
1. `type`：指定每个顶点属性的数据类型，如 `gl.FLOAT`、`gl.INT` 等。
1. `normalized`：指定是否将非浮点型的数据归一化到 [0, 1] 或 [-1, 1] 区间。
1. `stride`：指定相邻两个顶点属性之间的字节数。
1. `offset`：指定顶点属性在缓冲区中的偏移量。

理解 `gl.vertexAttribPointer(a_position, 2, gl.FLOAT, false, 0, 0)` 这行代码的含义：

1. 第一个参数（a_position）：`gl.getAttribLocation()` 函数返回的位置索引。
1. 第二个参数（2）：顶点属性的分量数。2 表示每个顶点有两个属性：x和y坐标。
1. 第三个参数（gl.FLOAT）：每个属性的数据类型。gl.FLOAT表示每个属性是一个32位浮点数。
1. 第四个参数（false）：false 表示数据不会被标准化，即数据值将以其原始形式直接传递给着色器。
1. 第五个参数（0）：0 表示来让 WebGL 决定具体步长是多少（只有当数值是紧密排列时才可传 0）。一旦有更多的顶点属性，就必须手动定义这个值。
1. 第六个参数（0）：偏移量为 0，这意味着属性数组从第一个属性开始。

用结构示意图表示：

```text
| vert1 | vert2 | vert3 | ...
| x | y | x | y | x | y | ...

offset: 0
```

:::info

每个顶点属性从一个 VBO 中获得数据。而具体是从哪个 VBO（程序中可以有多个VBO）获取，是由最近的 `gl.bindBuffer()` 调用决定的。

:::

### 浮点数的精度

在 WebGL 中，可以使用 `precision mediump float` 语句指定浮点数的精度。它有三个选项：

- `highp`：高精度，64位浮点数。
- `mediump`：中等精度，32位浮点数。
- `lowp`：低精度，16位浮点数。

使用 `highp` 精度可以获得更高的数值精确度，这对于需要高精度的计算（如光线追踪、物理模拟等）非常重要，但也意味着更高的内存和带宽需求。

通常使用 `mediump` 精度，因为它在大多数情况下都能提供足够的精确度，同时也不会显著降低性能。

### 绘制调用

在 WebGL 中使用 `gl.drawArrays(mode, first, count)` 函数绘制图形。它有三个参数：

1. `mode`：指定绘制的图元类型
    - `gl.POINTS`：绘制一系列独立的点。
    - `gl.LINES`：绘制一系列连接的线段。
    - `gl.LINE_LOOP`：绘制一系列连接的线段，最后一个顶点与第一个顶点相连。
    - `gl.LINE_STRIP`：绘制一系列连接的线段，但不闭合。
    - `gl.TRIANGLES`：绘制一系列连接的三角形。
    - `gl.TRIANGLE_STRIP`：绘制一系列连接的三角形，共享边但不闭合。
    - `gl.TRIANGLE_FAN`：绘制一系列连接的三角形，共享第一个顶点但不闭合。
1. `first`：指定从哪个顶点开始绘制，通常为 0。
1. `count`：指定绘制需要使用到多少个顶点。


理解 `gl.drawArrays(gl.TRIANGLES, 0, 3)` 这行代码的含义：

1. 第一个参数（gl.TRIANGLES）：绘制三角形。
1. 第二个参数（0）：从第一个顶点开始绘制。
1. 第三个参数（3）：绘制三个顶点。由于每个三角形有 3 个顶点，因此绘制了一个三角形。

:::info

和 `gl.drawArrays()` 功能类似的，还有 `gl.drawElements()` 函数。但它需要接受一个额外的参数，即索引缓冲区对象，用于指定绘制图元时使用的顶点索引。因此，它还需要两个缓冲区对象：一个用于存储顶点数据，一个用于存储顶点索引。

:::

## regl 简化样板代码

[regl](https://github.com/regl-project/regl) 是一个基于 WebGL 的高性能图形库，它可以帮助我们简化样板代码，让我们专注于图形编程。


<CodeLive libs="regl">
{`
<canvas id="canvas" width="400" height="400"></canvas>

<script type="shader/vertex">
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0, 1);
  }
</script>

<script type="shader/fragment">
  precision mediump float;
  uniform vec4 u_color;
  void main() {
    gl_FragColor = u_color;
  }
</script>

<script>
  const canvas = document.getElementById('canvas');
  const regl = createREGL(canvas);

  const draw = regl({
    vert: document.querySelector('script[type="shader/vertex"]').textContent,
    frag: document.querySelector('script[type="shader/fragment"]').textContent,
    attributes: {
      a_position: regl.prop('position'),
    },
    uniforms: {
      u_color: regl.prop('color'),
    },
    count: 3,
  });

  regl.clear({ color: [0, 0, 0, 1] });

  draw({
    position: [
      0, 0,
      0, 0.5,
      0.7, 0,
    ],
    color: [1, 0, 0, 1],
  });
</script>
`}
</CodeLive>