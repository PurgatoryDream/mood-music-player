<script setup lang="ts">
</script>

<template>
  <div class="playlist-preview-form">
    <div class="playlist-preview-icon-container">
      <div class="playlist-preview-icon">
        <span>Test</span>
      </div>
    </div>
    <div class="playlist-preview-form-item">
      <label for="playlist-name">Playlist Name:</label>
      <input type="text" id="playlist-name" name="plname">
    </div>
  </div>
</template>

<style scoped>
.playlist-preview-form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.playlist-preview-icon-container {
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.playlist-preview-icon {
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid black;
  border-radius: 25%;
}

.playlist-preview-form-item {
  height: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
