
# xr-material

- tag: `<xr-material></xr-material>`
- class: `XRMaterial`

## 属性


### inspect

检查模式



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `object` | - | - | - | - |




### disabled

禁用



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `boolean` | - | - | - | - |




### backface-culling





| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `boolean` | - | - | - | - |




### alpha





| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `number` | - | - | - | - |




### side-orientation





| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `number` | - | - | - | - |




### wireframe





| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `boolean` | - | - | - | - |




### alpha-mode





| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `number` | - | - | - | - |




### disable-depth-write





| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `boolean` | - | - | - | - |




### z-offset





| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `number` | - | - | - | - |




### entity-delegated





| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `boolean` | - | - | - | - |




### transparency-mode

透明模式



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `number` | - | - | - | - |




### albedo-color

漫反射颜色



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `color3` | - | - | - | - |




### albedo-texture

漫反射贴图



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `uri` | - | - | - | - |




### metallic

金属度



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `number` | - | - | - | - |




### roughness

粗糙度



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `number` | - | - | - | - |




### emissive-color

自发光颜色



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `color3` | - | - | - | - |




### emissive-intensity

自发光强度



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `number` | - | - | - | - |




### unlit

不受光照影响



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `boolean` | - | - | - | - |




### ambient-texture

环境遮蔽贴图



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `uri` | - | - | - | - |




### ambient-texture-strength

环境遮蔽贴图强度



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `number` | - | - | - | - |




### opacity-texture

透明贴图



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `uri` | - | - | - | - |




### reflection-texture

反射贴图

这个纹理用于模拟物体表面的环境反射。它通常是一个包含环境场景的立方体贴图（cube map），用于模拟物体表面反射环境中的物体。

| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `uri` | - | - | - | - |




### reflectivity-texture

反射率贴图

这个纹理用于模拟物体表面的反射率，也就是物体表面反射光线的能力。它通常是一个灰度贴图，其中的每个像素值表示对应表面点的反射率。反射率越高，物体表面反射的光线越多，看起来就越亮或者更像金属。

| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `uri` | - | - | - | - |




### metallic-texture

金属度贴图



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `uri` | - | - | - | - |




### reflectance-texture

漫反射率贴图

这个纹理通常用于模拟物体表面的漫反射率，也就是物体表面散射光线的能力。它通常是一个颜色贴图，其中的每个像素值表示对应表面点的漫反射颜色。漫反射率越高，物体表面散射的光线越多，看起来就越亮。

| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `uri` | - | - | - | - |




### micro-surface-texture

微表面贴图



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `string` | - | - | - | - |




### bump-texture

法线贴图



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `uri` | - | - | - | - |




### lightmap-texture

光照贴图



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `uri` | - | - | - | - |




### refraction-texture

折射贴图



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `uri` | - | - | - | - |




### ambient-color

环境遮蔽颜色



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `color3` | - | - | - | - |




### reflectivity-color





| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `color3` | - | - | - | - |




### reflection-color





| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `color3` | - | - | - | - |




### micro-surface





| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `number` | - | - | - | - |




### index-of-refraction

折射率



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `number` | - | - | - | - |




### alpha-cut-off

透明度截断



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `number` | - | - | - | - |




### parallax-scale-bias

视差偏移



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `number` | - | - | - | - |




### invert-refraction-y

反转折射贴图的 Y 轴



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `boolean` | - | - | - | - |




### link-refraction-with-transparency

将折射与透明度关联



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `boolean` | - | - | - | - |




### use-lightmap-as-shadowmap

使用光照贴图作为阴影贴图



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `boolean` | - | - | - | - |




### use-alpha-from-albedo-texture

使用漫反射贴图的 alpha 通道



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `boolean` | - | - | - | - |




### force-alpha-test

强制 alpha 测试



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `boolean` | - | - | - | - |




### use-specular-over-alpha

是否在透明度（Alpha）上应用高光（Specular）效果



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `boolean` | - | - | - | - |




### use-micro-surface-from-reflectivity-map-alpha





| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `boolean` | - | - | - | - |




### use-roughness-from-metallic-texture-alpha

使用金属度贴图的 alpha 通道作为粗糙度



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `boolean` | - | - | - | - |




### use-roughness-from-metallic-texture-green

使用金属度贴图的绿色通道作为粗糙度



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `boolean` | - | - | - | - |




### use-metallness-from-metallic-texture-blue

使用金属度贴图的蓝色通道作为金属度



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `boolean` | - | - | - | - |




### use-ambient-occlusion-from-metallic-texture-red

使用金属度贴图的红色通道作为环境遮蔽



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `boolean` | - | - | - | - |




### use-ambient-in-gray-scale

仅在其红色通道中包含环境遮蔽信息



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `boolean` | - | - | - | - |




### use-auto-micro-surface-from-reflectivity-map

使用反射率贴图自动计算微表面



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `boolean` | - | - | - | - |




### use-radiance-over-alpha





| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `boolean` | - | - | - | - |




### use-object-space-normal-map

使用物体空间法线贴图



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `boolean` | - | - | - | - |




### use-parallax

启用视差



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `boolean` | - | - | - | - |




### use-parallax-occlusion

启用视差遮挡



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `boolean` | - | - | - | - |




### enable-specular-anti-aliasing

启用高光抗锯齿



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `boolean` | - | - | - | - |




### apply-decal-map-after-detail-map

在细节贴图之后应用贴花贴图



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `boolean` | - | - | - | - |




### metallic-f0-factor

菲涅尔系数



| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| `number` | - | 0 | 1 | - |



