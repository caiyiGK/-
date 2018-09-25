<template lang="pug">
li.v-goods-card(
    :class="['p-' + layout.list, 'c-' + layout.style]"
  )
  a.v-goods-link
    .v-goods-pic(:style="{backgroundImage: 'url('+ imgUrl +')'}")
    
    .v-goods-info(
      :class="{'has_title': layout.title, 'has_price': layout.price, 'has_btn': layout.btn.bool}"
    )
      .title
        | 康欣儿防蚊液
      .price
        | &yen; 999.00
    
    .v-goods-icon

    .v-goods-btn(v-if="layout.btn.bool", :class="['btn-' + layout.btn.btnId]")
      button {{layout.btn.text}}
</template>
<script>
export default {
  name: 'vGoodsCard',
  props: {
    layout: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      imgUrl: 'https://img.yzcdn.cn/upload_files/2018/08/26/FqNOf00rrsIrxRT0C33uekU8FIN6.jpg?imageView2/2/w/520/h/0/q/75/format/webp'
    }
  }
}
</script>

<style lang="less">
.v-goods-link       {display: block;position: relative;background: #FFF;color: #333;}
.v-goods-pic        {min-height: auto;max-height: 500px;overflow: hidden;position: relative;background-size: cover;background-position: 50%;
  &:before          {content: '';display: block;padding-bottom: 66.6667%;width: 100%;}
}
.p-1                {
  .v-goods-link     {margin: 5px 15px 15px 15px;}
  .has_title,
  .has_price        {padding: 10px;text-align: center;}
  .has_title        {
    .title          {line-height: 26px;height: 26px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 1;overflow: hidden;font-size: 14px;}
  }
  .has_price        {
    .title          {margin-bottom: 6px;}
    .price          {color: #f63f3f;font-size: 16px;}
  }
  .has_btn          {padding-bottom: 36px;position: relative;
    &.has_price     {
    .price          {position: absolute;bottom: 10px;left: 10px;line-height: 26px;}
    }
  }
  .v-goods-btn      {position: absolute;right: 10px;bottom: 10px;
    &.btn-1,
    &.btn-2         {
      button        {border: 1px solid #f63f3f;font-size: 14px;color:#f63f3f;text-align: center;height: 24px;width: 24px;background: #FFF url(../../../assets/images/icon/icon-goods-add.png) no-repeat center / 70%;border-radius: 100%;}
    }
    &.btn-2         {
      button        {border: 1px solid #f63f3f;font-size: 14px;color:#f63f3f;text-align: center;height: 24px;width: 24px;background: #FFF url(../../../assets/images/icon/icon-goods-cart.png) no-repeat center / 60%;border-radius: 100%;}
    }
    &.btn-3         {
      button        {background: none;border: 1px solid#f63f3f;font-size: 14px;color: #f63f3f;text-align: center;line-height: 26px;padding: 0 10px;}
    }
    &.btn-4         {
      button        {background: #f63f3f;border: none;font-size: 14px;color: #FFF;text-align: center;line-height: 26px;padding: 0 15px;border-radius: 20px;}
    }
  }
  &.c-2             {
    .v-goods-link   {border: 1px solid #e5e5e5;border-radius: 8px;overflow: hidden;}
  }
}
.v-goods-info       {padding: 10px;text-align: center;
  .title            {}
}

/*.v-goods-card       {width: 50%;float: left;
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
}*/
</style>
