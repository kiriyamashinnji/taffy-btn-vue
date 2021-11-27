<template>
  <div>
    <div class="top-nav">
      <div style="display: flex; align-content: center;align-items: center;">
        <div class="title" >雏按钮</div>

        <a href="http://space.bilibili.com/1265680561/" class="taffy-dir">
          @永雏塔菲
        </a>
      </div>

      <div class="nav-custom">
        <img
          src="../assets/volume.png"
          class="nav-settings"
          style="height: 2.7rem"
        />
        <img
          src="../assets/language.png"
          class="nav-settings"
          style="height: 3rem"
        />
      </div>
    </div>
    <div class="divider" />
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

.nav-settings {
  margin-right: 2rem;
}

.taffy-dir {
  color: var(--bs-primary);
  text-decoration: none;
  font-size: 1.75rem;
  background: rgb(255, 240, 240);
  margin-left: 2rem;
  text-align: center;
  display: flex;
  padding: 0.3rem 0.8rem;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  box-shadow: 1px 1px 2px #ffc0d052;
}

.title {
  color: var(--bs-primary);
  text-decoration: none;
  font-size: 3rem;
  margin-left: 2.5rem;
  text-align: center;
  display: flex;
  font-weight: 400;
  letter-spacing: 0.3rem;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  justify-content: center;
}

.divider {
  width: calc(100% - 2 * var(--radius-size));
  height: 3px;
  padding: 1px;
  margin: auto;
  margin-top: 0.5rem;
  background-color: var(--bs-primary);
  border-radius: 3px;
}

</style>