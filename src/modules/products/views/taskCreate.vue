<template>
  <h1>Create Task</h1>
  <div>
    <div>
      {{ form }} <br />
      <label>Task:</label><br />
      <input type="text" placeholder="task" v-model="form.task" />
    </div>
    <div>
      <label>Status:</label><br />
      <select name="status" id="status" v-model="form.status">
        <option :value=true>Active</option>
        <option :value=false>Inactive</option>
      </select>
    </div>
    <button @click="createTask">Submit</button>
  </div>
</template>

<script>
import store from "@/store";
import {reactive} from "vue";

export default {
  setup() {
    const form = reactive({task: '', status: true})
    const createTask = () =>{
      store.dispatch("products/createTask", form)
    }
    return {createTask, form}

  }

}
</script>