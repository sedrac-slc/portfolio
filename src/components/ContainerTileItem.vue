<script setup lang="ts">
defineProps({
    title: String,
    class: String,
});
</script>
<template>
    <div :class="['w-full relative', $props.class]">
        <div class="font-semibold text-xl text-wrap">{{ $props.title }}</div>
        <div class="mt-3">
            <slot></slot>
        </div>
    </div>
</template>