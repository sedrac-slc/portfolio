<template>
  <div class="locale-changer">
    <select class="border rounded-2xl p-1.5 border-white text-white" v-model="$i18n.locale">
      <option class="dark:bg-slate-400"  v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select>
  </div>
</template>