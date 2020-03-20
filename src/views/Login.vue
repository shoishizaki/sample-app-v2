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
          password: "",
          users: []
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
          this.$store.state.email = response.data.email;
          this.findUser();
          router.push('/');
        });
      },
      findUser() {
        axios.get('https://firestore.googleapis.com/v1/projects/sample-vuejs-70946/databases/(default)/documents/users')
        .then(response => {
          console.log(response);
          this.users = response.data.documents;
          console.log(this.users);
          for (var i = 0; i < this.users.length; i++) {
            if (this.$store.state.email == this.users[i].fields.email.stringValue) {
              this.$store.state.username = this.users[i].fields.username.stringValue;
            }
          }
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