<script setup lang="ts">
</script>

<template>
  <div class="playlist-container">
    <div class="playlist-viewer">
      <span class="playlist-name"><slot>Unnamed.</slot></span>
    </div>
  </div>
</template>

<style scoped>
.playlist-container {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 16vw;
  min-width: 200px;
  height: 16vw;
  min-height: 200px;
}

.playlist-viewer {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80%;
  height: 80%;
  margin: 10% 10%;
  border: solid black;
  border-radius: 25%;
  box-shadow: 2px 2px 4px black;
}
</style>
