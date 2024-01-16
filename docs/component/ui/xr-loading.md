# xr-loading 加载占位

加载占位组件，用于在场景加载完毕前显示一个 HTML 元素。

这是一个纯 UI 组件，不会对 3D 场景产生任何影响。你可以在 `xr-loading` 的内部使用 **任何 HTML 元素**，比如图片、视频、文字等。

当场景加载完毕后，`xr-loading` 会自动 fade out，然后设置成 `display: none`。

## 示例

在下面这个示例中，我们使用一个 `xr-loading` 组件来显示一个 landing 图片。当场景加载完毕后，图片会渐出消失。

注意，为了让 `xr-loading` 组件效果更明显，我们在 `xr-scene` 组件上添加 `render-delay` 属性，这样场景就会在 3 秒后才开始渲染。

<CodeLive>
{`
<xr-scene render-delay="3000">
  <xr-camera radius="3" alpha="-45" beta="60"></xr-camera>
  <xr-mesh geometry="?type=box"></xr-mesh>
  <xr-loading style="background: url({{ BASE_URL }}/img/social.png) center / contain no-repeat, #fff">
  </xr-loading>
</xr-scene>
`}
</CodeLive>

## 公共属性

无

## 自有属性

无
