<template>
  <div id="myModal" class="modal" @click="onClick">
    <!-- Modal content -->
    <div
      class="modal-content">
      <h2 style="margin-top: 0rem">关于</h2>
      <div>
        <h3>后端</h3>
        AceRetro
        <h3>前端</h3>
        永雏史莱姆懒狗
        <br />
        AceRetro
        <br />
        <h3>设计</h3>
        永雏史莱姆懒狗
        <br />
        壹色玻鲤
        <br />
        永雏塔菲装扮表情
        <br />
        <br />
        <h3>声音来源</h3>
        永雏塔菲
        <br />
        <h3>声音提供</h3>
        只凝视你的时候、壹色玻璃、
        <br />
        永雏史莱姆懒狗
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClick(e) {
      if (e.target.className === "modal") {
        console.log("clicked");
        this.onClose();
      }
    },
    onClose() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal {
  /* display: none; Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 3; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0, 0, 0, 0.2); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: var(--bs-body-bg);
  margin: 10rem auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid rgb(255, 225, 225);
  width: 25rem; /* Could be more or less, depending on screen size */
  border-radius: 0.5rem;
}

.header {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>