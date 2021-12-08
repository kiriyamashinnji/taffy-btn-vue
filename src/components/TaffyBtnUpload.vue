<template>
  <div class="btn-warper">
    <div class="tf-btn" ref="el">
      <div class="tf-btn-content">
        <FileUpload
          class="btn btn-primary"
          post-action="/upload/post"
          extensions="mp3,wav"
          accept="audio/mpeg,audio/wav"
          :multiple="false"
          :size="1024 * 1024 * 10"
          v-model="file"
          @input-filter="inputFilter"
          @input-file="inputFile"
          ref="upload"
        >
          上传声音
        </FileUpload>
      </div>
      <img src="../assets/plus.svg" class="tf-btn-icon" />
    </div>

    <transition name="modal">
      <UploadPage
        v-if="isUploaded"
        :category_name="category_name"
        :voiceName="voiceName"
        @submit="uploadVoice"
        @cancel="cancelSubmit"
      />
    </transition>
  </div>
</template>

<script>
import { ref } from "vue";
import FileUpload from "vue-upload-component";
import UploadPage from "./UploadPage.vue";
import axios from "axios";

export default {
  name: "TaffyBtnUpload",

  components: {
    FileUpload,
    UploadPage,
  },

  setup(props, context) {
    const upload = ref(null);

    const file = ref([]);

    function inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
          return prevent();
        }

        if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
          return prevent();
        }
      }
    }

    function inputFile(newFile, oldFile) {}

    return {
      file,
      upload,
      inputFilter,
      inputFile,
    };
  },

  props: {
    category_name: String,
  },

  computed: {
    isUploaded() {
      return this.file.length > 0;
    },
    voiceName() {
      return this.file[0].name.replace(/\.[^/.]+$/, "");
    },
  },

  methods: {
    uploadVoice(args) {
      axios({
        method: "post",
        url: "http://110.40.128.2/api/btn/upload",
        data: {
          voice_name: args["voiceName"],
          category_id: this.categoryId,
          file: this.file[0],
          author: args["author"],
        }
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          alert(err);
        });
    },

    cancelSubmit() {
      this.file = [];
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
  height: 1.8rem;
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

.btn-warper {
  position: relative;
  display: inline-block;
  vertical-align: bottom;
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
    height: 1.3rem;
  }
}
</style>