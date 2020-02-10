<template>
  <div class="context container-fluid">
    <h1 class="context__title">Platform users</h1>

    <ul class="context__menu">
      <li class="context__menu-item">
        <a href="#" class="context__menu-link">All users</a>
        <i class="context__menu-indicator--active"></i>
      </li>

      <li class="context__menu-item">
        <a href="#" class="context__menu-link">Created by me</a>
      </li>

      <li class="context__menu-item">
        <a href="#" class="context__menu-link">Deleted</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Context',
};
</script>
