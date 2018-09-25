<template lang="pug">
preview-group
  v-goods(:layout="selectState")
  preview-design(:isShow="true", title="商品")
    .edit-group.flex
      .edit-label.start
        | 列表样式：
      .edit-radio
        label(v-for="(v, i) in list_array",
          :key="i",
          :class="[v == selectState.list ? 'active' : '']"
          @click="handleChangeList(v, 1)"
        )
         | {{text_list[v-1]}}
    .edit-box
      .edit-group.flex
        .edit-label.start
          | 图片填充方式:
        .edit-radio
          label(v-for="(v, i) in select_child.fill",
            :key="i",
            :class="[v == selectState.fill ? 'active' : '']"
            @click.stop="selectState.fill = v"
          )
           | {{text_fill[v-1]}}

      .edit-group.flex(v-if="select_child.ratio.length > 0")
        .edit-label.start
          | 显示比例:
        .edit-radio
          label(v-for="(v, i) in select_child.ratio",
            :key="i",
            :class="[v == selectState.ratio ? 'active' : '']",
            @click.stop="selectState.ratio = v"
          )
           | {{text_ratio[v-1]}}

      .edit-group.flex
        .edit-label.start
          | 显示样式:
        .edit-radio
          label(v-for="(v, i) in select_child.style",
            :key="i",
            :class="[v == selectState.style ? 'active' : '']",
            @click.stop="selectState.style = v"
          )
           | {{text_style[v-1]}}

      .edit-group.flex
        .edit-label.start
          | 显示内容:
        .edit-line
          .edit-group
            .edit-check(v-if="select_child.title.indexOf(selectState.style) >= 0")
              label
                span
                  input(type="checkbox", v-model="selectState.title")
                | 商品名称
          .edit-group(:style="{paddingLeft: '20px'}", v-if="selectState.title")
            .edit-check(v-if="select_child.desc.indexOf(selectState.style) >= 0")
              label
                span
                  input(type="checkbox", v-model="selectState.desc")
                | 商品简介
          .edit-group
            .edit-check(v-if="select_child.price.indexOf(selectState.style) >= 0")
              label
                span
                  input(type="checkbox", v-model="selectState.price")
                | 商品价格
          .edit-group
            .edit-check(v-if="select_child.btn.btnId.indexOf(selectState.style) >= 0")
              label
                span
                  input(type="checkbox", v-model="selectState.btn.bool")
                | 购买按钮
          .edit-group(:style="{paddingLeft: '20px'}", v-if="selectState.btn.bool")
              .edit-radio
                label(v-for="(v, i) in select_child.btn.btnId",
                  :key="i",
                  :class="[v == selectState.btn.btnId ? 'active' : '']"
                  @click="handleChangeList(v, 2)"
                )
                  | {{'样式'+ v}}
                .edit-radio-text(v-if="[3, 4].indexOf(selectState.btn.btnId) >= 0")
                  input(type="text", v-model="selectState.btn.text")
                    
          .edit-group
            .edit-check(v-if="select_child.icon.iconId.indexOf(selectState.style) >= 0")
              label
                span
                  input(type="checkbox", v-model="selectState.icon.bool")
                | 商品角标
          .edit-group(:style="{paddingLeft: '20px'}", v-if="selectState.icon.bool")
              .edit-radio
                label(v-for="(v, i) in select_child.icon.iconId",
                  :key="i",
                  :class="[v == selectState.icon.iconId ? 'active' : '']"
                  @click.stop="selectState.icon.iconId = v"
                )
                 | {{text_icon[v-1]}}
                .edit-upload(v-if="selectState.icon.iconId == 5")
                  a
                    span.icon +
                    span 推荐使用36x36像素的.png图片



</template>
<script>
import previewGroup from '@/components/preview/preview-group'
import previewDesign from '@/components/preview/preview-design'
import vGoods from '@/components/web/v-goods'
export default {
  name: 'cGoods',
  components: {
    previewGroup,
    previewDesign,
    vGoods
  },
  props: {
    title: {
        type: String,
        default: ''
    }
  },

  mounted() {
  },

  methods: {
    handleChangeList (v, id) {
      switch (id) {
        case 1:
          this.selectState.list = v
          this.select_child = this.bodyState['p_' + v]
          let index = this.select_child.style.indexOf(this.selectState.style)
          if (index < 0) this.selectState.style = this.select_child.style[0]
          break;
        case 2:
          this.selectState.btn.btnId = v
          if (v < 3) this.selectState.btn.text = ''
          if (v == 3) this.selectState.btn.text = '马上抢'
          if (v == 4) this.selectState.btn.text = '购买'
          break;
        case 3:
          this.selectState.ratio = v
          break;
        case 4:
          this.selectState.style = v
          break;
        default:
          // statements_def
          break;
      }
    }
  },

  data () {
    return {
      isShow: false,
      selectState: { // 图片选中规格
        list: 1,
        fill: 1,
        ratio: 1,
        style: 1,
        title: true,
        desc: true,
        price: true,
        btn: {
          bool: false,
          btnId: 1,
          text: '',
        },
        icon: {
          bool: false,
          iconId: 1
        }
      },
      select_child: { // 默认规格
        fill: [1, 2],
        ratio: [1, 2],
        style: [1, 2, 4],
        title: [1, 2, 4],
        desc: [1, 2, 4],
        price: [1, 2, 4],
        btn: {
          id: [1, 2],
          btnId: [1, 2, 3, 4]
        },
        icon: {
          id: [1, 2, 3],
          iconId: [1, 2, 3, 4, 5]
        }
      },
      text_list: ['大图', '小图', '一大两小', '详细列表', '一行三个', '横向滑动'],
      text_fill: ['填充', '留白'],
      text_ratio: ['3:2', '1:1'],
      text_style: ['卡片1', '卡片2', '瀑布流', '极简', '促销'],
      text_icon: ['新品', '热卖', 'NEW', 'HOT', '自定义'],
      text_btnTxt: ['马上抢', '购买'],
      list_array: [1, 2, 3, 4, 5],
      bodyState: { // 所有规格
        p_1: {
          fill: [1, 2],
          ratio: [1, 2],
          style: [1, 2, 4],
          title: [1, 2, 4],
          desc: [1, 2, 4],
          price: [1, 2, 4],
          btn: {
            id: [1, 2],
            btnId: [1, 2, 3, 4]
          },
          icon: {
            id: [1, 2, 3],
            iconId: [1, 2, 3, 4, 5]
          }
        },
        p_2: {
          fill: [1, 2],
          ratio: [],
          style: [1, 2, 3, 4, 5],
          title: [1, 2, 3, 4],
          desc: [1, 2],
          price: [1, 2, 3, 4],
          btn: {
            id: [1, 2, 3],
            btnId: [1, 2, 3, 4]
          },
          icon: {
            id: [1, 2, 3, 4, 5],
            iconId: [1, 2, 3, 4, 5]
          }
        },
        p_3: {
          fill: [1, 2],
          ratio: [],
          style: [1, 2, 4],
          title: [1, 2, 4],
          desc: [1, 2],
          price: [1, 2, 4],
          btn: {
            id: [1, 2],
            btnId: [1, 2, 3, 4]
          },
          icon: {
            id: [1, 2, 4],
            iconId: [1, 2, 3, 4, 5]
          }
        },
        p_4: {
          fill: [1, 2],
          ratio: [],
          style: [1, 2, 4],
          title: [],
          desc: [],
          price: [],
          btn: {
            id: [1, 2, 4],
            btnId: [1, 2, 3, 4]
          },
          icon: {
            id: [1, 2, 4],
            iconId: [1, 2, 3, 4, 5]
          }
        },
        p_5: {
          fill: [1, 2],
          ratio: [],
          style: [4],
          title: [4],
          desc: [],
          price: [4],
          btn: {
            id: [4],
            btnId: [2]
          },
          icon: {
            id: [4],
            iconId: [1, 2, 3, 4, 5]
          }
        }
      },
      items: {}
    }
  }
}
</script>

<style lang="less">
.edit-group         {margin-bottom: 20px;line-height: 18px;width: 100%;
  &.flex            {display: flex;align-items: center;}
}
.edit-label         {font-size: 12px;width: 85px;margin-right: 10px;text-align: right;flex-shrink: 0;position: relative;height: 18px;line-height: 18px;
  &.start           {align-self: flex-start;}
  span              {color: #FF0000;display: inline-block;top: 4px;right: 2px;font-size: 16px;position: relative;}
}
.edit-radio         {
  label             {margin-right: 20px;position: relative;display: inline-block;padding-left: 18px;line-height: 18px;
    &:nth-child(n+5){margin-top: 10px;}
    &:before,
    &:after         {display: block;content: "";width: 12px;height: 12px;position: absolute;top: 2px;left: 0;border-radius: 100%;}
    &:before        {background: #FFF;border: 1px solid #e5e5e5;z-index: 1;}
    &:after         {width: 4px;height: 4px;background: #FFF;z-index: 2;top: 7px;left: 5px;}
    &.active        {
        &:before    {background: #38f;border-color: #38f;}
    }
  }
}

.edit-line          {display: block;width: 100%;}

.edit-check         {
  label             {display: inline-block;line-height: 18px;
    &:nth-child(n+5){margin-top: 10px;}
    span            {height: 14px;width: 14px;border:none;display: inline-block;margin-right: 2px;position: relative;vertical-align: middle;}
    input           {width: 100%;height: 100%;border: 1px solid #bbb;position: absolute;top: -1px;left: 0;width: 100%;height: 100%;background: none;border-radius: 2px;box-sizing: border-box;}
    &.active        {
      span          {background: #38f;}
    }
  }
}

.edit-box         {background: #FFF;border-radius: 4px;border: 1px solid #e5e5e5;padding: 10px 0;}

.edit-radio-text  {display: block;width: 100%;margin-top: 10px;
  input           {border: 1px solid #d1d1d1;width: 100px;height: 30px;padding: 0 10px;}
}

.edit-upload      {display: block;width: 100%;margin-top: 10px;
  a               {display: block;height: 50px;padding: 32px 0 0 55px;position: relative;color: #999;
    .icon         {display: flex;height: 50px;width: 50px;justify-content: center;align-items: center;position: absolute;top: 0;left: 0;border: 1px dashed #e5e5e5;color: #38f;font-size: 16px;}
  }
}
</style>
