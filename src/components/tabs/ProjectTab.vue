<script setup lang="ts">
    import 'vidstack/bundle';
    import { useI18n } from 'vue-i18n';
    import { computed } from 'vue';

    const { t } = useI18n();

    const projects =  computed(() => [
        { name: t('productTab.negocarName'), description: t('productTab.negocarDesc'), video: "/video/Screen_negocar_20250723_183659.mp4" },
        { name: t('productTab.hinarioName'), description: t('productTab.hinariDesc'), video: "/video/Screen_hinario_20250723_184728.mp4" },
        { name: t('productTab.tubkabirName'), description: t('productTab.tubkabirDesc'), video: "/video/Screen_tudkabir_20250723_185151.mp4" },
    ]);

</script>
<template>

    <section class="grid grid-cols-1 gap-4 md:grid-cols-3 mt-3">
        <div v-for="item in projects" class="m-2">
            <div class="text-2xl">{{ item.name }}</div>
            <div class="h-[100px] mt-3">{{ item.description }}</div>
            <div>
                <media-player :title="item.name" :src="item.video">
                    <media-provider></media-provider>
                    <media-video-layout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"></media-video-layout>
                </media-player>
            </div>
        </div>
    </section>

</template>
<style lang="css" scoped>
    media-player {
        aspect-ratio: 16 / 9;
    }

    media-player {
        height: 338px;
    }
</style>