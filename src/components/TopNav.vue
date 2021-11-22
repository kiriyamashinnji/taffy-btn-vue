<template>
  <div>
    <div class="top-nav">
      <a class="taffy-dir" href="http://space.bilibili.com/1265680561/"> </a>
    </div>

    <div class="divider" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.top-nav {
  height: 8rem;
}

.divider {
  width: 97%;
  height: 3px;
  padding: 1px;
  margin: auto;
  background-color: var(--bs-primary);
  border-radius: 3px;
}

.taffy-dir {
  color: var(--bs-primary);
  text-decoration: none;
  font-size: 1.25rem;
  width: 9rem;
  height: 2.5rem;
  background: #ffe2df;
  margin-left: 2.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 1px 1px 6px #fd507e52;
}
</style>