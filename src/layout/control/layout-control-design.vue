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
  name: 'layoutControlDesign',
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    isHeader: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    helpUrl: {
      type: String,
      default: ''
    },
    helpText: {
      type: String,
      default: '查看教程'
    },
    footerDesc: {
      type: String,
      default: '个广告，拖动选中的图片广告可对其排序'
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
.layout-control-edit          {position: absolute;padding: 12px 10px;left: 100%;top: 0;min-height: 28px;background: #f8f8f8;border-radius: 5px;border: 1px solid #e5e5e5;margin-left: 20px;z-index: 5;width: 420px;
    &:before,
    &:after                   {right: 100%;top: 20px;border: solid transparent;content: " ";height: 0;width: 0;position: absolute;pointer-events: none;}
    &:before                  {border-color: transparent;border-right-color: #e5e5e5;border-width: 7px;margin-top: -7px;}
    &:after                   {border-color: transparent;border-right-color: #f8f8f8;border-width: 6px;margin-top: -6px}
    .edit-header              {margin-bottom: 15px;padding-bottom: 5px;border-bottom: 1px solid #e5e5e5;
        span                  {font-size: 12px;color: #333;}
        a                     {float: right;color: #38f;font-size: 12px;}
    }
    .edit-container           {min-height: 100px;display: flex;justify-content: center;align-items: center;}
    .edit-footer              {margin-top: 5px;color: #666;}
}
</style>
