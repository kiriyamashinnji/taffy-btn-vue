<template>
  <div class="audit-btns">
    <div v-for="voice in audits" :key="voice">
      <div class="audit-voice" @click="()=>play(voice.url)">
        <div>{{ voice.name }}</div>
        <div>{{ voice.category }}</div>
        <div>{{ voice.length }}s</div>
        <div>
          <div
            class="audit-icon download"
            @click="() => download(`{${voice.url}, ${voice.name}.mp3}`)"
          ></div>
          <div class="audit-icon accept"></div>
          <div class="audit-icon reject"></div>
        </div>
      </div>
      <div class="author">上传者: {{ voice.author }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      audits: [
        {
          name: "name",
          length: 2.33333333,
          category: "category",
          url: "http://110.40.128.2/resources/voices/05/6df7d039afa52e4be6e1249e31c0b9.mp3",
          author: "author",
        },
      ],
    };
  },

  methods: {
    play(url){
      let audio = new Audio(url);
      audio.play();
    }
  },
};
</script>

<style scoped>
.audit-btns {
  margin: 1.5rem 4rem 10rem 2.8rem;
}

.audit-voice {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-color: var(--color-primary);
  border-radius: 3rem;
  padding: 0.5rem 1rem 0.5rem 2rem;
  margin-bottom: 0.5rem;
  align-items: center;
  font-size: 1.3rem;
  text-align: left;
  color: var(--color-bg);
  box-shadow: 1px 1.3px 5.2px #fd507e71;
  cursor: pointer;
}

.audit-icon {
  margin-right: 0.7rem;
  float: right;
  width: 1.7rem;
  height: 1.5rem;
  background-color: var(--color-bg);
}

.audit-icon.download {
  mask: url(../assets/download.svg);
  mask-size: cover;
}

.audit-icon.accept {
  height: 1.7rem;
  mask: url(../assets/accept.svg);
  mask-size: cover;
}

.audit-icon.reject {
  height: 1.7rem;
  mask: url(../assets/reject.svg);
  mask-size: cover;
}

.author {
  font-size: 0.8rem;
  text-align: right;
  margin-right: 1rem;
}
</style>