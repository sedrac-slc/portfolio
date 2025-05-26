<script setup lang="ts">
import LeftSidebar from './components/LeftSidebar.vue';
import SelectThema from './components/SelectThema.vue';
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';
import { SidebarProvider } from './components/ui/sidebar';
</script>

<template>
  <!-- :style="{'--sidebar-width': '350px',}" -->
  <SidebarProvider class="dark:bg-gray-900" :style="{ '--sidebar-width': '355px', }">
    <LeftSidebar />
    <SidebarInset class="p-3 md:p-6 w-full bg-gray-200 dark:bg-slate-800">
      <nav class="mb-4 md:mb-10">
        <SelectThema/>
      </nav>
      <section class="flex flex-col w-full gap-2 md:gap-10">     
        <div  class="w-full rounded-2xl p-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
          <div class="text-4xl font-bold">Sedrac Lucas Calupeteca</div>
          <div class="mt-3 md:mt-6 text-lg md:indent-10">
            Como um desenvolvedor de software fullstack, possuo uma trajetória sólida e diversificada 
            de mais de seis anos, atuando tanto em ambientes corporativos dinâmicos quanto em projetos 
            desafiadores como freelancer. Essa experiência me proporcionou a habilidade de conceber e 
            entregar uma vasta gama de soluções, utilizando um arsenal variado de linguagens de 
            programação e frameworks, o que me permite dominar o desenvolvimento 
            para múltiplas plataformas, incluindo web, mobile e desktop.            
          </div>
        </div>
      </section>
    </SidebarInset>
  </SidebarProvider>
</template>
