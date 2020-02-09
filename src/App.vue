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
