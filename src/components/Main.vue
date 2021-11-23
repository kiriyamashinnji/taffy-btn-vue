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
  margin-left: 18.3rem;
  transition: 0.5s linear;
}

.main.active  {
  transition: 0.75s ease-out;
  margin-left: 8.5rem;
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