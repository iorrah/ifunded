<template>
  <div id="app">
    <Navbar />
    <Users />
  </div>
</template>

<script>
import './styles/styles.scss';
import Navbar from './components/Navbar/index';
import Users from './components/Users/index';

export default {
  name: 'App',
  components: {
    Navbar,
    Users,
  },
};
</script>
