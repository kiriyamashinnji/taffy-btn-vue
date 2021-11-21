<template>
  <div class="main" :class="{active: !sideBarToggled}">
    <div v-for="btns in btnOverview" :key="btns" >
      <TaffyBtnGroup :btns="btns" />
    </div>
  </div>
</template>

<script>
import TaffyBtnGroup from "./taffy-btn-group.vue";

export default {
  name: "main",
  components: {
    TaffyBtnGroup,
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
  },
};
</script>

<style>
.main {
  margin-left: 18rem;
  transition: 0.75s cubic-bezier(0.39, 0.58, 0.57, 1);
}

.main.active  {
  margin-left: 8rem;
}

</style>