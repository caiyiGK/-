<template lang="pug">
.v-header
    .title {{data.title || title}}

</template>
<script>
export default {
  name: 'vHeader',
  props: {
    data: {
        type: [Object, Array],
        default: {}
    }
  },
  data () {
    return {
        title: '请点击此处编辑标题'
    }
  }
}
</script>

<style lang="less">
.v-header           {background: url(../../../assets/images/webview/header-bg.jpg) no-repeat center / contain;height: 64px;width: 100%;position: relative;
    .title          {color: #FFF;display: inline-block;padding: 23px 60px 0;bottom: 2px;height: 64px;line-height: 40px;font-weight: 100;font-size: 16px;text-align: center;vertical-align: middle;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;width: 100%;text-align: center;}
}
</style>
