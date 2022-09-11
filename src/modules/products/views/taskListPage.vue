<template>
  <div>Task List</div>

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
import store from "@/store";
import {computed} from 'vue'

export default {
  setup() {
    const getTaskList = () =>{
      store.dispatch("products/getTaskList")
    }
    getTaskList();
    return {
      tasks: computed(() => store.getters['products/getTaskList'])
    }

  }

}
</script>