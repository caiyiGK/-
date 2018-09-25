<template lang="pug">
li.v-goods-card.t2
  a.v-goods-link
    .v-goods-pic(:style="{backgroundImage: 'url('+ imgUrl +')'}")
    
    .v-goods-info
      .title 
        | 康欣儿防蚊液
      .price
        | &yen; 999.00
    
    .v-goods-icon

    .v-goods-btn
      span 我要抢购
</template>
<script>
export default {
  name: 'vGoodsCard',
  props: {
  },
  data () {
    return {
      imgUrl: 'https://img.yzcdn.cn/upload_files/2018/08/26/FqNOf00rrsIrxRT0C33uekU8FIN6.jpg?imageView2/2/w/520/h/0/q/75/format/webp'
    }
  }
}
</script>

<style lang="less">
.v-goods-card       {width: 50%;float: left;
  &.big             {width: 100%;}
}
.v-goods-link       {display: block;position: relative;margin: 5px;}
.v-goods-pic        {position: relative;width: 100%;background-size: cover;background-position: 50%;
  &:after           {content: '';display: block;width: 100%;padding-bottom: 100%;}
}
.v-goods-info       {display: flex;padding: 5px;
  .title            {display: none;}
  .price            {text-align: center;font-size: 14px;flex: 1;line-height: 22px;font-family: '微软雅黑';color: #FF0000;}
}
.v-goods-btn        {display: none;}
.v-goods-card.t1    {
  .v-goods-link     {margin: 7px 8px 8px 7px;background-color: #FFF;border: 1px solid #f1f1f1;border-radius: 4px;overflow: hidden;}
}
.v-goods-card.t2    {
  .v-goods-info     {display: flex;padding: 0 75px 0 5px;
    .price          {line-height: 40px;}
  }
  .v-goods-btn      {position: absolute;bottom: 0;right: 0;background: #FF0000;display: block;
    span            {height: 40px;line-height: 40px;color: #FFF;display: block;padding: 0 10px;color: #FFF;font-size: 12px;text-align: center;}
  }
}
</style>
