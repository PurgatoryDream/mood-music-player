<script setup lang="ts">
</script>

<template>
  <div class="playButtonContainer">
    <button type="button">▶ START PLAYING</button>
  </div>
</template>

<style scoped>
.playButtonContainer {
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
}

button {
  height: 100%;
  width: 20%;
  background-color: #2add51;
  border: none;
  border-radius: 0 0 50% 50%;

  font-size: 12pt;
  color: #ffffff;
}

button:hover {
  background-color: #21ae3f;
  transition: 0.5s;
  cursor: pointer;
}
</style>
