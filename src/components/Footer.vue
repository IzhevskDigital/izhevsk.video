<template lang="pug">
  footer.footer
    .container
      .content.has-text-centered
        p
          a(mailo="mailto:all@izhevsk.video") Если у вас есть идеи по улучшению сайта. Пишите на all@izhevsk.video
        p Licensed under #[a(href="https://opensource.org/licenses/GPL-3.0") GPL-3.0].
        p.links-buttons
          span(v-for="link in app.links",v-html="link")
        p
          a.icon(:href="'https://github.com/' + app.github.repo",target="_blank")
            i.ion-social-github
</template>

<script>
import config from '@config'

export default {
  computed: {
    app() {
      return config.app
    }
  }
}
</script>

<style lang="sass" scoped>
  .links-buttons
    span
      margin: 0 3px
</style>
