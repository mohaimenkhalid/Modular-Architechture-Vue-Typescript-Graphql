<template>
  <div>Task List</div>
  <TaskList :tasks="tasks" />
</template>

<script>
import store from "@/store";
import {computed} from 'vue'
import TaskList from "@/components/TaskList";

export default {
  components: {TaskList},
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