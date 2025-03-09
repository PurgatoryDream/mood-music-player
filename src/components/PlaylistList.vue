<script setup lang="ts">
import {ref, reactive } from 'vue';
import PlaylistListElem from './PlaylistListElem.vue';
import NewPlaylistButton from './NewPlaylistButton.vue';
  
const playlists = ref([ {"id": 1, "name": "Lady Gaga"} ]);

function createNewPlaylist(newPlaylist) {
  playlists.value.push(newPlaylist)
}
</script>

<template>
  <div class="playlist-list">
    <PlaylistListElem v-for="pl in playlists" :key="pl.id">
      {{ pl.name }}
    </PlaylistListElem>
    <NewPlaylistButton @submit="createNewPlaylist" />
  </div>
</template>

<style scoped>
.playlist-list {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
}
</style>
