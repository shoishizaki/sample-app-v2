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
import axios from 'axios';
import router from '../router';

  export default {
    data() {
      return {
          email: "",
          password: "",
          username: ""
      };
    },
    methods: {
      register(){
        this.createUser();
        this.signup();
        this.sendUserInformation();
      },
      createUser(){
        axios.post('https://firestore.googleapis.com/v1/projects/sample-vuejs-70946/databases/(default)/documents/users',
        {
          fields: {
            username: {
              stringValue:this.username
            },
            email:{
              stringValue:this.email
            }
          }
        }
        );
      },
      signup(){
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD7xFhBnGy0DT-EXJEncF8ilUusidQe34Q',
        {
          email: this.email,
          password: this.password,
          returnSecureToken: true
        }
        ).then(response => {
          this.$store.state.idToken = response.data.idToken;
          router.push('/');
        });
      },
      sendUserInformation() {
        this.$store.state.username = this.username;
        this.$store.state.email = this.email;
      }
    }
};
</script>

<style scoped>
.signup{
  text-align: center;
}
  
</style>