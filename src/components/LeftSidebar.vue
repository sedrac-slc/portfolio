<script setup lang="ts">

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, type SidebarProps, } from './ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import Linkedin from '@/assets/icons8-linkedin-logo.svg';
import Whatsapp from '@/assets/icons8-whatsapp-logo.svg';
import Github from '@/assets/icons8-github-logo.svg';
import Gmail from '@/assets/icons8-gmail-logo.svg';
import TextProgress from './TextProgress.vue';
import TitleBar from './TitleBar.vue';
import Separator from './ui/separator/Separator.vue';
import TextEnterprise from './TextEnterprise.vue';

const props = withDefaults(defineProps<SidebarProps>(), { variant: 'inset', })

const socials = [
  { name: "Gmail", icon: Gmail },
  { name: "Github", icon: Github },
  { name: "Whatsapp", icon: Whatsapp },
  { name: "Linkedlin", icon: Linkedin },
];

</script>

<template>
  <Sidebar v-bind="props" class="border-r dark:border-white dark:bg-gray-900">
    <SidebarHeader class="md:px-2 dark:bg-gray-900">
      <section class="flex flex-col items-center">
        <Avatar class="h-15 w-15 md:h-20 md:w-20 border rounded-full">
          <AvatarImage src="https://github.com/unovue.png" alt="@unovue" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div class="mt-2 font-semibold text-lg">Sedrac Lucas Calupeteca</div>
        <div class="mt-1 text-gray-600 dark:text-white">Desenvolvedor de software</div>
        <div class="flex gap-3 md:gap-6 mt-1 dark:bg-slate-700 dark:rounded-2xl dark:px-2 dark:py-1 dark:mt-2">
          <div v-for="item in socials" :key="item.name" class="flex flex-col items-center justify-center space-y-1">
            <img class="h-10 w-10" :src="item.icon" />
          </div>
        </div>
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
      <TextProgress text="Java" :percetage="95" class-indicator="bg-red-300" />
      <TextProgress text="Kotlin" :percetage="90" class-indicator="bg-purple-300" />
      <TextProgress text="PHP" :percetage="90" class-indicator="bg-slate-300" />
      <TextProgress text="Javascript" :percetage="80" class-indicator="bg-orange-300" />
      <TextProgress text="Dart" :percetage="85" class-indicator="bg-blue-300" />
      <TextProgress text="Python" :percetage="50" class-indicator="bg-yellow-300" />
      <Separator class="my-3 dark:bg-white" />
      <TitleBar text="Frameworks" />
      <TextProgress text="Spring boot" :percetage="90" class-indicator="bg-green-300" />
      <TextProgress text="Laravel" :percetage="85" class-indicator="bg-red-300" />
      <TextProgress text="Flutter" :percetage="85" class-indicator="bg-blue-300" />
      <TextProgress text="React Native" :percetage="70" class-indicator="bg-indigo-300" />
      <TextProgress text="Nuxt.js" :percetage="84" class-indicator="bg-green-300" />
      <TextProgress text="Next.js" :percetage="78" class-indicator="bg-slate-300" />
      <TextProgress text="Django" :percetage="50" class-indicator="bg-green-300" />
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
