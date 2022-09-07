<template>
  <div>
    <ul>
      <li>
        <router-link to="/product">Product Page</router-link>
      </li>
      <li>
        <router-link to="/registration">Registration</router-link>
      </li>
    </ul>
    <br />
    <div>
      <div>
        <h4>Login system</h4>
        <label>Email:</label><br />
        <input type="email" placeholder="email" v-model="form.username" />
      </div>
      <div>
        <label>Password:</label><br />
        <input type="password" placeholder="password" v-model="form.password" />
      </div>
      <button @click="login">Submit</button>
    </div>
  </div>
</template>

<script>
  import store from "@/store";
  import {reactive} from "vue";

  export default {
    setup() {
      const form = reactive({username: '', password: ''})
      // const call = () =>{
      //  store.dispatch("products/getPostList")
      // }

      const login = () =>{
        store.dispatch("products/login", form)
      }
    return {login, form}

    }

  }
</script>