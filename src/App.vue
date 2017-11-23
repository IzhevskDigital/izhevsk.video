<template lang="pug">
div#app
  v-header
  router-view
  vue-progress-bar
  div(v-if="errors.length")
    alert(v-for="error in errors",:key="error.id", type="info",:message="error",position="bottom-right",autohide)
  v-footer
</template>

<script>
import Alert from  '@components/Alert.vue'
import Header from '@components/Header.vue'
import Footer from '@components/Footer.vue'
import PageIndex from '@pages/index.vue'
import events from '@events'
import config from '@config'

export default {
  name: 'app',
  data () {
    return {
      errors: []
    }
  },
  components: {
    'v-header': Header,
    'v-footer': Footer,
    'alert': Alert
  },
  computed: {
    app() {
      return config.app
    }
  },
  created() {
    events.$on('api.error', (err)=>{
      this.errors.push(err.name + ': ' + err.message)
    })
  },
  head: {
    meta() {
      return [
        { property: 'og:url', content: this.app.url },
        { property: 'og:type', content: 'site' },
        { property: 'og:title', content: this.app.title },
        { property: 'og:image', content: this.app.url + this.app.logo.share },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:description', content: this.app.description }
      ]
    }
  }

}
</script>

<style lang="scss">
  @import '~animate.css';
  @import "~bulma/sass/utilities/initial-variables";

  $family-serif: "Merriweather", "Georgia", serif;
  $primary: $black;
  $primary-invert: $white;
  $family-primary: $family-serif;

  @import '~bulma';

</style>
