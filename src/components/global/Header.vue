<template>
  <div>
    <router-link to="/" class="link" active-class="link--active" exact>Home</router-link>
    <template>
      <router-link to="/signup" class="link" active-class="link--active" exact>Signup</router-link>
      <router-link to="/login" class="link" active-class="link--active" exact>Login</router-link>
    </template>
    <template>
      <router-link to="/users" class="link" active-class="link--active" exact>Users</router-link>
    </template>
    <router-link to="/help" class="link" active-class="link--active" exact>Help</router-link>
    <template>
      <span class="link" active-class="link--active" @click="logout">Logout</span>
    </template>
  </div>
</template>

<script>
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