<script setup lang="ts">

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, type SidebarProps, } from './ui/sidebar'
import TextProgress from './TextProgress.vue';
import TitleBar from './TitleBar.vue';
import Separator from './ui/separator/Separator.vue';

const props = withDefaults(defineProps<SidebarProps>(), { variant: 'inset', });

</script>

<template>
  <Sidebar v-bind="props" class="border-r dark:border-white dark:bg-gray-900">
    <SidebarHeader class="md:px-2 dark:bg-gray-900">
      <section class="flex flex-col items-center">
        <div class="mt-2 font-semibold text-lg">Portifólio</div>
        <div class="mt-1 text-gray-600 dark:text-white">Sedrac Lucas Calupeteca</div>
      </section>
      <Separator class="my-3 dark:bg-white" />
    </SidebarHeader>
    <SidebarContent class="md:px-2 dark:bg-gray-900">
      <TitleBar text="Descrição" />
      <div class="dark:bg-slate-800 p-2 rounded-md">
        Sou um desenvolvedor de software, trabalho como <strong>fulltack</strong> tanto pelas empresa e trabalho de
        freelancer.
      </div>
      <Separator class="my-3 dark:bg-white" />
      <TitleBar text="Plataforma trabalho" />
      <TextProgress text="Web" :percetage="95" class-indicator="bg-red-300" />
      <TextProgress text="Mobile" :percetage="85" class-indicator="bg-green-300" />
      <TextProgress text="Desktop" :percetage="30" class-indicator="bg-blue-300" />
    </SidebarContent>
    <SidebarFooter>
    </SidebarFooter>
  </Sidebar>
</template>
