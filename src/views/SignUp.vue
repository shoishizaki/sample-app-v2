<template>
  <div class="signup">
    <h3>Sign Up</h3>
    <label for="username">UserName</label>
    <input id="username" type="text" v-model="username"><br>
    <label for="email">User Email</label>
    <input id="email" type="text" v-model="email"><br>
    <label for="password">Password</label>
    <input id="password" type="password" v-model="password">
    <br>
    <button @click="register">Create my account</button>
  </div>
</template>

<script>

  export default {
    data() {
      return {
          email: "",
          password: "",
          username: ""
      };
    }
};
</script>

<style scoped>
.signup{
  text-align: center;
}
  
</style>