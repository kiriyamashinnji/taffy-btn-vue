<template>
    <!-- Nav -->
    <nav> </nav>
    <!-- Btn category selection for mobile -->
    
    <!-- Btn category selection for pc or taplate-->
    <div class="sidebar">
        
    </div>
</template>

<script>
export default {
  name: "Nav",

  props: {
    btnOverview: Object,
    sideBarWidth: String,
  },
  data: () => {
    return {};
  },
};
</script>

<style scoped>

@media (max-width: 768px) {
  .sidebar {
    margin-left: calc(-1 * v-bind(sideBarWidth));
    transition: margin 0.25s ease-out;
  }
}
.sidebar {
    height: 100%;
    width: v-bind(sideBarWidth);
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #5f2121;
    overflow-x: hidden;
    transition: margin 0.25s ease-out;
    padding-top: 20px;
}
</style>