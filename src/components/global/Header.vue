<template>
  <div>
    <router-link to="/" class="link" active-class="link--active" exact>Home</router-link>
    <template v-if="!isAuthenticated">
      <router-link to="/signup" class="link" active-class="link--active" exact>Signup</router-link>
      <router-link to="/login" class="link" active-class="link--active" exact>Login</router-link>
    </template>
    <template v-if="isAuthenticated">
      <router-link to="/users" class="link" active-class="link--active" exact>Users</router-link>
    </template>
    <router-link to="/help" class="link" active-class="link--active" exact>Help</router-link>
    <template v-if="isAuthenticated">
      <span class="link" active-class="link--active" @click="logout">Logout</span>
      <span>User: {{ this.$store.state.username }}</span>
    </template>
  </div>
</template>

<script>
import router from "../../router";

export default {
  computed: {
    isAuthenticated() {
    return this.$store.getters.idToken !== null;
  },
  idToken() {
        return this.$store.getters.idToken;
      },
  },
  methods: {
    logout() {
      this.$store.getters.logout;
      alert("Logout completed");
      router.replace('/login');
    }
  }
};

</script>

<style scoped>
  .link {
    margin-right:10px;
    cursor: pointer;
  }
  .link--active{
    font-size: 20px;
    cursor: pointer;
  }
</style>