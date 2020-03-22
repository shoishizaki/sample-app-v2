<template>
  <div class="home">
    <template v-if="!isAuthenticated">
      <h1>Welcome to the sample App</h1>
      <button @click="toSignUp">Sign up now!!</button>
      <h3>This is the home page for the microposts application by <a href="https://jp.vuejs.org/index.html">vue.js</a> </h3>
      <img src="@/assets/logo.png"/>
    </template>
    <template v-if="isAuthenticated">
      <h3>MicroPost</h3>
      <labal for="micropost"></labal>
      <textarea id="micropost" v-model="micropost"></textarea>
      <br><br>
      <button @click="createPost">Post</button>
      <h2>Micropost Feed</h2>
      <div v-for="post in posts" :key="post.name">
        <hr>
        <div>Username: {{post.fields.username.stringValue}}</div>
        <div>post: {{post.fields.post.stringValue}}</div>
        <div v-if="post.editable">
          <button @click="deletePost(post.name)">Delete</button>
        </div>
        <br>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";

  export default {
    computed: {
      idToken() {
        return this.$store.state.idToken;
      },
      isAuthenticated() {
        return this.$store.getters.idToken !== null;
      }
    },
    data() {
      return{
        micropost: "",
        posts: []
      };
    },
    created() {
      axios.get('https://firestore.googleapis.com/v1/projects/sample-vuejs-70946/databases/(default)/documents/posts',{
        headers: {
          Authorization: `Bearer ${this.idToken}`
        }
      }
      )
      .then(response => {
        this.posts = response.data.documents;
        this.isEditable();
      });
    },
    methods: {
      createPost() {
        axios.post('https://firestore.googleapis.com/v1/projects/sample-vuejs-70946/databases/(default)/documents/posts',
        {
          fields: {
            username: {
              stringValue:this.$store.state.username
            },
            post: {
              stringValue:this.micropost
            }
          }
        }, {
          headers: {
            Authorization: `Bearer ${this.idToken}`
          }
        }
        );
      this.micropost = "";
      alert("Created micropost!");
      router.push('/users');
      },
      toSignUp() {
        router.push('/signup');
      },
      deletePost(url) {
        axios.delete(`https://firestore.googleapis.com/v1/${url}`);
        alert("Deleted post");
        router.push('/users');
      },
      isEditable() {
        for (var n = 0; n < this.posts.length; n++ ) {
          if (this.posts[n].fields.username.stringValue == this.$store.state.username) {
            this.posts[n]["editable"] = true;
          } else {
            this.posts[n]["editable"] = false;
          }
        }
      }
    }
  };
</script>

<style scoped>
  .home{
    text-align: center;
  }
</style>