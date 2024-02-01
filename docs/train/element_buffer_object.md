# 元素缓冲对象 EBO

元素缓冲对象(Element Buffer Object，EBO)，也叫索引缓冲对象(Index Buffer Object，IBO)。

EBO 用于存储图元（如三角形、线段等）的索引数据。这些索引定义了图元中顶点的顺序，使得WebGL能够知道如何将顶点数据组合成图元。

## 代码示例

这里用一个简单的四边形来演示 EBO 的使用。

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

  // 创建顶点着色器
  const vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, document.querySelector('script[type="shader/vertex"]').textContent);
  gl.compileShader(vertexShader);

  // 创建片元着色器
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, document.querySelector('script[type="shader/fragment"]').textContent);
  gl.compileShader(fragmentShader);

  // 创建着色器程序
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.useProgram(program);

  // 获取 attribute 变量的地址
  const a_position = gl.getAttribLocation(program, 'a_position');
  
  // 获取 uniform 变量的地址
  const u_color = gl.getUniformLocation(program, 'u_color');

  // 顶点数据
  const vertices = [
    -0.5, 0.5,
    -0.5, -0.5,
    0.5, 0.5,
    0.5, -0.5,
  ];

  // 索引数据
  const indices = [
    0, 1, 2,
    1, 2, 3,
  ];

  // 创建顶点缓冲对象
  const vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  // 创建索引缓冲对象
  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

  // 设置顶点属性指针
  gl.vertexAttribPointer(a_position, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(a_position);

  // 清空画布
  gl.clearColor(0, 0, 0, 1);

  let _i = 0;

  setInterval(() => {
    gl.clear(gl.COLOR_BUFFER_BIT);

    // 绘制图元
    if (_i % 2 === 0) {
      gl.uniform4f(u_color, 1, 0, 0, 1);
      gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
    }

    // 绘制边框
    if (_i % 2 === 1) {
      gl.uniform4f(u_color, 0, 1, 0, 1);
      gl.drawElements(gl.LINE_LOOP, indices.length, gl.UNSIGNED_SHORT, 0);
    }

    _i += 1;
  }, 500);

</script>

`}
</CodeLive>

## 要点解析

### gl.drawElements()

`gl.drawElements(mode, count, type, offset)` 函数用于绘制图元。相比 `gl.drawArrays(mode, count)`，它需要额外的索引数据，用于指定绘制哪些顶点:

- `count`: 索引数量（注意不是顶点数量）。
- `type`: 索引数据的类型，可以是 `gl.UNSIGNED_BYTE`、`gl.UNSIGNED_SHORT` 或 `gl.UNSIGNED_INT`。
    - `gl.UNSIGNED_BYTE`：每个索引占用 1 字节，范围是 0 ~ 255。
    - `gl.UNSIGNED_SHORT`：每个索引占用 2 字节，范围是 0 ~ 65535。
    - `gl.UNSIGNED_INT`：每个索引占用 4 字节，范围是 0 ~ 4294967295。
- `offset`: 索引数据的偏移量。

由于索引列表项被定义成 `Uint16Array` 类型，因此这里的 `type` 参数是 `gl.UNSIGNED_SHORT`。

:::info

[VAO](/docs/train/vertex_array_object) 也会记录 `gl.ELEMENT_ARRAY_BUFFER` 的绑定状态。

:::