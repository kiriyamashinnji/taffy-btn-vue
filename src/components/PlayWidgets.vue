<template>
  <div>
    <img
      v-for="index in 4"
      :key="index"
      src="../assets/heart-red.svg"
      class="control-leaf"
      :class="['c-' + index, isFolded]"
      @click="toggleFold"
    />

    <WidgetBtn
      v-for="index in 4"
      :key="index"
      :btnIndex="index"
      :isFolded="isFolded"
      :texts="widgetTexts[index - 1]"
      :srcs="widgetSrcs[index - 1]"
      @toggle="togglePlayer"
    />
  </div>
</template>

<script>
import WidgetBtn from "./WidgetBtn.vue";

export default {
  components: {
    WidgetBtn,
  },
  data() {
    return {
      isFolded: "folded",

      widgetSrcs: [
        ["pause.svg", "continue.svg"],
        ["no-overlap.svg", "overlap.svg"],
        ["no-loop.svg", "loop.svg", "random.svg"],
        ["help-me-to-choose.svg"],
      ],
      widgetTexts: [
        ["暂停播放", "继续播放"],
        ["禁止重叠", "重叠播放"],
        ["禁止循环", "洗脑循环", "随机播放"],
        ["随机播放"],
      ],

      mode: "no-loop",
      overlap: false,
      paused: false,
    };
  },
  methods: {
    toggleFold() {
      this.isFolded = this.isFolded === "folded" ? "unfolded" : "folded";
    },
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
    togglePlayer(index) {
      switch (index[0]) {
        case 1:
          this.paused = !this.paused;
          if (this.paused) {
            this.$emit("pause");
          } else {
            this.$emit("continuePlay");
          }
          break;
        case 2:
          this.overlap = index[1] === 1;
          this.$emit("setMode", this.mode, this.overlap);
          break;
        case 3:
          this.mode = this.widgetSrcs[2][index[1]].slice(0, -4);
          this.$emit("setMode", this.mode, this.overlap);
          break;
        case 4:
          this.$emit("playRandom");
          break;
      }
    },
  },
};
</script>

<style>
.control-leaf {
  z-index: 2;
  position: fixed;
  bottom: 6rem;
  right: 4rem;
  width: 4.5rem;
  transform-origin: bottom center;
  filter: drop-shadow(0 0 3px #fd507e71);
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.c-1 {
  transform: rotate(30deg);
}

.c-2 {
  transform: rotate(120deg);
}

.c-3 {
  transform: rotate(210deg);
}

.c-4 {
  transform: rotate(300deg);
}

.control-leaf.folded {
  transform: rotate(30deg);
}

.expanded-leaf {
  position: fixed;
  transform: rotate(30deg);
  transform-origin: bottom center;
  bottom: 6rem;
  right: 4rem;
  width: 4.5rem;
  cursor: pointer;
  filter: drop-shadow(0 0 3px #fd507e71);
}

.expanded-leaf.unfolded {
  filter: none;
  transform: rotate(30deg) !important;
  opacity: 0.3;
}

.expanded-leaf.l-1 {
  transition: 0.06s linear;
  transform: translateY(-6rem) rotate(30deg);
}

.expanded-leaf.l-2 {
  transition: 0.12s linear;
  transform: translateY(-12rem) rotate(30deg);
}

.expanded-leaf.l-3 {
  transition: 0.18s linear;
  transform: translateY(-18rem) rotate(30deg);
}

.expanded-leaf.l-4 {
  transition: 0.24s linear;
  transform: translateY(-24rem) rotate(30deg);
}

.leaf-content {
  position: fixed;
  transform: rotate(30deg);
  transform-origin: bottom center;
  bottom: 6rem;
  right: 4rem;
  cursor: pointer;
  width: 3rem;
}

.leaf-content.unfolded {
  transform: rotate(30deg) !important;
  opacity: 0.3;
}

.leaf-content.l-4 {
  bottom: 7.1rem;
  right: 4.46rem;
  width: 2.2rem;
  transition: 0.24s linear;
  transform: translateY(-24rem) rotate(30deg);
}

.leaf-content.l-3 {
  bottom: 7rem;
  right: 4.35rem;
  width: 2.5rem;
  transition: 0.18s linear;
  transform: translateY(-18rem) rotate(30deg);
}

.leaf-content.l-2 {
  bottom: 7.25rem;
  right: 4.15rem;
  width: 2.8rem;
  transition: 0.12s linear;
  transform: translateY(-12rem) rotate(30deg);
}

.leaf-content.l-1 {
  bottom: 7.05rem;
  right: 4.28rem;
  width: 2.8rem;
  transition: 0.06s linear;
  transform: translateY(-6rem) rotate(30deg);
}

.leaf-description {
  font-size: 1em;
  position: fixed;
  border-radius: 10px;
  background: rgba(97, 97, 97, 0.7);
  padding: 0.4rem 0.6rem;
  color: #fff;
  bottom: 7rem;
  cursor: pointer;
  right: 8rem;
}

.leaf-description.unfolded {
  opacity: 0;
  transform: translateY(0) !important;
}

.leaf-description.l-4 {
  transition: 0.24s linear;
  transform: translateY(-24rem);
}

.leaf-description.l-3 {
  transition: 0.18s linear;
  transform: translateY(-18rem);
}

.leaf-description.l-2 {
  transition: 0.12s linear;
  transform: translateY(-12rem);
}

.leaf-description.l-1 {
  transition: 0.06s linear;
  transform: translateY(-6rem);
}

@media (max-width: 767px) {
  .control-leaf {
    bottom: 4rem;
    width: 3rem;
    right: 2rem;
  }

  .expanded-leaf {
    bottom: 4rem;
    right: 2rem;
    width: 3rem;
  }

  .expanded-leaf.l-1 {
    transition: 0.06s linear;
    transform: translateY(-5rem) rotate(30deg);
  }

  .expanded-leaf.l-2 {
    transition: 0.12s linear;
    transform: translateY(-10rem) rotate(30deg);
  }

  .expanded-leaf.l-3 {
    transition: 0.18s linear;
    transform: translateY(-15rem) rotate(30deg);
  }

  .expanded-leaf.l-4 {
    transition: 0.24s linear;
    transform: translateY(-20rem) rotate(30deg);
  }

  .leaf-content {
    bottom: 2rem;
  }

  .leaf-content.l-4 {
    bottom: 4.71rem;
    width: 1.45rem;
    right: 2.25rem;
    transform: translateY(-20rem) rotate(30deg);
  }

  .leaf-content.l-3 {
    bottom: 4.71rem;
    width: 1.75rem;
    right: 2.16rem;
    transform: translateY(-15rem) rotate(30deg);
  }

  .leaf-content.l-2 {
    bottom: 4.83rem;
    width: 1.79rem;
    right: 2.13rem;
    transform: translateY(-10rem) rotate(30deg);
  }

  .leaf-content.l-1 {
    bottom: 4.73rem;
    width: 1.79rem;
    right: 2.13rem;
    transform: translateY(-5rem) rotate(30deg);
  }

.leaf-description {
    font-size: 0.2em;
    border-radius: 2px;
    padding: 0.1rem 0.2rem;
    bottom: 2.9rem;
    right: 0.9rem;
  background: rgba(97, 97, 97, 0.56);

}

  .leaf-description.unfolded {
    opacity: 0;
    transform: translateY(0) !important;
  }

  .leaf-description.l-4 {
    transition: 0.24s linear;
    transform: translateY(-20rem);
  }

  .leaf-description.l-3 {
    transition: 0.18s linear;
    transform: translateY(-15rem);
  }

  .leaf-description.l-2 {
    transition: 0.12s linear;
    transform: translateY(-10rem);
  }

  .leaf-description.l-1 {
    transition: 0.06s linear;
    transform: translateY(-5rem);
  }
}
</style>
