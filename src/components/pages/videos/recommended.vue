<template lang="pug">
section.section
  .container
    h2.title.is-5 #[strong Рекомендуем]
    video-list(:videos="videos")
</template>

<script>
import store from '@store'
import util from '@utils'
import filters from '@filters'
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
          order: filters.order[3].value,
          maxResults: this.limit,
          publishedAfter: filters.timeframe[3].value
        };
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