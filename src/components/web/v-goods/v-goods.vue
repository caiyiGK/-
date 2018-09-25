<template lang="pug">
v-goods-list(:clas="layout.list")
  v-goods-card(v-for="(v, i) in [1, 2, 3, 4]", :key="i", :layout="layout")
</template>
<script>
import vGoodsList from './v-goods-list.vue'
import vGoodsCard from './v-goods-card.vue'
export default {
  name: 'vGoods',
  components: {
    vGoodsList,
    vGoodsCard
  },
  props: {
    layout: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      items: {

      }
    }
  }
}
</script>

<style lang="less">

</style>
