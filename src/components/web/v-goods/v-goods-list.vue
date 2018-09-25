<template lang="pug">
.v-goods-list
    ul.v-goods-ul
        <slot></slot>
</template>
<script>
export default {
  name: 'vGoodsList',
  props: {
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
.v-goods-list    {}
.v-goods-ul      {padding: 0 5px;overflow: hidden;}
</style>
