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

    </tbody>
  </table>
</template>

<script>
import store from "@/store";

export default {
  setup() {
    const getTaskList = () =>{
      store.dispatch("products/getTaskList")
    }
    getTaskList();
    return {

    }

  }

}
</script>