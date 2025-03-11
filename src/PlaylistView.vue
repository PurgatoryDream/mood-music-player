<script setup lang="ts">
import PlaylistPreview from "./components/playlistedit/PlaylistPreview.vue";
import SongList from "./components/playlistedit/SongList.vue";
</script>

<template>
  <main class="main">
    <div class="playlist-preview">
      <PlaylistPreview />
    </div>
    <div class="song-list">
      <SongList />
    </div>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  width: 100%;
  height: 100%;
}

.playlist-preview {
  width: 40%;
  height: 100%;
}

.song-list {
  width: 60%;
  height: 100%;
}
</style>

