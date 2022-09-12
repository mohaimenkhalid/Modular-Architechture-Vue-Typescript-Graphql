<template>
  <h1>Create Task</h1>
  <div>
    <div>
      {{ form }} <br />
      <label>Task:</label><br />
      <input type="text" placeholder="task" v-model="v$.task.$model" />
      <Error v-if="v$.task.$errors.length" :message="v$.task.$errors[0].$message" />
    </div>
    <div>
      <label>Status:</label><br />
      <select name="status" id="status" v-model="v$.status.$model" >
        <option :value=true>Active</option>
        <option :value=false>Inactive</option>
      </select>
      <Error v-if="v$.status.$errors.length" :message="v$.status.$errors[0].$message" />
    </div>
    <button @click="createTask" :disabled="v$.$invalid">Submit</button>
  </div>
</template>

<script>
import store from "@/store";
import {reactive} from "vue";
import taskValidator from "@/modules/products/validators/taskValidator";

export default {
  setup() {
    const form = reactive({task: '', status: true})
    const {v$} = taskValidator(form)
    const createTask = () =>{
      store.dispatch("products/createTask", form)
    }
    return {createTask, form, v$}

  }

}
</script>