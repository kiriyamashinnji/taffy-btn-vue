<template>
  <div class="btn-warper">
    <div class="tf-btn" ref="el" v-on:click="onClick()">
      <div class="tf-btn-content">
        {{ btn.voice_name }}
      </div>
      <img
        src="../assets/four-leafed-clover.svg"
        class="tf-btn-icon"
        :class="classObject"
      />
    </div>
    <div class="progress-bar" :class="classObject"></div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  name: "TaffyBtn",
  setup() {
    const el = ref(null);
  },

  props: {
    btn: Object,
    playUrlList: Object,
    isPaused: Boolean,
  },

  data: () => {
    return {
      width: 0,
      duration: 0,
      clickedJustNow: false,
    };
  },

  mounted() {
    this.width = String(this.$refs.el.clientWidth) + "px";
    this.duration = String(this.btn.voice_length-0.02) + "s";
  },

  computed: {
    classObject() {
      return {
        paused: this.isPaused,
        active: this.playUrlList.indexOf(this.btn.voice_url) > -1 && !this.clickedJustNow,
      };
    },
  },

  methods: {
    onClick: function () {
      this.$emit("play", this.btn.voice_url);
      this.clickedJustNow = true;
      setTimeout(() => {
        this.clickedJustNow = false;
      }, 50);
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

.paused {
  -webkit-animation-play-state: paused !important;
  animation-play-state: paused !important;
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
  background-color: var(--color-primary);
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  cursor: pointer;
  margin: 0.7rem;
  box-shadow: 1px 1.3px 5.2px #fd507e71;
  font-size: 1.3rem;
  color: var(--color-bg);

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
  background: var(--color-hover);
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

.progress-bar {
  position: absolute;
  top: -2rem;
  width: 60px;
  height: 60px;
  background-image: url(../assets/fyy-play.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
  visibility: hidden;
  transition-duration: 0s;
}

.progress-bar.active {
  visibility: visible;
  float: left;
  animation: mymove v-bind(duration) linear forwards infinite;
}

.progress-bar.active.paused {
  background-image: url(../assets/fyy-pause.png);
}

@keyframes mymove {
  0% {
    left: -0.5rem;
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    left: calc(v-bind(width) - 1.5rem);
    opacity: 0;
  }
}

.btn-warper {
  position: relative;
  display: inline-flex;
}

@media (max-width: 767px) {
  .tf-btn {
    margin: 0.5rem 0.6rem;
    font-size: 0.9rem;
    padding: 0.15rem 0.3rem 0.15rem 0.6rem;
  }
  .tf-btn-icon {
    height: 1.15rem;
    margin-left: 0.2rem;
  }
  .tf-btn-content {
    min-height: 1.3rem;
  }
  .progress-bar {
    top: -1.5rem;
    width: 40px;
    height: 40px;
  }

  .progress-bar.active {
    animation: mymove1 v-bind(duration) linear forwards infinite;
  }
 
  @keyframes mymove1 {
    0% {
      left: 0;
      opacity: 0;
    }
    5% {
      opacity: 1;
    }
    95% {
      opacity: 1;
    }
    100% {
      left: calc(v-bind(width) - 0.5rem);
      opacity: 0;
    }
  }
}
</style>