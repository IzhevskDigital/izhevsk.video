<template lang="pug">
    section.section(v-infinite-scroll="loadMore",infinite-scroll-disabled="loading")
      .container
        video-list(:videos="results")
        spinner(:show="loading")
        .no-results(v-show="noResults")
          router-link(to="/")
            img(:src="logo.mini")
          span No results.
</template>

<script>
import Spinner from '@components/Spinner.vue'
import VideoList from '@components/VideoList.vue'
import filters from '@filters'
import store from '@store'
import config from '@config'

export default {
  components: { VideoList, Spinner },
  data(){
    return {
      orderOptions: filters.order,
      languageOptions: filters.language,
      timeframeOptions: filters.timeframe,
      results: [],
      language: '',
      timeframe: filters.timeframe[0].value,
      order: filters.order[2].value,
      limit: 28,
      loading: false,
      nextPage: null,
      noResults: false,
      params: {
        title: ''
      }
    }
  },
  computed: {
    query() {
      return this.$route.query.q
    },
    logo() {
      return config.app.logo
    }
  },
  head: {
    title() {
      return {
        inner: this.params.title,
        separator: '-',
        complement: config.app.name
      }
    }
  },
  created() {
    this.$Progress.start()
    this.nextPage = null
    this.loadResults()
  },
  watch: {
    order() {
      this.results = []
      this.nextPage = null
      this.loadResults()
    },
    language() {
      this.results = []
      this.nextPage = null
      this.loadResults()
    },
    timeframe() {
      this.results = []
      this.nextPage = null
      this.loadResults()
    },
    $route() {
      this.results = []
      this.nextPage = null
      this.loadResults()
    }
  },
  methods: {
    changeOrder(order) {
      this.order = order
    },
    changeLanguage(language) {
      this.language = language
    },
    changeTimeframe(timeframe) {
      this.timeframe = timeframe
    },
    loadResults() {
      this.noResults = false
      this.loading = true
      this.params.title = this.query
      this.$emit('updateHead')

      const params = {
        q: '($q)'.replace(/\$q/g, this.query),
        order: this.order,
        maxResults: this.limit,
//        videoCategoryId: 27,
        pageToken: this.nextPage,
        publishedAfter: this.timeframe || null,
        relevanceLanguage: this.language || null,
        location: '56.852706,53.203596',
        locationRadius: '600km',
        type: 'all'
      }

      store.fetchVideos(params).then((result) => {
        this.loading = false
        this.$Progress.finish()
        if(!result.videos.length) {
          this.noResults = (!this.results.length)
          this.nextPage = null
          return
        }
        this.nextPage = result.nextPageToken
        result.videos.map(video => {
          this.results.push(video)
        })
      }).catch(() => {
        this.loading = false
        this.$Progress.fail()
      })
    },
    loadMore() {
      if(!this.nextPage) { return }
      this.loadResults()
    }
  }
}
</script>

<style lang="sass" scoped>
.no-results
  width: 100px
  margin: 0 auto
  text-align: center
  img
    float: left
    display: inline-block
    width: 100%
    height: 30px
    margin-bottom: 10px
  span
    display: inline-block

.tooltip
  position: relative
  display: inline-block
  &:hover
    .tooltip-text
      opacity: 1

  .tooltip-text
    transition: opacity .2s ease-in-out
    opacity: 0
    background-color: rgba(0,0,0,.85)
    color: #fff
    text-align: center
    padding: 5px
    border-radius: 4px
    position: absolute
    z-index: 1

</style>
