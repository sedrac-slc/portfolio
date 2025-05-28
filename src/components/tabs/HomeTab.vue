<script setup lang="ts">
import SocialMedia from '@/components/SocialMedia.vue';
import TextProgress from '@/components/TextProgress.vue';
import TextEnterprise from '@/components/TextEnterprise.vue';
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
import { Base64Img } from '@/utils/Base64Img';
import ContactVue from '../ContactVue.vue';
</script>
<template>
  <section class="flex flex-col md:flex-row items-center w-full gap-2 md:gap-10">
    <div class="mt-4 md:mt-0 md:w-3/5 rounded-2xl p-6 pt-0 flex flex-col gap-2 items-center justify-center">
      <div class="text-2xl md:text-4xl font-bold text-center">
        Sedrac Lucas Calupeteca
      </div>
      <div class="w-full mt-3 md:mt-6 text-lg md:indent-10 md:text-center">
        {{ $t('homeTab.describe') }}
      </div>
      <div class="flex gap-2 md:gap-5 lg:gap-10 flex-wrap justify-center mt-3">
        <ContactVue :text="$t('homeTab.phone')" value="+244936269780" class="bg-blue-300" />
        <ContactVue :text="$t('homeTab.email')" value="slcsedrac@gmail" class="bg-red-300" />
        <ContactVue :text="$t('homeTab.whatsapp')" value="+244936269780" class="bg-green-300"/>
      </div>
      <div class="mt-4 md:mt-10">
          <SocialMedia />
      </div>
    </div>
    <div>
      <DotLottieVue class="md:w-[500px] md:h-[500px]" autoplay loop src="/developer.lottie" />
    </div>
  </section>

  <section class="flex flex-col md:flex-row w-full gap-5 md:gap-10">
    <div class="bg-white dark:bg-slate-700 rounded-xl p-3 w-full md:w-4/12">
      <div class="mb-5 font-semibold text-gray-500 dark:text-white text-lg">{{ $t('homeTab.programmingLanguages') }}</div>
      <div class="space-y-3">
        <TextProgress text="PHP" :percetage="90" class-indicator="bg-blue-300" :img="Base64Img.PHP" />
        <TextProgress text="Javascript" :percetage="85" class-indicator="bg-blue-300" :img="Base64Img.JAVASCRIPT" />
        <TextProgress text="Dart" :percetage="80" class-indicator="bg-blue-300" :img="Base64Img.DART" />
        <TextProgress text="Java" :percetage="70" class-indicator="bg-blue-300" :img="Base64Img.JAVA" />
        <TextProgress text="Kotlin" :percetage="40" class-indicator="bg-blue-300" :img="Base64Img.KOTLIN" />
        <TextProgress text="Python" :percetage="20" class-indicator="bg-blue-300" :img="Base64Img.PYTHON" />
      </div>
    </div>
    <div class="bg-white dark:bg-slate-700 rounded-xl p-3 w-full md:w-4/12">
      <div class="mb-5 font-semibold text-gray-500 dark:text-white text-lg">Frameworks</div>
      <div class="space-y-3">
        <TextProgress text="Laravel" :percetage="95" class-indicator="bg-green-300" :img="Base64Img.LARAVEL" />
        <TextProgress text="Flutter" :percetage="90" class-indicator="bg-green-300" :img="Base64Img.FLUTTER" />
        <TextProgress text="Spring boot" :percetage="80" class-indicator="bg-green-300" :img="Base64Img.SPRING_BOOT" />
        <TextProgress text="Next.js" :percetage="73" class-indicator="bg-green-300" :img="Base64Img.NEXT" />
        <TextProgress text="Nuxt.js" :percetage="70" class-indicator="bg-green-300" :img="Base64Img.NUXT" />
        <TextProgress text="React Native" :percetage="60" class-indicator="bg-green-300"
          :img="Base64Img.REACT_NATIVE" />
        <TextProgress text="Django" :percetage="50" class-indicator="bg-green-300" :img="Base64Img.DJANGO" />
      </div>
    </div>
    <div class="bg-white dark:bg-slate-700 rounded-xl p-3 w-full md:w-4/12">
      <div class="mb-5 font-semibold text-gray-500 dark:text-white text-lg">{{ $t('homeTab.workExperience') }}</div>
      <TextEnterprise :text="$t('homeTab.rectorateUkb')" :role="$t('homeTab.traineeIt')" :desc="$t('homeTab.months6')" />
      <TextEnterprise :text="$t('homeTab.queirosSaldanhaGroup')" :role="$t('homeTab.softwareDeveloperPermanent')" :desc="$t('homeTab.years2')" />
      <TextEnterprise text="Luzkabir" :role="$t('homeTab.softwareDeveloperTrainee')" :desc="$t('homeTab.months6')" />
      <TextEnterprise text="Bitkabir" :role="$t('homeTab.softwareDeveloperPermanent')" :desc="$t('homeTab.year1')" />
    </div>
  </section>
</template>