<script setup lang="ts">

const props = defineProps({
    text: String,
    period: Number,
    desc: String,
    role: String,
});
</script>
<template>
    <div class="flex flex-col rounded-md p-2 ">
        <div class="flex justify-between">
            <div class="flex gap-1 items-center">
                <div>{{ props.text }}</div>
            </div>
            <div class="font-semibold flex gap-1">
                <div>{{ props.period }}</div>
                <div>{{ props.desc }}</div>
            </div>
        </div>
        <div class="flex gap-1 items-center">
            <div class="text-gray-500">{{ props.role }}</div>
        </div>        
    </div>
</template>