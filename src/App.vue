<template>
  <div id="nav">
    <router-view />
  </div>
</template>

<style>
:root {
  --bs-primary: #fd507e;
  --bs-body-bg: #fffffa;
  --bs-btn-hover: #cf2f59;
  --side-padding: 10px;
  --radius-size: 25px;
  --bs-secondary: #ffe2df;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

html {
  background-color: var(--bs-body-bg);
}
</style>
