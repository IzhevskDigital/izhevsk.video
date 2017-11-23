<template lang="pug">
section.section
  .container
    .content
      p.title.is-5(v-if="channel.description") #[strong About]
      ul.channel-stats
        li {{ subscriberCount }} подписчиков
        li {{ viewCount }} просмотров
        li Создан {{ publishedAt }}
      p(v-html="channel.description")
    .columns
      adsense.column(class="is-4",ad-client="ca-pub-8592091801712115",ad-slot="7989569462",ad-style="display: block",ad-format="auto",ad-layout-key="-8h+1r-df+ev+eh",ad-layout="image-top")
      adsense.column(class="is-4",ad-client="ca-pub-8592091801712115",ad-slot="7989569462",ad-style="display: block",ad-format="auto",ad-layout-key="-8h+1r-df+ev+eh",ad-layout="image-top")
      adsense.column(class="is-4",ad-client="ca-pub-8592091801712115",ad-slot="7989569462",ad-style="display: block",ad-format="auto",ad-layout-key="-8h+1r-df+ev+eh",ad-layout="image-top")
</template>

<script>
import numeral from 'numeral'
import moment from 'moment'
import store from '@store'
import VueAdsense from '@components/VueAdsense.vue'


export default {
  components:{
    'adsense': VueAdsense
  },
  data() {
    return {
      channel: store.currentChannel
    }
  },
  computed: {
    subscriberCount() {
      return numeral(this.channel.subscriberCount).format('0,0')
    },
    viewCount() {
      return numeral(this.channel.viewCount).format('0,0')
    },
    publishedAt() {
      return moment(this.channel.publishedAt).format('MMM D, YYYY')
    }
  },
  created() {
    this.$Progress.finish()
  }
}
</script>

<style lang="sass">
.channel-title
  // margin-bottom: 0 !important
.channel-stats
  list-style: none !important
  margin-left: 0 !important
  li
    font-weight: 500
    color: #4a4a4a
</style>