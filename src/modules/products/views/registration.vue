<template>
  <h1>Registration</h1>
  <div>
    <div>
      {{ form }} <br />
      <label>Name:</label><br />
      <input type="text" placeholder="name" v-model="form.name" />
    </div>
    <div>
      <label>Email:</label><br />
      <input type="email" placeholder="email" v-model="form.email" />
    </div>
    <div>
      <label>Password:</label><br />
      <input type="password" placeholder="password" v-model="form.password" />
    </div>
    <button @click="register">Submit</button>
  </div>
</template>

<script>
import store from "@/store";
import {reactive} from "vue";

export default {
  setup() {
    const form = reactive({name: '', email: '', password: ''})
    const register = () =>{
      store.dispatch("products/register", form)
    }
    return {register, form}

  }

}
</script>