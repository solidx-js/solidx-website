# 顶点数组对象

Vertex Array Object (VAO) 是 WebGL 中用于存储顶点属性状态的对象。使用 VAO 可以避免在每个绘制调用时重复设置顶点属性，从而提高性能。

:::warning

- VAO 只能存储顶点属性状态，不能存储顶点数据。顶点数据仍然需要存储在 VBO 中。
- VAO 是 webgl2 的特性，webgl1 需要通过扩展支持。兼容性请参考 [caniuse](https://caniuse.com/?search=webgl2)。

:::

## 代码示例

利用 Vertex Array Object 特性渲染两个不同的三角形。

<CodeLive libs="">
{`
<canvas id="canvas" width="400" height="400"></canvas>

<script type="x-shader/x-vertex" id="vertex-shader">
precision mediump float;
attribute vec2 a_position;

void main() {
  gl_Position = vec4(a_position, 0, 1);
}
</script>

<script type="x-shader/x-fragment" id="fragment-shader">
precision mediump float;
uniform vec4 u_color;

void main() {
  gl_FragColor = u_color;
}
</script>

<script>
  const canvas = document.getElementById('canvas');
  const gl = canvas.getContext('webgl2');

  // 创建顶点着色器
  const vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, document.getElementById('vertex-shader').textContent);
  gl.compileShader(vertexShader);

  // 创建片元着色器
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, document.getElementById('fragment-shader').textContent);
  gl.compileShader(fragmentShader);

  // 创建着色器程序
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  // 使用着色器程序
  gl.useProgram(program);

  // 清空画布
  gl.clearColor(0, 0, 0, 1);

  // 获取 attribute 变量的地址
  const a_position = gl.getAttribLocation(program, 'a_position');

  // 获取 uniform 变量的地址
  const u_color = gl.getUniformLocation(program, 'u_color');

  // 创建 VAO
  function createAndSetupVAO(positions) {
    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);

    // 创建缓冲区
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    // 设置 attribute 变量的数据格式和位置
    gl.enableVertexAttribArray(a_position);
    gl.vertexAttribPointer(a_position, 2, gl.FLOAT, false, 0, 0);

    return vao;
  }

  const vaoList = [
    createAndSetupVAO([
      0, 0,
      0, 0.5,
      0.7, 0,
    ]),
    createAndSetupVAO([
      0, 0,
      0.7, 0,
      0.7, 0.5,
    ]),
  ];

  let _vaoIndex = 0;
  setInterval(() => {
    gl.clear(gl.COLOR_BUFFER_BIT);

    // 获取 VAO
    const vao = vaoList[_vaoIndex];
    gl.bindVertexArray(vao);

    // 设置不同的颜色
    gl.uniform4fv(u_color, [Math.random(), Math.random(), Math.random(), 1]);

    // 绘制三角形
    gl.drawArrays(gl.TRIANGLES, 0, 3);

    _vaoIndex = (_vaoIndex + 1) % vaoList.length;
  }, 500);

</script>
`}
</CodeLive>

## 要点解析

### gl.clear()

`gl.clear()` 函数设置的掩码在执行绘制操作后会 **被清空**。所以一般情况下，在每次绘制前都需要调用一次 `gl.clear()` 函数。

### VAO 的创建和绑定

使用 `gl.createVertexArray()` 函数创建 VAO，并用 `gl.bindVertexArray()` 函数绑定 VAO。

当 VAO 绑定后，后续的 **顶点操作**（例如设置 ARRAY_BUFFER 和属性指针等）都会作用在这个 VAO 上，会被 VAO 记录下来。执行绘制的时候，会使用当前绑定的 VAO 记录的状态。

如果需要解绑，可以使用 `gl.bindVertexArray(null)` 函数。
