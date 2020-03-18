import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Users from "./views/Users.vue";
import Help from "./views/Help.vue";
import Login from "./views/Login.vue";
import SignUp from "./views/SignUp.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {path: '/', component: Home},
    {path: '/users', component: Users},
    {path: '/help', component: Help},
    {path: '/login', component: Login},
    {path: '/signup', component: SignUp}
    ]
});