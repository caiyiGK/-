<template lang="pug">
    .layout-design
        .layout-design-box(v-for="(item, key) in previewComponents", :key="key")
            p {{item.name}}
            .layout-design-items
                .layout-design-item(v-for="(v, i) in item.data", :key="i")
                    a {{v.name}}
        .layout-design-footer
            .layout-design-setting 设置
</template>

<script type="text/javascript" src="./index.js"></script>
<style lang="less">
@import './index.less';
</style>
