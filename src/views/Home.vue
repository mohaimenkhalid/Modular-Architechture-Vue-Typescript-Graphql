<template>
  <div>
    <router-link to="/product">Product Page</router-link>
    <br />
    <div>
      <div>
        {{form}}
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
      const call = () =>{
        console.log("call")
       //store.dispatch("products/getPostList")
      }

      const login = () =>{
        store.dispatch("products/login", form)
      }
    return {call, login, form}

    }

  }
</script>