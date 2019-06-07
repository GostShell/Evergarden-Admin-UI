<template lang="html">
  <div></div>
</template>

<script>
import Nprogress from 'nprogress'
export default {
  methods: {
    start() {
      Nprogress.start()
    },
    finish() {
      Nprogress.done()
    }
  }
}
</script>

<style>
#nprogress .spinner {
  top: 50% !important;
  left: 55% !important;
}
#nprogress .spinner-icon {
  height: 40px !important;
  width: 40px !important;
}
</style>
