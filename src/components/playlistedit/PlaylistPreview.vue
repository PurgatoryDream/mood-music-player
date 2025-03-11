<script setup lang="ts">
</script>

<template>
  <div class="playlist-preview-form">
    <div class="playlist-preview-icon-container">
      <div class="playlist-preview-icon">
        <span>Test</span>
      </div>
    </div>
    <div class="playlist-preview-form-container">
      <div class="playlist-preview-form-item">
        <label for="playlist-name">Playlist Name:</label>
        <input type="text" id="playlist-name" name="plname">
      </div>
      <div class="playlist-preview-form-item">
        <label for="playlist-color">Color:</label>
        <input type="color" id="playlist-color" name="plcolor">
      </div>
      <div class="playlist-preview-form-submit">
        <button type="submit">SAVE!</button>
      </div>
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

  border-right: 1px solid black;
  box-shadow: 1px 1px 2px 4px black;
}

.playlist-preview-icon-container {
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.playlist-preview-icon {
  width: 15vw;
  min-width: 200px;
  height: 15vw;
  min-height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid black;
  box-shadow: 1px 1px 2px black;
  border-radius: 25%;
}

.playlist-preview-form-container {
  width: 90%;
  height: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.playlist-preview-form-item {
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.playlist-preview-form-item label {
  font-size: 16px;
  height: 20%;
}

.playlist-preview-form-item input[type=text] {
  border-radius: 4px;
  padding: 8px 10px;
  width: 100%;
}

.playlist-preview-form-item input[type=color] {
  border-radius: 4px;
  width: 100%;
  height: 20%;
}

.playlist-preview-form-submit {
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: auto;
}

.playlist-preview-form-submit button {
  width: 70%;
  height: 50%;
  font-size: 20px;
}
</style>
