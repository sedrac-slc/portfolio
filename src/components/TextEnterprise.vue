<script setup lang="ts">
import { BriefcaseBusiness, Building2 } from 'lucide-vue-next';

const props = defineProps({
    text: String,
    period: Number,
    desc: String,
    role: String,
});
</script>
<template>
    <div class="flex flex-col gap-2 md:gap-3 border rounded-md p-2 dark:border-white">
        <div class="flex gap-1 items-center">
            <BriefcaseBusiness class="text-blue-400" :size="20" />
            <div>{{ props.role }}</div>
        </div>
        <div class="flex justify-between">
            <div class="flex gap-1 items-center">
                <Building2 class="text-red-400" :size="20" />
                <div>{{ props.text }}</div>
            </div>
            <div class="font-semibold flex gap-1">
                <div>{{ props.period }}</div>
                <div>{{ props.desc }}</div>
            </div>
        </div>
    </div>
</template>