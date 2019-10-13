<template>
  <div>{{ test }}</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Test',
  computed: {
    test(): string {
      return 'hello run by typescript'
    }
  }
})
</script>

<style scoped></style>
