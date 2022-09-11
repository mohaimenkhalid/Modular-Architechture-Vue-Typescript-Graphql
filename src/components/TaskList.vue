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
      <td>{{index+1}}</td>
      <td>{{task.task}}</td>
      <td>{{task.status}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    props: {
      tasks: Object
    },
    setup() {

    }
  }
</script>