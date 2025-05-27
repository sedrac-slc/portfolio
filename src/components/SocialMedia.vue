<script setup lang="ts">

import Linkedin from '@/assets/icons8-linkedin-logo.svg';
import Whatsapp from '@/assets/icons8-whatsapp-logo.svg';
import Github from '@/assets/icons8-github-logo.svg';
import Gmail from '@/assets/icons8-gmail-logo.svg';

const socials = [
    { name: "Gmail", icon: Gmail },
    { name: "Github", icon: Github },
    { name: "Whatsapp", icon: Whatsapp },
    { name: "Linkedlin", icon: Linkedin },
];
</script>
<template>
    <section class="flex gap-3 md:gap-8 lg:gap-14 mt-1 dark:bg-slate-700 dark:rounded-2xl dark:px-2 dark:py-1 dark:mt-2">
        <div v-for="item in socials" :key="item.name" class="flex flex-col items-center justify-center space-y-1 cursor-pointer">
            <img class="h-10 w-10" :src="item.icon" />
        </div>
    </section>
</template>