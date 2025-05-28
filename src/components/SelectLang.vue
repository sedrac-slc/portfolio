<script setup lang="ts">
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from './ui/button';
</script>
<template>
  <DropdownMenu >
    <DropdownMenuTrigger as-child>
      <Button variant="outline" class="rounded-full dark:border-white">
        <span>{{ $i18n.locale }}</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-20 md:w-[30]">
      <DropdownMenuItem v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale" @click="$i18n.locale = locale">
        {{ locale }}
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>  
</template>