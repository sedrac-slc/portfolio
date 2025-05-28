<script lang="ts" setup>
import { Progress } from '@/components/ui/progress';
const props = defineProps({
    img: String,
    text: String,
    percetage: Number,
    classIndicator: String
});
</script>

<template>
    <div class="space-y-1">
        <div class="flex justify-between">
            <div :class="{'flex gap-1 items-center': props.img}">
                <div>
                    <img :src="props.img" alt="img" v-if="props.img"/>
                </div>
                <div>{{ props.text }}</div>
            </div>
            <div>{{ props.percetage }} %</div>
        </div>
        <Progress :model-value="props.percetage" :class-indicator="classIndicator"/>
    </div>
</template>