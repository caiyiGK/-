<template lang="pug">
.layout-control-edit(v-if="isShow")
  .edit-header(v-if="isHeader")
    span {{title}}
    a(:href="helpUrl", v-if="helpUrl != ''") {{helpText}}
  .edit-container
    <slot>暂无内容</slot>
  .edit-footer(v-if="footerDesc") {{footerDesc}}
</template>
<script>
export default {
  name: 'layoutControlPreview',
  props: {
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less">

</style>
