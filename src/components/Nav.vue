<template lang="pug">
nav.navbar.has-shadow
  .navbar-brand
    .nav-item
      router-link.button.is-white(
        v-for="topic in topics", :key="topic.id",
        :to="{ name: topic.type , params: { id: topic.id } }"
      ) #[strong {{ topic.title }}]
    .nav-item
      router-link.link(:to="{ name: 'topics' }") #[strong Все...]
</template>

<script>
import store from '@store'

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
  methods: {
    loadTopics() {
      store.fetchTopics({ order: 'score', limit: this.limit }).then(topics => {
        this.topics = topics
      })
    }
  }
}
</script>