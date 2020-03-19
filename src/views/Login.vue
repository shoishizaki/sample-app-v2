<template>
  <div class="login">
    <h3>Login</h3>
    <label for="email">User Email</label>
    <input id="email" type="text" v-model="email"><br>
    <label for="password">Password</label>
    <input id="password" type="password" v-model="password">
    <br>
    <button @click="login">Login</button>
  </div>
</template>

<script>
import axios from 'axios';
import router from '../router';

export default {
    data() {
      return {
          email: "",
          password: ""
        };
    },
    methods: {
      login() {
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD7xFhBnGy0DT-EXJEncF8ilUusidQe34Q',
        {
          email: this.email,
          password: this.password,
          returnSecureToken: true
        }).then(response => {
          this.$store.state.idToken = response.data.idToken;
          console.log(this.$store.state.idToken);
          console.log(response);
          router.push('/')
        });
      }
    }
};

</script>

<style scoped>
.login{
  text-align: center;
}
  
</style>