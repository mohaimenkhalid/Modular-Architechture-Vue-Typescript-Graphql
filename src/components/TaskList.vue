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
      <td><button @click="deleteTask(task._id)">Delete</button></td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  import store from "@/store";

  export default {
    props: {
      tasks: Object
    },
    setup() {
      const deleteTask = (taskId) =>{
        store.dispatch("products/deleteTask", taskId)
      }
      return {deleteTask}
    }
  }
</script>