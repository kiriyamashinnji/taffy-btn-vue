<template>
  <div>
    <div v-for="btns in overView" :key="btns" class="group-container">
      <div class="group-header">
        <img class="group-icon" :src="btns.icon_url" alt="">
        <div class="header-text">
        {{btns.button_classification}}

        </div>
      </div>
      <TaffyBtnGroup
        :btns="btns"
        :playUrlList="playUrlList"
        :isPaused="isPaused"
        @play="onPlay"
      />
    </div>
  </div>
</template>

<script>
import TaffyBtnGroup from "./TaffyBtnGroup.vue";

export default {
  name: "TaffyBtnGroups",
  components: {
    TaffyBtnGroup,
  },
  props: {
    overView: Object,
    playUrlList: Object,
    isPaused: Boolean,
  },
  data: () => {
    return {};
  },
  methods: {
    onPlay: function (url) {
      this.$emit("play", url);
    },
  },
};
</script>

<style scoped>
.group-header {
    position: relative;
    font-size: 28px;
    color: var(--bs-primary);
    font-weight: bold;
    text-align: left;
}



.group-container {
    background: var(--bs-secondary);
    margin-top: 2rem;
    padding: 4.5rem 0.7rem 0.7rem 0.7rem;

    border: 5px solid white;
    border-radius: 2rem;
    position: relative;
}

.group-icon {
    position: absolute;
    z-index: 1;
    bottom: 0.3rem;
    left: -1.5rem;
    width: 5rem;
    border-radius: 50%;
    border: 5px solid white;
    background: var(--bs-secondary);
}
.header-text {
    position: absolute;
    display: inline-block;
    bottom: 1rem;
    left: 1rem;
    background: white;
    width: 100%;
    border-radius: 2rem;
    text-align: center;
    border: 5px solid white;
}
</style>