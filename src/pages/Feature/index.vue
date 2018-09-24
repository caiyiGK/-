<template lang="pug">
    .layout-page
        .layout-alert 当前页面使用的为新版编辑器，保存后，该微页面将只能使用新版编辑器进行编辑。

        .layout-showcase
            .layout-alert 提示：在浏览器中发现未提交的内容，是否使用该内容替换当前内容？使用
            
            //- 模拟手机界面
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
                            //- 控制器
                            .view-controller-edit
                                .hd
                                    span 图片广告
                                    a 查看教程
                                .v-c-group
                                    .v-c-label 选择模版
                                    .v-c-image-tpl
                                        .v-design-select-tpl(v-for="(v, i) in [0, 1, 2, 3, 4, 5]", :key="i")
                                            .v-design-select-img
                                                img(:src="require('../../assets/images/webview/image-tpl-' + (i+1) + '.jpg')")
                                            .v-design-select-title
                                                | 轮播海报


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
