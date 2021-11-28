<template>
  <div class="footer">
    <a href="javascript:;" @click="showContributors" class="contributors">关于及贡献人员</a>
    <p>
      本站为永雏塔菲粉丝作品，与
      <a
        href="https://space.bilibili.com/1265680561/"
        target="_blank"
        class="taffy-redir"
        >@永雏塔菲</a
      >  本人没有关联！
    </p>
    <p>Taffy Button Production Committee 2021-2021.</p>
  </div>
</template>

<script>
export default {
  methods: {
    showContributors() {
      this.$emit("showContributors");
    }
  }
};
</script>

<style scoped>
.contributors {
  font-weight: bold;
  text-decoration: none;
  color: #002952;
}

.taffy-redir,
.taffy-redir:hover {
  font-weight: bold;
  text-decoration: none;
  color: var(--bs-primary);
}
.footer {
  padding: 0.7rem 0;
  z-index: 0.5;
  font-size: 1rem;
  height: 6rem;
  bottom: 0;
  text-align: center;
  position: fixed;
  width: 100%;
  background-color: var(--bs-secondary);
}

@media (max-width: 767px) {
  .footer {
    visibility: hidden;
  }
}
</style>