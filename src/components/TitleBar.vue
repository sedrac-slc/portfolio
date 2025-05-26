<script setup lang="ts">
    defineProps({
        text: String
    });
</script>
<template>
    <div class="text-gray-800 text-lg font-semibold dark:text-white">{{ text }}</div>
</template>