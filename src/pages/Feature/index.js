"use strict";
import previewPanel from '@/components/preview/preview-panel'
import previewGroup from '@/components/preview/preview-group'

import LayoutDesign from '@/components/LayoutDesign/code'
import layoutControlDesign from '@/layout/control/layout-control-design'
export default {
    name: 'Feature',
    components: {
        previewPanel,
        previewGroup,
        LayoutDesign,
        layoutControlDesign
    },

    methods: {
        // 图片间隙
        handleChangeGap (e) {
            console.log(e)
        }
    },

    data () {
        return {
            active: 0,
            // 图片填充
            isFull: true,

            maxImgs: 10,

            // 图片间隙
            min_gap: 0,
            max_gap: 30,
            number_gap: 0,

        }
    }
}