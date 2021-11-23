<template>
  <div class="footer">
    <a href="javascript:;" class="contributors">关于及贡献人员</a>
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
export default {};
</script>

<style scoped>
.contributors {
  font-weight: bold;
  text-decoration: none;
  color: #000;
}

.taffy-redir,
.taffy-redir:hover {
  font-weight: bold;
  text-decoration: none;
  color: var(--bs-primary);
}
.footer {
  padding-top: 0.5rem;
  z-index: 0.5;
  font-size: 1rem;
  height: 6rem;
  bottom: 0;
  text-align: center;
  position: fixed;
  width: 100%;
  background-color: var(--bs-secondary);
}
</style>