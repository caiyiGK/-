<template lang="pug">
preview-group
  v-header(:data="items")
  preview-design(:isShow="false", :isHeader="false")
    .edit-group.flex
      .edit-label
        span *
        | 页面名称
      .edit-input
        input(v-model="items.title")

    .edit-group.flex
      .edit-label
        span *
        | 页面描述
      .edit-input
        input(v-model="items.desc")

    .edit-group.flex
      .edit-label
        span *
        | 分类
      .edit-input
        input
      .link
        a 刷新
        span |
        a 新建

</template>
<script>
import previewGroup from '@/components/preview/preview-group'
import previewDesign from '@/components/preview/preview-design'
import vHeader from '@/components/web/v-header'
export default {
  name: 'cHeader',
  components: {
    previewGroup,
    previewDesign,
    vHeader
  },
  props: {
    title: {
        type: String,
        default: ''
    }
  },

  data () {
    return {
      isShow: false,
      items: {
        title: '',
        desc: ''
      }
    }
  }
}
</script>

<style lang="less">
.edit-group         {margin-bottom: 20px;
  &.flex            {display: flex;align-items: center;}
}
.edit-label         {font-size: 12px;width: 85px;margin-right: 10px;text-align: right;flex-shrink: 0;position: relative;height: 18px;line-height: 18px;
  span              {color: #FF0000;display: inline-block;top: 4px;right: 2px;font-size: 16px;position: relative;}
}
.edit-input         {flex: 1;
  input             {height: 30px;padding: 0 10px;border: 1px solid #bbb;width: 100%;border-radius: 2px;}
}
.link               {width: 120px;text-align: left;margin-left: 10px;
  span,
  a                 {color: #38f;display: inline-block;}
  span              {margin: 0 5px;}
}
</style>
