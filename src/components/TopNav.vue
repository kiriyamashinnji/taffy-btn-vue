<template>
  <div>
    <div class="top-nav">
      <a href="http://space.bilibili.com/1265680561/" class="taffy-dir">
        @永雏塔菲
      </a>

      <div class="nav-custom">
        <img src="../assets/volume.png" class="nav-settings" style="height: 2.7rem" />
        <img src="../assets/language.png" class="nav-settings" style="height: 3rem" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.top-nav {
  display: flex;
  align-items: center;
  height: 5rem;
  justify-content: space-between;
}

.nav-settings{
    margin-right: 2rem;
}

.taffy-dir {
  color: var(--bs-primary);
  text-decoration: none;
  font-size: 1.75rem;
  background: #ffe2df;
  margin-left: 2.5rem;
  text-align: center;
  display: flex;
  padding: 0.3rem 0.8rem;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  box-shadow: 1px 1px 6px #fd507e52;
}
</style>