<template lang="pug">
main
  component(is="new-videos")
  .columns.box
    adsense.column(class="is-4",ad-client="ca-pub-8592091801712115",ad-slot="7989569462",ad-style="display: block",ad-format="auto",ad-layout-key="-8h+1r-df+ev+eh",ad-layout="image-top")
    adsense.column(class="is-4",ad-client="ca-pub-8592091801712115",ad-slot="6643933864",ad-style="display: block",ad-format="auto",ad-layout-key="-8h+1r-df+ev+eh",ad-layout="image-top")
    adsense.column(class="is-4",ad-client="ca-pub-8592091801712115",ad-slot="7989569462",ad-style="display: block",ad-format="auto",ad-layout-key="-8h+1r-df+ev+eh",ad-layout="image-top")
  component(is="popular-videos")
  .columns.box
    adsense.column(class="is-4",ad-client="ca-pub-8592091801712115",ad-slot="6643933864",ad-style="display: block",ad-format="auto",ad-layout-key="-8h+1r-df+ev+eh",ad-layout="image-top")
    adsense.column(class="is-4",ad-client="ca-pub-8592091801712115",ad-slot="7989569462",ad-style="display: block",ad-format="auto",ad-layout-key="-8h+1r-df+ev+eh",ad-layout="image-top")
    adsense.column(class="is-4",ad-client="ca-pub-8592091801712115",ad-slot="6643933864",ad-style="display: block",ad-format="auto",ad-layout-key="-8h+1r-df+ev+eh",ad-layout="image-top")
  component(is="recommended-videos")
  .columns.box
    adsense.column(class="is-4",ad-client="ca-pub-8592091801712115",ad-slot="7989569462",ad-style="display: block",ad-format="auto",ad-layout-key="-8h+1r-df+ev+eh",ad-layout="image-top")
    adsense.column(class="is-4",ad-client="ca-pub-8592091801712115",ad-slot="6643933864",ad-style="display: block",ad-format="auto",ad-layout-key="-8h+1r-df+ev+eh",ad-layout="image-top")
    adsense.column(class="is-4",ad-client="ca-pub-8592091801712115",ad-slot="7989569462",ad-style="display: block",ad-format="auto",ad-layout-key="-8h+1r-df+ev+eh",ad-layout="image-top")
</template>

<script>
import config from '@config'
import pageRecommended from '@pages/videos/recommended.vue'
import pagePopular from '@pages/videos/popular.vue'
import pageNew from '@pages/videos/new.vue'
import VueAdsense from '@components/VueAdsense.vue'

export default {
  components: {
    'recommended-videos': pageRecommended,
    'popular-videos': pagePopular,
    'new-videos': pageNew,
    'adsense': VueAdsense
  },
  head: {
    title(){
      return {
        inner: config.app.name,
        separator: ' '
      }
    },
    meta(){
      return [
        { name: 'description', content: config.app.description }
      ]
    }
  },
  created(){
    this.$Progress.start()
  }
}
</script>