
# xr-material

- tag: `<xr-material></xr-material>`
- class: `XRMaterial`

## 属性


### inspect

检查模式

- 数据类型: `Object`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### disabled

禁用

- 数据类型: `Boolean`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### backface-culling



- 数据类型: `Boolean`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### alpha



- 数据类型: `Number`
- 初始值: `1`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### side-orientation



- 数据类型: `Number`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### wireframe



- 数据类型: `Boolean`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### alpha-mode



- 数据类型: `Number`
- 初始值: `2`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### disable-depth-write



- 数据类型: `Boolean`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### z-offset



- 数据类型: `Number`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### entity-delegated



- 数据类型: `Boolean`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### transparency-mode

透明模式

- 数据类型: `Number`
- 初始值: `2`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### albedo-color

漫反射颜色

- 数据类型: `Color3`
- 初始值: `#FFFFFF`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### albedo-texture

漫反射贴图

- 数据类型: `URI`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### metallic

金属度

- 数据类型: `Number`
- 初始值: `0.2`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### roughness

粗糙度

- 数据类型: `Number`
- 初始值: `0.8`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### emissive-color

自发光颜色

- 数据类型: `Color3`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### emissive-intensity

自发光强度

- 数据类型: `Number`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### unlit

不受光照影响

- 数据类型: `Boolean`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### ambient-texture

环境遮蔽贴图

- 数据类型: `URI`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### ambient-texture-strength

环境遮蔽贴图强度

- 数据类型: `Number`
- 初始值: `1`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### opacity-texture

透明贴图

- 数据类型: `URI`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### reflection-texture

反射贴图

- 数据类型: `URI`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`

这个纹理用于模拟物体表面的环境反射。它通常是一个包含环境场景的立方体贴图（cube map），用于模拟物体表面反射环境中的物体。
  

### reflectivity-texture

反射率贴图

- 数据类型: `URI`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`

这个纹理用于模拟物体表面的反射率，也就是物体表面反射光线的能力。它通常是一个灰度贴图，其中的每个像素值表示对应表面点的反射率。反射率越高，物体表面反射的光线越多，看起来就越亮或者更像金属。
  

### metallic-texture

金属度贴图

- 数据类型: `URI`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### reflectance-texture

漫反射率贴图

- 数据类型: `URI`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`

这个纹理通常用于模拟物体表面的漫反射率，也就是物体表面散射光线的能力。它通常是一个颜色贴图，其中的每个像素值表示对应表面点的漫反射颜色。漫反射率越高，物体表面散射的光线越多，看起来就越亮。
  

### micro-surface-texture

微表面贴图

- 数据类型: `String`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### bump-texture

法线贴图

- 数据类型: `URI`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### lightmap-texture

光照贴图

- 数据类型: `URI`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### refraction-texture

折射贴图

- 数据类型: `URI`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### ambient-color

环境遮蔽颜色

- 数据类型: `Color3`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### reflectivity-color



- 数据类型: `Color3`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### reflection-color



- 数据类型: `Color3`
- 初始值: `#FFFFFF`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### micro-surface



- 数据类型: `Number`
- 初始值: `1`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### index-of-refraction

折射率

- 数据类型: `Number`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### alpha-cut-off

透明度截断

- 数据类型: `Number`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### parallax-scale-bias

视差偏移

- 数据类型: `Number`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### invert-refraction-y

反转折射贴图的 Y 轴

- 数据类型: `Boolean`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### link-refraction-with-transparency

将折射与透明度关联

- 数据类型: `Boolean`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### use-lightmap-as-shadowmap

使用光照贴图作为阴影贴图

- 数据类型: `Boolean`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### use-alpha-from-albedo-texture

使用漫反射贴图的 alpha 通道

- 数据类型: `Boolean`
- 初始值: `true`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### force-alpha-test

强制 alpha 测试

- 数据类型: `Boolean`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### use-specular-over-alpha

是否在透明度（Alpha）上应用高光（Specular）效果

- 数据类型: `Boolean`
- 初始值: `true`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### use-micro-surface-from-reflectivity-map-alpha



- 数据类型: `Boolean`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### use-roughness-from-metallic-texture-alpha

使用金属度贴图的 alpha 通道作为粗糙度

- 数据类型: `Boolean`
- 初始值: `true`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### use-roughness-from-metallic-texture-green

使用金属度贴图的绿色通道作为粗糙度

- 数据类型: `Boolean`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### use-metallness-from-metallic-texture-blue

使用金属度贴图的蓝色通道作为金属度

- 数据类型: `Boolean`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### use-ambient-occlusion-from-metallic-texture-red

使用金属度贴图的红色通道作为环境遮蔽

- 数据类型: `Boolean`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### use-ambient-in-gray-scale

仅在其红色通道中包含环境遮蔽信息

- 数据类型: `Boolean`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### use-auto-micro-surface-from-reflectivity-map

使用反射率贴图自动计算微表面

- 数据类型: `Boolean`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### use-radiance-over-alpha



- 数据类型: `Boolean`
- 初始值: `true`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### use-object-space-normal-map

使用物体空间法线贴图

- 数据类型: `Boolean`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### use-parallax

启用视差

- 数据类型: `Boolean`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### use-parallax-occlusion

启用视差遮挡

- 数据类型: `Boolean`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### enable-specular-anti-aliasing

启用高光抗锯齿

- 数据类型: `Boolean`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### apply-decal-map-after-detail-map

在细节贴图之后应用贴花贴图

- 数据类型: `Boolean`
- 初始值: `-`
- 最小值: `-`
- 最大值: `-`
- 枚举: `-`


  

### metallic-f0-factor

菲涅尔系数

- 数据类型: `Number`
- 初始值: `-`
- 最小值: `0`
- 最大值: `1`
- 枚举: `-`


  
