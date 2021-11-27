<template>
  <div class="main-container" :class="{ active: !sideBarToggled }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MainContainer",

  props: {
    sideBarToggled: Boolean,
  },
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .main-container {
    margin-left: 0 !important;
  }
}

.main-container {
  margin-left: 20rem;
  transition: 0.65s cubic-bezier(0.2, 0.39, 0.66, 0.74);
}
.main-container.active {
  transition: 0.75s cubic-bezier(0.24, 0.3, 0.59, 0.98);
  margin-left: 9rem;
}
</style>