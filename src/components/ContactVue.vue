<script setup lang="ts">
import { Badge } from './ui/badge';
defineProps({
    text: String,
    value: String,
    class: String,
})
</script>
<template>
    <div class="text-center">
        <div class="mb-2 text-lg font-semibold">{{$props.text}}</div>
        <Badge :class="['text-lg text-black font-normal', $props.class]">{{ $props.value }}</Badge>
    </div>
</template>