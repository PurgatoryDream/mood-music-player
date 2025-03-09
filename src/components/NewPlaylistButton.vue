<script setup lang="ts">
const emit = defineEmits(["submit"])
function submitPlaylist() {
  let playlist = { "id": 1, "name": "Lady Gaga"};
  emit("submit", playlist);
}
</script>

<template>
  <div class="playlist-container">
    <div class="playlist-viewer" @click="submitPlaylist">
      <span class="playlist-name">New playlist...</span>
    </div>
  </div>
</template>

<style scoped>
.playlist-container {
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 16vw;
  height: 16vw;
}

.playlist-viewer {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80%;
  height: 80%;
  margin: 10% 10%;
  border: dotted black;
  border-radius: 25%;
}

.playlist-viewer:hover {
  background-color: #a0a0a0;
  cursor: pointer;
}

.playlist-name {
}
</style>
