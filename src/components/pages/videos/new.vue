<template lang="pug">
section.section
  .container
    h2.title.is-5 #[strong Новое]
    video-list(:videos="videos")
</template>

<script>
import store from '@store'
import util from '@utils'
import filters from '@filters'
import moment from 'moment'
import VideoList from '@components/VideoList.vue'

export default {
  components: {
    'video-list': VideoList
  },
  data() {
    return {
      videos: [],
      limit: 12,
      loaded: false
    }
  },
  created() {
    this.loadVideos()
  },
  methods: {
    loadVideos() {
      this.loaded = false
      store.fetchTopics().then(topics => {
        const params = {
          q: util.prepareQuery(topics),
          order: filters.order[2].value,
          maxResults: this.limit,
          publishedAfter: moment().subtract(3, 'days').toISOString()
        }

        store.fetchVideos(params).then(result => {
          this.videos = result.videos
          this.$Progress.finish()
          this.loaded = true
        }).catch(() => {
          this.$Progress.fail()
        })
      }).catch(() => {
        this.$Progress.fail()
      })
    }
  }
}
</script>