<template>
  <div class="btn-group">
    <TaffyBtn v-for="btn in btns.button_list" :key="btn" :btn="btn" />
  </div>
</template>

<script>
import TaffyBtn from "./TaffyBtn.vue";

export default {
  name: "TaffyBtnGroup",
  components: {
    TaffyBtn,
  },
  props: {
    btns: Object,
  },
  data: () => {
    return {};
  },
};
</script>

<style>
.btn-group {
  text-align: left;
}
</style>