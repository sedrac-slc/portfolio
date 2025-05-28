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
  <nav class="bg-green-300 dark:bg-slate-700 md:bg-transparent md:absolute md:right-2 top-3 p-2">
    <SelectThema />
  </nav>
  <SidebarProvider class="dark:bg-gray-900" :style="{ '--sidebar-width': '355px', }">
    <LeftSidebar />
    <SidebarInset class="p-3 md:p-6 w-full bg-gray-200 dark:bg-slate-800">
      <Tabs default-value="home">
        <TabsList class="space-x-2 flex-wrap">
          <TabsTrigger value="home">Apresentação</TabsTrigger>
          <TabsTrigger value="academic">Formações</TabsTrigger>          
          <TabsTrigger value="career">Carreira</TabsTrigger>
          <TabsTrigger value="project">Projectos</TabsTrigger>
        </TabsList>
        <TabsContent value="home" class="mt-5 md:mt-0 mx-0 px-0">
          <HomeTab />
        </TabsContent>
        <TabsContent value="academic" class="mt-5 md:mt-0 mx-0 px-0">
          <AcademicTab />
        </TabsContent>          
        <TabsContent value="career" class="mt-5 md:mt-0 mx-0 px-0">
          <CareerTab />
        </TabsContent>
        <TabsContent value="project" class="mt-5 md:mt-0 mx-0 px-0">
          <ProjectTab />
        </TabsContent>        
      </Tabs>
    </SidebarInset>
  </SidebarProvider>
</template>
