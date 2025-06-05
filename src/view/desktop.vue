<template>
  <div class="desktop">
    <!-- Desktop wallpaper/background -->
    <div class="desktop-background"></div>
    
    <!-- Desktop icons -->
    <rendering-apps />
    
    <!-- Taskbar at bottom -->
    <taskbar />
  </div>
</template>

<script setup lang="ts">
// Import your components with proper casing and paths
import RenderingApps from '../components/RenderingApps.vue'
import Taskbar from '../components/Taskbar.vue'
// If you don't have a taskbar component yet, comment out the import and template usage
</script>

<style scoped>
.desktop {
  width: 100vw;
  height: 100vh;
  background: #008080; /* Windows 95 teal background */
  position: relative;
  overflow: hidden;
}

.desktop-background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  /* You can add a pattern or image here later */
}
</style>