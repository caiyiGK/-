<template lang="pug">
.preview-group
    .preview-group-controll
        .tadd
        .badd
        .close
    <slot></slot>

</template>
<script>
export default {
  name: 'previewGroup'
}
</script>

<style lang="less">
.preview-group      {position: relative;min-height: 60px;
    &-controll      {position: absolute;z-index: 10;top: 0;left: 0;width: 100%;height: 100%;}
    .tadd,
    .badd           {display: none;height: 18px;width: 18px;background: url(../../assets/images/icon/icon-add.png) no-repeat center / 100%;position: absolute;left: 50%;margin-left: -9px;}
    .tadd           {top: -9px;}
    .badd           {bottom: -9px;}
    .close          {display: none;height: 28px;width: 28px;background: url(../../assets/images/icon/icon-close.png) no-repeat center / 100%;position: absolute;top: -14px;right: -14px;}
    &-controll      {
        &:hover     {border: 1px dashed #38f;
            .tadd,
            .badd,
            .close  {display: block;}
        }
    }
}
</style>
