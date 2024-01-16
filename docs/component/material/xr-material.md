# xr-material PBR 材质

PBR材质是一种基于物理的渲染（Physically Based Rendering）材质，它可以模拟真实世界中的光照效果，使物体看起来更加真实。

## 公共属性

- [材质](./material.md)

## 自有属性

| 属性名                                              | 描述                                                                                                                                              | 类型      | 默认值 |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------ |
| **albedo-color**                                    | 漫反射颜色                                                                                                                                        | `Color3`  | -      |
| **albedo-texture**                                  | 漫反射贴图                                                                                                                                        | `String`  | -      |
| **metallic**                                        | 金属度                                                                                                                                            | `Number`  | `0.2`  |
| **roughness**                                       | 粗糙度                                                                                                                                            | `Number`  | `0.8`  |
| **emissive-color**                                  | 自发光颜色                                                                                                                                        | `Color3`  | -      |
| **emissive-texture**                                | 自发光贴图                                                                                                                                        | `String`  | -      |
| **unlit**                                           | 是否关闭光照效果。如果设置为 true，则物体不会受到任何光源的影响，只显示其基本颜色和纹理。常用于创建不需要复杂光照效果的物体，如背景元素或 UI 组件 | `Boolean` | -      |
| **emissive-intensity**                              | 自发光强度                                                                                                                                        | `Number`  | -      |
| **ambient-texture**                                 | 环境贴图                                                                                                                                          | `String`  | -      |
| **ambient-strength**                                | 环境贴图强度                                                                                                                                      | `Number`  | -      |
| **opacity-texture**                                 | 透明贴图                                                                                                                                          | `String`  | -      |
| **reflection-texture**                              | 反射贴图                                                                                                                                          | `String`  | -      |
| **reflectivity-texture**                            | 反射率贴图                                                                                                                                        | `String`  | -      |
| **metallic-texture**                                | 金属度贴图                                                                                                                                        | `String`  | -      |
| **reflectance-texture**                             | 反射率贴图                                                                                                                                        | `String`  | -      |
| **micro-surface-texture**                           | 微表面贴图                                                                                                                                        | `String`  | -      |
| **bump-texture**                                    | 法线贴图                                                                                                                                          | `String`  | -      |
| **lightmap-texture**                                | 光照贴图                                                                                                                                          | `String`  | -      |
| **refraction-texture**                              | 折射贴图                                                                                                                                          | `String`  | -      |
| **ambient-color**                                   | 环境光颜色                                                                                                                                        | `Color3`  | -      |
| **reflectivity-color**                              | 反射率颜色                                                                                                                                        | `Color3`  | -      |
| **reflection-color**                                | 反射颜色                                                                                                                                          | `Color3`  | -      |
| **micro-surface**                                   | 微表面                                                                                                                                            | `Number`  | -      |
| **index-of-refraction**                             | 折射率                                                                                                                                            | `Number`  | -      |
| **alpha-cut-off**                                   | Alpha裁剪阈值                                                                                                                                     | `Number`  | -      |
| **parallax-scale-bias**                             | 视差贴图缩放偏移                                                                                                                                  | `Number`  | -      |
| **invert-refraction-y**                             | 折射贴图Y轴反转                                                                                                                                   | `Boolean` | -      |
| **link-refraction-with-transparency**               | 折射贴图与透明度关联                                                                                                                              | `Boolean` | -      |
| **use-lightmap-as-shadowmap**                       | 使用光照贴图作为阴影贴图                                                                                                                          | `Boolean` | -      |
| **use-alpha-from-albedo-texture**                   | 使用漫反射贴图的Alpha通道作为透明度                                                                                                               | `Boolean` | -      |
| **force-alpha-test**                                | 强制Alpha测试                                                                                                                                     | `Boolean` | -      |
| **use-specular-over-alpha**                         | 使用漫反射贴图的Alpha通道作为高光强度                                                                                                             | `Boolean` | -      |
| **use-micro-surface-from-reflectivity-map-alpha**   | 使用反射率贴图的Alpha通道作为微表面强度                                                                                                           | `Boolean` | -      |
| **use-roughness-from-metallic-texture-alpha**       | 使用金属度贴图的Alpha通道作为粗糙度                                                                                                               | `Boolean` | -      |
| **use-roughness-from-metallic-texture-green**       | 使用金属度贴图的绿色通道作为粗糙度                                                                                                                | `Boolean` | -      |
| **use-metallness-from-metallic-texture-blue**       | 使用金属度贴图的蓝色通道作为金属度                                                                                                                | `Boolean` | -      |
| **use-ambient-occlusion-from-metallic-texture-red** | 使用金属度贴图的红色通道作为环境光遮蔽强度                                                                                                        | `Boolean` | -      |
| **use-ambient-in-gray-scale**                       | 使用灰度环境贴图                                                                                                                                  | `Boolean` | -      |
| **use-auto-micro-surface-from-reflectivity-map**    | 使用反射率贴图自动计算微表面强度                                                                                                                  | `Boolean` | -      |
| **use-radiance-over-alpha**                         | 使用辐照度贴图的Alpha通道作为高光强度                                                                                                             | `Boolean` | -      |
| **use-object-space-normal-map**                     | 使用物体空间法线贴图                                                                                                                              | `Boolean` | -      |
| **use-parallax**                                    | 使用视差贴图                                                                                                                                      | `Boolean` | -      |
| **use-parallax-occlusion**                          | 使用视差遮蔽贴图                                                                                                                                  | `Boolean` | -      |
| **enable-specular-anti-aliasing**                   | 启用高光抗锯齿                                                                                                                                    | `Boolean` | -      |
| **apply-decal-map-after-detail-map**                | 在细节贴图之后应用贴花贴图                                                                                                                        | `Boolean` | -      |
| **metallic-f0-factor**                              | 金属度F0因子(菲涅尔反射系数)                                                                                                                      | `Number`  | -      |

:::tip

1. 金属度和粗糙度的贴图通常合并成一张贴图，金属度在蓝色通道，粗糙度在绿色通道。
1. unlit 为 true 可以提高渲染性能，但是会导致物体不受光照影响，只显示其基本颜色和纹理。

:::
