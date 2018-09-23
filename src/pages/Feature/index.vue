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
                .layout-group
                    .layout-group-box(v-for="(item, key) in previewComponents", :key="key")
                        p {{item.name}}
                        .layout-group-items
                            .layout-group-item(v-for="(v, i) in item.data", :key="i")
                                a {{v.name}}
                    .layout-group-footer
                        .layout-group-setting 设置






</template>
<style lang="less">
@import './index.less';
</style>
<script type="text/javascript" src="./index.js"></script>