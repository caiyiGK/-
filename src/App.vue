<template lang="pug">
  .layout-body
    .layout-container
        .layout-container-slidebar
            nav
                ul
                    li.active
                        a
                            span 网站首页
                    li
                        a
                            span 店铺导航
                    li
                        a
                            span 会员主页
            .layout-container-help 帮助和服务
        .layout-container-inner
            router-view

    //- 导航部分
    layout-nav

    .layout-help

</template>
<script type="text/javascript" src="./App.js"></script>
<style lang="less">
@import './App.less';
</style>
