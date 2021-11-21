<template>
  <div class="main">
    <div v-for="btns in btnOverview" :key="btns">
      <TaffyBtnGroup :btns="btns" />
    </div>
  </div>
</template>

<script>
import TaffyBtnGroup from "./TaffyBtnGroup.vue";

export default {
  name: "Main",
  components: {
    TaffyBtnGroup,
  },
  data: () => {
    return {};
  },

  props: {
    btnOverview: Object,
    sideBarWidth: String,
  },
};
</script>

<style>
.main {
  margin-left: v-bind(sideBarWidth);
}
</style>