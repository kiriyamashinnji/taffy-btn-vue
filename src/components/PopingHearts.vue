<template>
  <div class="container">
    <svg class="heart heart-pop one" viewBox="0 0 32 29.6">
      <path
        d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
      /></svg
    ><svg class="heart heart-pop three" viewBox="0 0 32 29.6">
      <path
        d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
      /></svg
    ><svg class="heart heart-pop five" viewBox="0 0 32 29.6">
      <path
        d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
      /></svg
    ><svg class="heart heart-pop six" viewBox="0 0 32 29.6">
      <path
        d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
      /></svg
    ><svg class="heart heart-pop seven" viewBox="0 0 32 29.6">
      <path
        d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
      /></svg
    ><svg class="heart heart-pop nine" viewBox="0 0 32 29.6">
      <path
        d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "PopingHearts",
};
</script>


<style scoped>
.container {
  position: relative;
  background: transparent;
  border-radius: 50%;
  padding: 10px 10px 10px 10px;
  border: 0;
}

.heart {
  width: 20px;
  fill: var(--color-primary);
  transition: fill 0.5s, transform 0.5s;
  pointer-events: none;
  z-index: 3;
}

.heart-pop {
  position: absolute;
  opacity: 0;
  left: 0;
  animation: pop 1s ease forwards;
  animation-direction: normal;
}
.one {
  left: 1%;
  transform: rotate(-10deg);
  animation-delay: 0.45;
}
.two {
  left: 15%;
  transform: rotate(8deg);
  animation-delay: 0.25s;
}
.three {
  left: 30%;
  transform: rotate(-5deg);
  animation-delay: 0;
}
.four {
  left: 50%;
  transform: rotate(-8deg);
  animation-delay: 0.3s;
}
.five {
  left: 60%;
  transform: rotate(-10deg);
  animation-delay: 0.9s;
}
.six {
  left: 70%;
  transform: rotate(-8deg);
  animation-delay: 0.2;
}
.seven {
  left: 85%;
  transform: rotate(6deg);
  animation-delay: 0.35s;
}
.eight {
  left: 90%;
  transform: rotate(-4deg);
  animation-delay: 0.5s;
}
.nine {
  left: 95%;
  transform: rotate(108deg);
  animation-delay: 0.2s;
}

@keyframes pop {
  0% {
    left: calc(50% - 7px);
    top: 10px;
  }
  20% {
    opacity: 1;
  }
  80% {
    top: -20px;
  }
  100% {
    opacity: 0;
  }
}
</style>