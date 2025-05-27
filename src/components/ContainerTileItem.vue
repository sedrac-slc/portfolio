<script setup lang="ts">
    defineProps({
        title: String,
        class: String,
    });
</script>
<template>
    <div :class="['w-full', $props.class]">
        <div>
            <div class="font-semibold text-xl">{{$props.title}}</div>
            <div class="mt-3">
                <slot></slot>
            </div>
        </div>
    </div>
</template>