<template>
  <div id="nav">
    <router-view />
  </div>
</template>

<style>
:root {
  --color-primary: #fd507e;
  --color-bg: #fffffa;
  --color-hover: #cf2f59;
  --side-padding: 10px;
  --radius-size: 25px;
  --color-secondary: #ffe2df;
}

@media (max-width: 767px) {
  :root {
    --color-bg: #fffbf0;
 }
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

html {
  background-color: var(--color-bg);
}
</style>
