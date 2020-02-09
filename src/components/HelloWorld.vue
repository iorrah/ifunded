<template>
  <div class="users">
    <h3>Users</h3>
    <button type="button" @click="getUsers()">Load users</button>
  </div>
</template>

<script>
import {
  ACTION_APP_GET_USERS,
  ACTION_APP_ADD_USER,
} from '../store/app.store';

export default {
  name: 'HelloWorld',
  props: {
  },
  computed: {
    appUsers() {
      return this.$store.getters.getUsers;
    },
  },
  methods: {
    getUsers() {
      this.$store.dispatch(ACTION_APP_GET_USERS);
    },
    addUser() {
      this.$store.dispatch(ACTION_APP_ADD_USER);
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
