<template>
  <div v-show="loading === false">
    <editor v-model="content" :init="tinyConf" />
    <el-button type="primary" @click="send">Send</el-button>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import Loader from '@/project/services/utils/progress-loader.js'

export default {
  middleware: 'init-progress-bar',
  components: {
    Editor
  },
  data() {
    return {
      tinyConf: {
        init_instance_callback: tinyEditor => {
          Loader.finishLoading(this)
        }
      },
      content: '',
      loading: true
    }
  },
  beforeMount() {
    Loader.startLoading(this)
  },
  methods: {
    send() {
      const payload = {
        content: this.content,
        author: 'john',
        title: 'Top article'
      }
      this.$store.dispatch('articles/postContent', payload)
    }
  }
}
</script>

<style lang="scss">
.tox-notifications-container {
  display: none !important;
}
</style>
