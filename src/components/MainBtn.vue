<template>
  <div>
    <TaffyBtnGroup
      v-if="width >= 768"
      id="btn-group"
      :btns="btnOverview[activeId]"
      :playUrlList="playUrlList"
      :isPaused="paused"
      @play="play"
    />

    <TaffyBtnGroups
      v-if="width < 768"
      id="btn-group"
      :overView="btnOverview"
      :playUrlList="playUrlList"
      :isPaused="paused"
      @play="play"
    />


    <Widgets
      @pause="pause"
      @continuePlay="continuePlay"
      @playRandom="playRandom"
      @setMode="setMode"
    />
  </div>
</template>

<script>
import TaffyBtnGroup from "./TaffyBtnGroup.vue";
import Widgets from "./Widgets.vue";
import TaffyBtnGroups from "./TaffyBtnGroups.vue";
import { useWindowSize } from "@vueuse/core";

export default {
  name: "Main",
  components: {
    TaffyBtnGroup,
    TaffyBtnGroups,
    Widgets,
  },
  
  setup() {
    const { width, height } = useWindowSize();
    return { width, height };
  },

  data: () => {
    return {
      init: false,
      loop: false,
      random: false,
      overlap: false,
      paused: false,
      playList: [],
      soundList: [],
      playUrlList: [],
    };
  },

  props: {
    btnOverview: Object,
    activeId: Number,
    windowWidth: Number,
    windowHeight: Number,
  },

  methods: {
    play: function (url) {
      if (!this.init) {
        this.init = true;
        this.btnOverview.forEach((btnGroup) => {
          btnGroup.button_list.forEach((btn) => {
            this.soundList.push(btn.voice_url);
          });
        });
      }

      if (!this.overlap) {
        this.playList.forEach((audio) => {
          audio.pause();
        });
        this.playList = [];
      }
      let audio = new Audio(url);
      audio.player = this;
      audio.onended = audioEnd;
      audio.loop = this.loop;
      audio.play();

      audio.url = url;
      audio.onplaying = ()=>{onAddUrl(this, audio)};
    },

    pause: function () {
      this.playList.forEach((audio) => {
        audio.pause();
      });
      this.paused = true;
    },

    continuePlay: function () {
      this.playList.forEach((audio) => {
        audio.play();
      });
      this.paused = false;
    },

    setMode: function (mode, overlap) {
      if (mode === "loop") {
        this.loop = true;
        this.playList.forEach((sound) => {
          sound.loop = true;
        });
      } else {
        this.loop = false;
        this.playList.forEach((sound) => {
          sound.loop = false;
        });
      }

      this.overlap = overlap;
      this.random = mode === "random";
    },

    remove: function (audio) {
      let newPlayList = [];
      this.playList.forEach((sound) => {
        if (sound === audio) {
          sound.pause();
        } else newPlayList.push(sound);
      });
      this.playList = newPlayList;
      generatePlayUrlList(this);
    },

    playRandom: function () {
      let idx = randInt(0, this.soundList.length - 1);
      this.play(this.soundList[idx]);
      generatePlayUrlList(this);
    },
  },
};

function audioEnd() {
  if (this.player.playList.length === 1 && this.player.random)
    this.player.playRandom();
  if (this.ended) this.player.remove(this);
}

function randInt(l, h) {
  return Math.floor(Math.random() * (h - l + 1)) + l;
}

function onAddUrl(comp, audio) {
  console.log("onAddUrl");
  comp.playList.push(audio);
  generatePlayUrlList(comp);
}

function generatePlayUrlList(comp) {
  comp.playUrlList = [];
  for (let i = 0; i < comp.playList.length; i++) {
    comp.playUrlList.push(comp.playList[i].url);
  }
}
</script>

<style scoped>
.btn-group {
  margin: 1.5rem 8rem 10rem 2.8rem;
}

@media (max-width: 767px) {
  #btn-group {
    margin: 1rem 0.5rem 5rem 0.5rem;
  }
}
</style>