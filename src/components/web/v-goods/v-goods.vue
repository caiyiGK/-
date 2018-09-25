<template lang="pug">
v-goods-list
  v-goods-card(v-for="(v, i) in [1, 2, 3, 4]", :key="i")
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
