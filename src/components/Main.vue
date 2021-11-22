<template>
  
  <div class="main" :class="{active: !sideBarToggled}">
      <TopNav></TopNav>
      <TaffyBtnGroup :btns="btnOverview[activeId]" />
    
  </div>
</template>

<script>
import TaffyBtnGroup from "./TaffyBtnGroup.vue";
import TopNav from "./TopNav.vue";

export default {
  name: "Main",
  components: {
    TaffyBtnGroup,
    TopNav
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

<style>
.main {
  margin-left: 20rem;
  transition: 0.65s ease-out;
}

.main.active  {
  transition: 0.65s ease-out;
  margin-left: 11rem;
}

</style>