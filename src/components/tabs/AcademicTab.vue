<script setup lang="ts">
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import TextInfo from '../TextInfo.vue';
import Container from '../Container.vue';
import ContainerTileItem from '../ContainerTileItem.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t } = useI18n();

const items = computed(() => [
    { name: "Cinfotec", course: t('academicTab.courseInformation'), period: t('academicTab.periodInformation'), img: '/cinfotec.png' },
    { name: "Cinfotec", course: t('academicTab.courseNetworks'), period: t('academicTab.periodNetworks'), img: '/cinfotec.png' }
]);

</script>
<template>
    <section class="flex flex-col gap-3 md:gap-10">
        <Container>
            <div class="w-full md:w-4/6 space-y-2 md:space-y-5">
                <ContainerTileItem :title="$t('academicTab.higherEducation')">
                    {{ $t('academicTab.higherEducationDesc') }}
                </ContainerTileItem>
                <ContainerTileItem :title="$t('academicTab.careerStudent')">
                    {{ $t('academicTab.careerStudentDesc') }}
                </ContainerTileItem>
            </div>
            <div class="w-full md:w-2/6">
                <Card class="shadow">
                    <CardHeader class="flex flex-col justify-center items-center">
                        <img src="/ukb.png" class="h-25 w-25" />
                        <CardTitle>{{ $t('academicTab.institutionInformation') }}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div class="space-y-2">
                            <TextInfo :text="$t('academicTab.institution')" value="Universidade Katyvala Bwila (UKB)" />
                            <TextInfo :text="$t('academicTab.course')" :value="$t('academicTab.courseDesc')" />
                            <TextInfo :text="$t('academicTab.institution')" :value="$t('academicTab.institutionDesc')" />
                            <TextInfo :text="$t('academicTab.country')" :value="$t('academicTab.countryDesc')" />
                            <TextInfo :text="$t('academicTab.period')" :value="$t('academicTab.periodDesc')" />
                            <TextInfo :text="$t('academicTab.province')" :value="$t('academicTab.provinceLuanda')" />
                            <TextInfo :text="$t('academicTab.municipality')" :value="$t('academicTab.municipalityDesc')" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div>
                            <span class="font-semibold pr-2 text-yellow-600">{{ $t('academicTab.warning') }}:</span>
                            <span>{{ $t('academicTab.warningDesc') }}</span>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </Container>
        <Container>
            <ContainerTileItem class="md:w-2/6" :title="$t('academicTab.professionalTechnicalEducation')">
                {{ $t('academicTab.professionalTechnicalEducationDesc') }}
            </ContainerTileItem>
            <div class="w-full md:w-4/6 flex flex-col gap-3 md:flex-row">
                <Card class="shadow w-full md:w-1/2" v-for="item in items">
                    <CardHeader class="flex flex-col justify-center items-center">
                        <img :src="item.img" class="h-20 w-20" />
                        <CardTitle>{{ $t('academicTab.professionalTechnicalCourse') }}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div class="space-y-1.5">
                            <TextInfo :text="$t('academicTab.institution')" :value="item.name" />
                            <TextInfo :text="$t('academicTab.course')" :value="item.course" />
                            <TextInfo :text="$t('academicTab.period')" :value="item.period" />
                            <TextInfo :text="$t('academicTab.country')" :value="$t('academicTab.countryDesc')" />
                            <TextInfo :text="$t('academicTab.province')" :value="$t('academicTab.provinceLuanda')" />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </Container>
    </section>
</template>