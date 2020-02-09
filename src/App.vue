<template>
  <div id="app">
    <Navbar />
    <Users />
  </div>
</template>

<script>
import './styles/styles.scss';
import Users from './components/Users/index';

export default {
  name: 'App',
  components: {
    Users,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
