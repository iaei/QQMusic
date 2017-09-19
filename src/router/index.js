import Vue from 'vue'
import Router from 'vue-router'
import recommend from '@/components/recommend'
import singer from '@/components/singer'
import ranking from '@/components/ranking'
import radio from '@/components/radio'
import channel from '@/components/channel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'recommend',
      component: recommend
    },
    {
      path: '/singer',
      name: 'singer',
      component: singer
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: ranking
    },
    {
      path: '/radio',
      name: 'radio',
      component: radio
    },
    {
      path: '/channel',
      name: 'channel',
      component: channel
    }
  ]
})
