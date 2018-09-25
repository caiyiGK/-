"use strict";
import previewPanel from '@/components/preview/preview-panel'
import previewGroup from '@/components/preview/preview-group'
import previewDesign from '@/components/preview/preview-design'

import vHeader from '@/components/web/v-header'


import cHeader from '@/controller/c-header'
import cGoods from '@/controller/c-goods'

import LayoutDesign from '@/components/LayoutDesign/code'
export default {
    name: 'Feature',
    components: {
        previewPanel,
        previewGroup,
        previewDesign,
        vHeader,
        cHeader,
        cGoods,
        LayoutDesign
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