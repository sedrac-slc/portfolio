<script setup lang="ts">
import LeftSidebar from './components/LeftSidebar.vue';
import RightSidebar from './components/RightSidebar.vue';
import { SidebarProvider } from './components/ui/sidebar';
</script>

<template>
  <!-- :style="{'--sidebar-width': '350px',}" -->
  <SidebarProvider class="dark:bg-gray-900" :style="{ '--sidebar-width': '355px', }">
    <LeftSidebar/>
    <SidebarInset class="p-3 md:p-6 w-full bg-gray-200 dark:bg-slate-800">

    </SidebarInset>
    <RightSidebar />
  </SidebarProvider>
</template>
