<script setup lang="ts">
defineProps({
    text: String,
    value: String
});
</script>
<template>
    <div class="flex justify-between gap-2">
        <div class="font-semibold">{{ $props.text }}</div>
        <div class="text-gray-500 dark:text-gray-50">{{ $props.value }}</div>
    </div>
</template>