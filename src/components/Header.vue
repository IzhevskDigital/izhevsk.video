<template lang="pug">
  nav.navbar.is-transparent.has-shadow
    .navbar-brand
      router-link(to="/").logo.nav-item.is-brand Izhevsk.Video
      .navbar-burger.burger(data-target="navMenuExample")
        span
        span
        span
    .navbar-menu
      .navbar-start
        .nav-item
          router-link.button.is-white(v-for="topic in topics", :key="topic.id",:to="{ name: topic.type , params: { id: topic.id } }") #[strong {{ topic.title }}]
        .nav-item
          router-link.link(:to="{ name: 'topics' }") #[strong Все...]
      .navbar-end
        a.navbar-item(href="https://github.com/IzhevskDigital/izhevsk.video",target="_blank")
          span.icon
            i.fa.fa-github
        a.navbar-item(href="#",target="_blank")
          span.icon(style="color: #55acee;")
            i.fa.fa-twitter
</template>

<script>
  import store from '@store'
  import config from '@config'


  export default {
    data() {
      return {
        topics: [],
        limit: 10
      }
    },
    created() {
      this.loadTopics()
    },
    computed: {
      app() {
        return config.app
      }
    },
    methods: {
      loadTopics() {
        store.fetchTopics({ order: 'score', limit: this.limit }).then(topics => {
        this.topics = topics
      })
      }
    }
  }
</script>

<style lang="sass" scoped>
  .navbar
    min-height: 52px
    position: fixed !important
    top: 0
    left: 0
    right: 0
    z-index: 4
  .logo
    margin: 15px
    img
      max-height: 35px

</style>