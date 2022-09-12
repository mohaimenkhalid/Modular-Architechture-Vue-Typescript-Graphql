<template>
  <p class="text-red-500">
    {{ message }}
  </p>
</template>

<script lang="ts">
// export default {
//   props: ['message']
// }
import { defineComponent } from 'vue'

export default defineComponent({
  // type inference enabled
  props: {
    message: String,
  },
})
</script>
