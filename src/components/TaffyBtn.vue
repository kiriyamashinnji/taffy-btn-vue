<template>
  <div class="tf-btn">
    <div class="tf-btn-content" v-on:click="onClick()">
      {{ btn.voice_name }}
    </div>
    <img src="../assets/four-leafed-clover.svg" class="tf-btn-icon" />
  </div>
</template>

<script>
export default {
  name: "TaffyBtn",

  props: {
    btn: Object,
  },

  data: () => {
    return {};
  },
  
  methods: {
    onClick: function () {
      this.$player.play(this.btn.voice_url);
    },
  },
};
</script>

<style scoped>
div {
  --ease-time: 0.5s;
}

.tf-btn-icon {
  height: 1.5rem;
  margin-left: 0.5rem;
}
.tf-btn-icon.active {
  -webkit-animation: spin 1s linear infinite;
  -moz-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
}
.tf-btn-content {
  min-height: 1.8rem;
}
.tf-btn {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-content: center;
  text-align: left;
  position: relative;
  padding: 0.15rem 0.5rem 0.15rem 1rem;
  background-color: var(--bs-primary);
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  cursor: pointer;
  margin: 0.7rem;
  box-shadow: 1px 1.3px 5.2px #fd507e71;
  font-size: 1.3rem;
  color: var(--bs-body-bg);

  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  /*   background: #e1e1e1; */
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: var(--ease-time);
  transition-duration: var(--ease-time);
}

.tf-btn:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--bs-btn-hover);
  border-radius: 100%;
  -webkit-transform: scale(0);
  transform: scale(0);
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: var(--ease-time);
  transition-duration: var(--ease-time);
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.tf-btn:hover,
.tf-btn:focus,
.tf-btn:active {
  color: white;
}
.tf-btn:hover:before,
.tf-btn:focus:before,
.tf-btn:active:before {
  -webkit-transform: scale(1.5, 3);
  transform: scale(1.5, 3);
}
</style>