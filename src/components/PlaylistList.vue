<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue'; 
import PlaylistListElem from './PlaylistListElem.vue';
import NewPlaylistButton from './NewPlaylistButton.vue';
  
interface Playlist {
  id: number;
  name: string;
};
const playlists: Ref<Playlist[]> = ref([]);

function createNewPlaylist(newPlaylist: Playlist) {
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
