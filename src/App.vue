<template>
  <div id="app">
    <Navbar />
    <Context />
    <Filters />
    <Users />
  </div>
</template>

<script>
import './styles/styles.scss';
import Navbar from './components/Navbar/index';
import Context from './components/Context/index';
import Filters from './components/Filters/index';
import Users from './components/Users/index';

export default {
  name: 'App',
  components: {
    Navbar,
    Context,
    Filters,
    Users,
  },
};
</script>
