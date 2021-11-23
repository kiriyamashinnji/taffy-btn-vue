<template>
  
  <div class="main" :class="{active: !sideBarToggled}">
      <TopNav></TopNav>
      <div class="divider" />

      <TaffyBtnGroup id="btn-group" :btns="btnOverview[activeId]" />
  </div>
</template>

<script>
import TaffyBtnGroup from "./TaffyBtnGroup.vue";
import TopNav from "./TopNav.vue";

export default {
  name: "Main",
  components: {
    TaffyBtnGroup,
    TopNav,
  },
  data: () => {
    return { 
    };
  },
  mounted() {
  },
  props: {
    btnOverview: Object,
    sideBarToggled: Boolean,
    activeId: Number,
  },
};
</script>

<style scoped>
.main {
  margin-left: 20rem;
  transition: 0.65s cubic-bezier(0.2, 0.39, 0.66, 0.74);
}

.main.active  {
  transition: 0.75s cubic-bezier(0.24, 0.3, 0.59, 0.98);
  margin-left: 9rem;
}

.divider {
  width: calc(100% - 2*var(--radius-size));
  height: 3px;
  padding: 1px;
  margin: auto;
  margin-top: 0.5rem;
  background-color: var(--bs-primary);
  border-radius: 3px;
}

.btn-group {
  margin: 1.5rem 2.8rem;
}

</style>