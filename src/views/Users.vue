<template>
  <div>
    <div>
    <h1>All Users</h1>
    <hr>
    </div>
    <div v-for="user in users" :key="user.name">
      <div>UserName: {{user.fields.username.stringValue}}</div>
      <div>Email: {{user.fields.email.stringValue}}</div>
      <br>
      <hr>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios';
  
export default {
  computed: {
      idToken() {
        return this.$store.state.idToken;
      }
  },
  data() {
      return{
        users: [],
      };
  },
  created() {
    axios.get('https://firestore.googleapis.com/v1/projects/sample-vuejs-70946/databases/(default)/documents/users',{
      headers: {
        Authorization: `Bearer ${this.idToken}`
      }
    })
    .then(response => {
      this.users = response.data.documents;
    });
  }  
};
</script>