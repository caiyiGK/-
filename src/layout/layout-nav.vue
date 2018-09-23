<template lang="pug">
.layout-nav
        .layout-nav-title 店铺管理
        nav
            ul
                li(v-for="(v, i) in items.parent_nav",
                :key="i",
                :class="[$route.name == v.name ? 'active' : '']")
                    router-link(:to="{name: v.name}") {{v.meta.title}}
</template>
<script>
import config from '../router/config.js'
export default {
  name: 'LayoutNav',
  mounted () {
  },
  data () {
    return {
        items: config
    }
  }
}
</script>

<style lang="less">
.layout-nav             {background: #FFF;position: fixed;top: 0;left: 0;bottom: 0;width: 100px;box-shadow: 0 0 1px 0 rgba(0,0,0,.2);z-index: 99;
    &-title             {border-bottom: 1px solid #f2f2f2;padding-left: 20px;font-size: 14px;height: 50px;line-height: 50px;}
    nav                 {padding: 13px 10px;}
    li                  {font-size: 14px;height: 36px;line-height: 36px;margin-bottom: 14px;overflow: hidden;cursor: pointer;
        &.active        {background: #f8f8f8;}
        a               {color: #666;display: block;padding: 0 10px;
            &:hover     {color: #38f;}
        }
    }
}
</style>
