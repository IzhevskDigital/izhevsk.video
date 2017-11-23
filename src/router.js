import Vue from 'vue'
import VueRouter from 'vue-router'

import PageIndex from '@pages/index.vue'
import PageTopicIndex from '@pages/topics/index.vue'
import PageTopicSingle from '@pages/topics/single.vue'
import PageTopicVideos from '@pages/topics/videos.vue'
import PageChannelSingle from '@pages/channels/single.vue'
import PageChannelAbout from '@pages/channels/about.vue'
import PageChannelVideos from '@pages/channels/videos.vue'
import PageVideosSingle from '@pages/videos/single.vue'
import PageSearch from '@pages/search.vue'

Vue.use(VueRouter)

const routes = [

  { path: '/', component: PageIndex, meta: { scrollTop: true } },
  { path: '/video/:id', name: 'video', component: PageVideosSingle, meta: { scrollTop: true } },
  { path: '/search*', name: 'search', component: PageSearch, meta: { scrollTop: true } },
  { path: '/topics', name: 'topics', component: PageTopicIndex, meta: { scrollTop: true } },
  { path: '/topic/:id',
    name: 'topic',
    component: PageTopicSingle,
    meta: { scrollTop: true },
    redirect: { name: 'topic-popular-videos' },
    children: [
      {
        path: 'recent',
        name: 'topic-recent-videos',
        component: PageTopicVideos,
        meta: { scrollTop: false, order: 'date' }
      },
      {
        path: 'popular',
        name: 'topic-popular-videos',
        component: PageTopicVideos,
        meta: { scrollTop: false, order: 'viewCount' }
      }
    ]
  },
  {
    path: '/channel/:id',
    name: 'channel',
    component: PageChannelSingle,
    meta: { scrollTop: true },
    redirect: { name: 'channel-recent-videos' },
    children: [
      {
        path: 'about',
        name: 'channel-about',
        component: PageChannelAbout,
        meta: { scrollTop: false }
      },
      {
        path: 'uploads',
        name: 'channel-recent-videos',
        component: PageChannelVideos,
        meta: { scrollTop: false, order: 'date' }
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'is-active'
})

router.beforeEach((to, from, next) => {
  if (to.meta.scrollTop || from.meta.scrollTop) {
  window.scrollTo(0, 0)
}
next()
})

export default router
