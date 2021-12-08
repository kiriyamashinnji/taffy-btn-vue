<template>
  <div id="myModal" class="modal" @click="cancel">
    <!-- Modal content -->
    <div class="modal-content">
      <div class="modal-header">上传声音</div>

      <div class="modal-body">
        <div style="margin-right:1rem">

        <label for="category_name" class="form-label">分类</label>
        <div class="form-input" style="background-color: rgba(250, 250, 250, 0.8)">
          {{ category_name }}
        </div>

        <label for="title" class="form-label">标题</label>

        <input
          type="text"
          id="title"
          v-model="title"
          placeholder="请输入标题"
          class="form-input"
        />
        <input
          type="text"
          id="author"
          v-model="author"
          placeholder="您的尊姓大名"
          class="form-input"
        />
        </div>

      </div>

      <div class="modal-footer">
        <button class="form-cancel form-btn" @click="cancel">取消</button>
        <button class="form-submit form-btn" @click="submit">上传</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category_name: String,
    voiceName: String,
  },

  setup(props) {
    const { voiceName } = props;

    return {
      title: voiceName,
    };
  },

  methods: {
    submit() {
      this.$emit("submit", {
        title: this.title,
        author: this.author,
      });
    },
    cancel(e) {
      if (
        e.target.className === "modal" ||
        e.target.className === "form-cancel"
      ) {
        console.log("cancel");
        this.$emit("cancel");
      }
    },
  },

  data() {
    return {
      author: "",
    };
  },
};
</script>

<style scoped>
.modal {
  /* display: none; Hidden by default */
  font-size: 1.5rem;

  position: fixed; /* Stay in place */
  z-index: 3; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0, 0, 0, 0.1); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: var(--color-bg);
  margin: 10rem auto; /* 15% from the top and centered */
  border: 1px solid rgba(0, 0, 0, 0.5);
  width: 30rem; /* Could be more or less, depending on screen size */
  border-radius: 0.5rem;
  background: center / cover  url(../assets/modalback.png);
}

.modal-header {
  padding: 1rem;
  font-weight: bold;
  text-align: left;
  border-bottom: 1px solid #e9ecef;
}

.modal-body {
  padding: 1rem;
  text-align: left;
}

.modal-footer {
  padding: 1rem;
  text-align: right;
  border-top: 1px solid #e9ecef;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.form-label {
  display: block;
  width: 10rem;
  text-align: left;
  margin-bottom: 0.5rem;
}

.form-input {
  position: relative;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  height: 1.5rem;
  border: 1px solid #e9ecef;
  border-radius: 0.25rem;
  padding: 0.5rem;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
}

.form-input:focus {
  outline: none;
  border: 1px solid #acacac;
}

.form-btn {
  font-size: 1.2rem;
  border-radius: 0.25rem;
  padding: 0.7rem 2rem;
  margin-left: 1rem;
  cursor: pointer;
  border: none;
}

.form-submit {
  background-color: var(--color-primary);
  color: var(--color-bg);
}

.form-cancel {
  background-color: var(--color-secondary);
  color: var(--color-primary);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>