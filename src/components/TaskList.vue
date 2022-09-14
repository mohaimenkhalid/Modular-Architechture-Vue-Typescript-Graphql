<template>
  <table>
    <thead>
    <th>SI</th>
    <th>Task</th>
    <th>Status</th>
    <th>Action</th>
    </thead>
    <tbody>
    <tr v-for="(task, index) in tasks">
      <td>{{ index + 1 }}</td>
      <td>{{ task.task }}</td>
      <td>{{ task.status }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    tasks: Object
  },
  setup() {

  }
})
</script>