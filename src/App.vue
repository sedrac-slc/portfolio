<script setup lang="ts">
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
import LeftSidebar from './components/LeftSidebar.vue';
import SelectThema from './components/SelectThema.vue';
import { SidebarProvider } from './components/ui/sidebar';
import SocialMedia from './components/SocialMedia.vue';
import TextProgress from './components/TextProgress.vue';
import TextEnterprise from './components/TextEnterprise.vue';
</script>

<template>
  <!-- :style="{'--sidebar-width': '350px',}" -->
  <SidebarProvider class="dark:bg-gray-900" :style="{ '--sidebar-width': '355px', }">
    <LeftSidebar />
    <SidebarInset class="p-3 md:p-6 w-full bg-gray-200 dark:bg-slate-800">
      <nav>
        <SelectThema />
      </nav>
      <section class="flex flex-col md:flex-row items-center w-full gap-2 md:gap-10">
        <div class="w-3/5 rounded-2xl p-6 pt-0 flex flex-col gap-2 items-center justify-center">
          <div class="text-4xl font-bold">
            Sedrac Lucas Calupeteca
          </div>
          <div class="mt-3 md:mt-6 text-lg md:indent-10 text-center">
            Sou desenvolvedor fullstack com mais de seis anos de experiência em ambientes corporativos e projetos como
            freelancer, criando soluções para web, mobile e desktop com diversas linguagens e frameworks.
          </div>
          <SocialMedia />
        </div>
        <div>
          <DotLottieVue style="height: 500px; width: 500px" autoplay loop src="/developer.lottie" />
        </div>
      </section>

      <section class="flex flex-col md:flex-row w-full gap-2 md:gap-10">
        <div class="bg-white rounded-xl p-3 w-4/12">
          <div class="mb-5">Linguagens de programação</div>
          <TextProgress text="Java" :percetage="95" class-indicator="bg-blue-300" />
          <TextProgress text="Kotlin" :percetage="90" class-indicator="bg-blue-300" />
          <TextProgress text="PHP" :percetage="90" class-indicator="bg-blue-300" />
          <TextProgress text="Javascript" :percetage="80" class-indicator="bg-blue-300" />
          <TextProgress text="Dart" :percetage="85" class-indicator="bg-blue-300" />
          <TextProgress text="Python" :percetage="50" class-indicator="bg-blue-300" />
        </div>
        <div class="bg-white rounded-xl p-3 w-4/12">
          <div class="mb-5">Frameworks</div>
          <TextProgress text="Spring boot" :percetage="90" class-indicator="bg-blue-300" />
          <TextProgress text="Laravel" :percetage="85" class-indicator="bg-blue-300" />
          <TextProgress text="Flutter" :percetage="85" class-indicator="bg-blue-300" />
          <TextProgress text="React Native" :percetage="70" class-indicator="bg-blue-300" />
          <TextProgress text="Nuxt.js" :percetage="84" class-indicator="bg-blue-300" />
          <TextProgress text="Next.js" :percetage="78" class-indicator="bg-blue-300" />
          <TextProgress text="Django" :percetage="50" class-indicator="bg-blue-300" />
        </div>
        <div class="bg-white rounded-xl p-3 w-4/12">
          <div class="mb-5">Experiência de trabalho</div>
          <TextEnterprise text="Reitoria da Universidade Katyvala Bwila" :period="6" role="Técnico de TI (Estagio)"desc="meses" />
          <TextEnterprise text="Grupo Queiros Saldanha" :period="2" role="Desenvolvedor Software (Efectivo)" desc="anos" />
          <TextEnterprise text="Luzkabir" :period="6" role="Desenvolvedor Software (Estagio)" desc="meses" />
          <TextEnterprise text="Bitkabir" :period="1" role="Desenvolvedor Software (Efectivo)" desc="ano" />
        </div>
      </section>

    </SidebarInset>
  </SidebarProvider>
</template>
