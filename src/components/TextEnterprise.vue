<script setup lang="ts">

const props = defineProps({
    text: String,
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
            <div class="font-semibold">{{ props.desc }} </div>
        </div>
        <div class="flex gap-1 items-center">
            <div class="text-gray-500">{{ props.role }}</div>
        </div>        
    </div>
</template>