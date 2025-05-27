<script setup lang="ts">
import LeftSidebar from './components/LeftSidebar.vue';
import SelectThema from './components/SelectThema.vue';
import AcademicTab from './components/tabs/AcademicTab.vue';
import CareerTab from './components/tabs/CareerTab.vue';
import HomeTab from './components/tabs/HomeTab.vue';
import ProjectTab from './components/tabs/ProjectTab.vue';
import { SidebarProvider } from './components/ui/sidebar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
</script>

<template>
  <!-- :style="{'--sidebar-width': '350px',}" -->
  <nav class="absolute right-2 top-3 p-2">
    <SelectThema />
  </nav>
  <SidebarProvider class="dark:bg-gray-900" :style="{ '--sidebar-width': '355px', }">
    <LeftSidebar />
    <SidebarInset class="p-3 md:p-6 w-full bg-gray-200 dark:bg-slate-800">
      <Tabs default-value="home">
        <TabsList class="space-x-2">
          <TabsTrigger value="home">Apresentação</TabsTrigger>
          <TabsTrigger value="academic">Formações</TabsTrigger>          
          <TabsTrigger value="career">Carreira</TabsTrigger>
          <TabsTrigger value="project">Projectos</TabsTrigger>
        </TabsList>
        <TabsContent value="home">
          <HomeTab />
        </TabsContent>
        <TabsContent value="academic">
          <AcademicTab />
        </TabsContent>          
        <TabsContent value="career">
          <CareerTab />
        </TabsContent>
        <TabsContent value="project">
          <ProjectTab />
        </TabsContent>        
      </Tabs>
    </SidebarInset>
  </SidebarProvider>
</template>
