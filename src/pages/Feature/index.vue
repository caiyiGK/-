<template lang="pug">
    .layout-page
        .layout-alert 当前页面使用的为新版编辑器，保存后，该微页面将只能使用新版编辑器进行编辑。

        .layout-showcase
            .layout-alert 提示：在浏览器中发现未提交的内容，是否使用该内容替换当前内容？使用
            
            //- 模拟手机界面
            preview-panel
                template(slot="body")
                    preview-group
                        | 3


            .layout-preview
                .layout-preview-container
                    .layout-preview-item
                        .view-header
                            .title 店铺主页

                    .layout-preview-item
                        .view-controller
                            .tadd +
                            .badd +
                            .close +
                            .view-component-image
                                p.title 点击编辑图片广告
                                p.desc 建议宽度750像素

                    .layout-preview-item
                        .view-controller.active
                            .tadd +
                            .badd +
                            .close +
                
                            layout-control-design(
                                :isShow="true"
                                title="图片广告"
                            )

                            //- 控制器
                            //- .view-controller-edit
                            //-     .hd
                            //-         span 图片广告
                            //-         a 查看教程
                            //-     .v-c-group
                            //-         .v-c-label.top 选择模版:
                            //-         .v-c-flex
                            //-             .v-design-select-tpl(v-for="(v, i) in [0, 1, 2, 3, 4, 5]",
                            //-                 :key="i",
                            //-                 :class="[i == active ? 'active' : '']",
                            //-                 @click="active = i")
                            //-                 .v-design-select-tab
                            //-                     img(:src="require('../../assets/images/webview/image-tpl-' + (i+1) + '.jpg')")
                            //-                 .v-design-select-title
                            //-                     | 轮播海报
                            //-     //- 填充模式
                            //-     .v-c-group(v-if="[0].indexOf(active) >= 0")
                            //-         .v-c-label 填充方式:
                            //-         .v-c-flex
                            //-             .v-c-radio
                            //-                 label(:class="[isFull ? 'active' : '']", @click="isFull = true") 填充
                            //-                 label(:class="[!isFull ? 'active' : '']", @click="isFull = false") 留白
                            //-     //- 图片间隙
                            //-     .v-c-group(v-if="[1, 2, 3, 4].indexOf(active) >= 0")
                            //-         .v-c-label 图片间隙:
                            //-         .v-c-flex
                            //-             .v-c-range
                            //-                 input(type="range", :max="max_gap", :min="min_gap", v-model="number_gap")
                            //-                 .v-c-range-c
                            //-                     span.range(:style="{left: number_gap/max_gap*100 + '%'}")
                            //-                     span.line(:style="{width: number_gap/max_gap*100 + '%'}") 
                            //-             .v-c-gap
                            //-                 input(type="text", v-model="number_gap")

                            //-     //- 一屏显示
                            //-     .v-c-group(v-if="[4].indexOf(active) >= 0")
                            //-         .v-c-label 一屏显示:
                            //-         .v-c-flex
                            //-             .v-c-select
                            //-                 select
                            //-                     option(:value="v + 3", v-for="v in 7", :key="v") {{v + 3}} 张图片

                            //-     .v-c-image-select-pic 
                            //-         p.add + 添加一个背景图片
                            //-         p.desc 建议尺寸 750x350 像素 
                            //-     .v-c-image-desc 最多添加{{maxImgs}}个广告，拖动选中的广告可对其排序


                            //- 组件
                            .view-component-image
                                p.title 点击编辑图片广告
                                p.desc 建议宽度750像素
                layout-design






</template>
<script type="text/javascript" src="./index.js"></script>
<style lang="less">
@import './index.less';
</style>
