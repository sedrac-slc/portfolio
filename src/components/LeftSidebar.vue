<script setup lang="ts">

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, type SidebarProps, } from './ui/sidebar'
import TextProgress from './TextProgress.vue';
import TitleBar from './TitleBar.vue';
import Separator from './ui/separator/Separator.vue';
import TextEnterprise from './TextEnterprise.vue';

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
      <TitleBar text="Linguagens de programação" />
      <TextProgress text="Java" :percetage="95" class-indicator="bg-blue-300" />
      <TextProgress text="Kotlin" :percetage="90" class-indicator="bg-blue-300" />
      <TextProgress text="PHP" :percetage="90" class-indicator="bg-blue-300" />
      <TextProgress text="Javascript" :percetage="80" class-indicator="bg-blue-300" />
      <TextProgress text="Dart" :percetage="85" class-indicator="bg-blue-300" />
      <TextProgress text="Python" :percetage="50" class-indicator="bg-blue-300" />
      <Separator class="my-3 dark:bg-white" />
      <TitleBar text="Frameworks" />
      <TextProgress text="Spring boot" :percetage="90" class-indicator="bg-blue-300" />
      <TextProgress text="Laravel" :percetage="85" class-indicator="bg-blue-300" />
      <TextProgress text="Flutter" :percetage="85" class-indicator="bg-blue-300" />
      <TextProgress text="React Native" :percetage="70" class-indicator="bg-blue-300" />
      <TextProgress text="Nuxt.js" :percetage="84" class-indicator="bg-blue-300" />
      <TextProgress text="Next.js" :percetage="78" class-indicator="bg-blue-300" />
      <TextProgress text="Django" :percetage="50" class-indicator="bg-blue-300" />
      <Separator class="my-3 dark:bg-white" />
      <TitleBar text="Experiência de trabalho" />
      <div class="my-3">
        Esses são os lugares e instituições onde tive a oportunidade de desenvolver e aprimorar minha carreira profissional nesta área.
      </div>
      <div class="space-y-2 md:space-y-4">
        <TextEnterprise text="Reitoria da Universidade Katyvala Bwila" :period="6" role="Técnico de TI (Estagio)" desc="meses" />
        <TextEnterprise text="Grupo Queiros Saldanha" :period="2" role="Desenvolvedor Software (Efectivo)" desc="anos" />
        <TextEnterprise text="Luzkabir" :period="6" role="Desenvolvedor Software (Estagio)" desc="meses" />
        <TextEnterprise text="Bitkabir" :period="1" role="Desenvolvedor Software (Efectivo)" desc="ano" />
      </div>
    </SidebarContent>
    <SidebarFooter>
    </SidebarFooter>
  </Sidebar>
</template>
