<script lang="ts" setup>
import { Progress } from '@/components/ui/progress';
const props = defineProps({
    text: String,
    percetage: Number,
    classIndicator: String
});
</script>

<template>
    <div class="space-y-1">
        <div class="flex justify-between">
            <div>{{ props.text }}</div>
            <div>{{ props.percetage }} %</div>
        </div>
        <Progress :model-value="props.percetage" :class-indicator="classIndicator"/>
    </div>
</template>