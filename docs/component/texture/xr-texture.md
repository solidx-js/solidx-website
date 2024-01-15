# xr-texture 图片纹理

图片纹理接受一个图片 URL，然后将图片映射到 3D 物体的表面。

## 示例

<CodeLive>
{`
<style>
  #tex {
    animation: ani 10s linear infinite;
  }
  @keyframes ani {
    from {
      ---u-offset: 0;
      ---v-offset: 0;
      ---u-scale: 1;
      ---v-scale: 1;
    }
    50% {
      ---v-offset: 0.2;
      ---u-scale: 0.5;
      ---v-scale: 0.5;
    }
    to {
      ---u-offset: 1;
      ---v-offset: 0;
      ---u-scale: 1;
      ---v-scale: 1;
    }
  }
</style>
<xr-scene>
  <xr-camera radius="2"></xr-camera>
  <xr-texture id="tex" url="{{ BASE_URL }}/img/social.png" invert-y></xr-texture>
  <xr-mesh geometry="type: plane; width: 2" material="albedo-texture: #tex;"></xr-mesh>
  <xr-loading>
    <div class='loading'></div>
  </xr-loading>
</xr-scene>
`}
</CodeLive>

## 公共属性

- [texture 纹理](/docs/component/texture)

## 自有属性

| 属性名        | 描述                                                                             | 类型      | 默认值 |
| ------------- | -------------------------------------------------------------------------------- | --------- | ------ |
| **url**       | 图片 URL，例如 `http://`, `https://`, `blob:`                                    | `String`  | -      |
| **extension** | 指定图片 URL 后缀，例如 `.png`, `.jpg`, `.jpeg`，如果不指定则会根据 URL 自动判断 | `String`  | -      |
| **u-offset**  | 纹理水平偏移比例                                                                 | `Number`  | -      |
| **v-offset**  | 纹理垂直偏移比例                                                                 | `Number`  | -      |
| **u-scale**   | 纹理水平缩放比例                                                                 | `Number`  | `1`    |
| **v-scale**   | 纹理垂直缩放比例                                                                 | `Number`  | `1`    |
| **invert-y**  | 是否反转纹理                                                                     | `Boolean` | -      |

:::info

`u-offset` 和 `v-offset` 属性可以用来控制纹理的偏移，`u-scale` 和 `v-scale` 属性可以用来控制纹理的缩放。它们的值是相对于纹理的宽高的，例如 `u-offset="0.5"` 表示水平偏移 50% 的宽度。

:::

:::warning

- 当 `url` 是 `blob:` 协议时，`extension` 属性必须指定，否则无法正确加载图片。因为 `blob:` 协议地址没有后缀，无法自动判断图片格式。
- 如果图片呈现出来是倒立的，可以设置 `invert-y` 属性为 `true`。

:::
