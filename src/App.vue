<script setup lang="ts">
import PlayButton from "./components/PlayButton.vue";
import PlaylistList from "./components/PlaylistList.vue";
</script>

<template>
  <main class="main">
    <div class="ButtonLayer">
      <PlayButton class="PlayButton" />
    </div>
    <div class="PlaylistLayer">
      <PlaylistList />
    </div>
  </main>
</template>

<style>
  /* Global style. */
  .main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .ButtonLayer {
    width: 100%;
    height: 10%;
  }

  .PlayButton {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .PlaylistLayer {
    width: 100%;
    height: 90%;
  }
</style>
