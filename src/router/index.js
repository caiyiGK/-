"use strict";
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
// import setDocumentTitle from '@/utils/setDocumentTitle'
// import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'hash',
  routes: routes
});

export default router;

