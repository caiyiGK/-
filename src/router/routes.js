"use strict";
import config from './config'
export default [{
        path: '*',
        name: 'NotFound',
        component: (resolve) => require(['@/pages/NotFound/index.vue'], resolve)
}].concat(config.parent_nav);
