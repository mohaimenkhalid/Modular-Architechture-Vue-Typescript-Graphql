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
        <input type="email" placeholder="email" v-model="v$.username.$model" />
        <Error v-if="v$.username.$errors.length" :message="v$.username.$errors[0].$message" />
      </div>
      <div>
        <label>Password:</label><br />
        <input type="password" placeholder="password" v-model="v$.password.$model" />
        <Error v-if="v$.password.$errors.length" :message="v$.password.$errors[0].$message" />
      </div>
      <button @click="login" :disabled="v$.$invalid">Submit</button>
    </div>
  </div>
</template>

<script>
  import store from "@/store";
  import {reactive} from "vue";
  import authValidator from "@/modules/products/validators/authValidator";

  export default {
    setup() {
      const form = reactive({username: '', password: ''})
      // const call = () =>{
      //  store.dispatch("products/getPostList")
      // }
      const {v$} = authValidator(form)
      const login = () =>{
        store.dispatch("products/login", form)
      }
    return {login, form, v$}

    }

  }
</script>