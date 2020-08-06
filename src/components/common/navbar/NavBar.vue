<template>
  <div>
    <div>
      <slot name="left-nav-item"></slot>
    </div>
    <div>
      <slot name="center-nav-item"></slot>
    </div>
    <div>
      <slot name="right-nav-item"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',

};
</script>

<style scoped>
</style>
