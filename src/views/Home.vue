<template>
  <div class="home">
      <h1>Welcome to the sample App</h1>
      <button>Sign up now!!</button>
      <h3>This is the home page for the microposts application by <a href="https://jp.vuejs.org/index.html">vue.js</a> </h3>
      <img src="@/assets/logo.png"/>
      <h3>MicroPost</h3>
      <label for="username"></label>
      <input id="username" type="text" v-model="username"/>
      <br><br>
      <labal for="micropost"></labal>
      <textarea id="micropost" v-model="micropost"></textarea>
      <br><br>
      <button @click="createPost">Post</button>
      <h2>Micropost Feed</h2>
      <div v-for="post in posts" :key="post.name">
        <hr>
        <div>Username: {{post.fields.username.stringValue}}</div>
        <div>post: {{post.fields.post.stringValue}}</div>
        <br>
      </div>
  </div>
</template>

<script>
import axios from "axios";

  export default {
    data() {
      return{
        username: "",
        micropost: "",
        posts: []
      };
    },
    created() {
      axios.get('https://firestore.googleapis.com/v1/projects/sample-vuejs-70946/databases/(default)/documents/posts',
      )
      .then(response => {
        this.posts = response.data.documents;
        console.log(this.posts);
      });
    },
    methods: {
      createPost() {
        axios.post('https://firestore.googleapis.com/v1/projects/sample-vuejs-70946/databases/(default)/documents/posts',
        {
          fields: {
            username: {
              stringValue:this.username
            },
            post: {
              stringValue:this.micropost
            }
          }
        }
        )
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
      this.name = "";
      this.micropost = "";
      }
    }
  };
</script>

<style scoped>
  .home{
    text-align: center;
  }
</style>