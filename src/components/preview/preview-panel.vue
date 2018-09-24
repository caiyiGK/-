<template lang="pug">
.preview-panel
  .preview-panel-body
    <slot name="body"></slot>
  .preview-panel-footer
</template>
<script>
export default {
  name: 'previewPanel'
}
</script>

<style lang="less">
.preview-panel      {border: 1px solid #e5e5e5;width: 320px;min-height: 450px;position: relative;
    &-body          {overflow-anchor: none;position: relative;min-height: 304px;padding-bottom: 10px;}
}
</style>
