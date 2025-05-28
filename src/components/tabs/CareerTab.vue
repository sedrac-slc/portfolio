<script setup lang="ts">
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import TextInfo from '../TextInfo.vue';
import ContainerTileItem from '../ContainerTileItem.vue';
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const imgsUKB = ["/ukb-ip/img1.jpeg", "/ukb-ip/img2.jpeg", "/ukb-ip/img3.jpeg"];
const contestUKB = [
    { name: "III Edição campeonato de programação", group: "Lambda", year: "2017", position: "-", class: "bg-red-300" },
    { name: "IV Edição campeonato de programação", group: "XZ", year: "2018", position: "1º lugar", class: "bg-green-300" },
    { name: "V Edição campeonato de programação", group: "XZ", year: "2019", position: "1º lugar", class: "bg-blue-300" },
];

const imgsAOCP = ["/aocpc/img1.jpeg", "/aocpc/img2.jpeg", "/aocpc/img3.jpeg", "/aocpc/img4.jpeg", "/aocpc/img5.jpeg"];
const contestAOCP = [
    { name: "AOCPC 2019", group: "-", position: "14º lugar", class: "bg-red-300" },
    { name: "AOCPC 2020", group: "IP/UKB_01", position: "7º lugar", class: "bg-green-300" },
    { name: "AOCPC 2021-2022", group: "Sparta", position: "7º lugar", class: "bg-blue-300" },
];

</script>
<template>
    
    <section class="flex flex-col md:flex-row gap-2 md:gap-10 items-center">
        <div class="mt-4 md:mt-5">
            <ContainerTileItem class="text-center" title="Concurso de Campeonato de programação (IP-UKB)">
                A instituição do ensino que fiz o ensino superior realiza concursos internos de programação onde
                são formados equipas para representa a instituições em concursos provincial e nacional.
            </ContainerTileItem>
            <div class="flex flex-wrap justify-center items-center gap-3 mt-3 md:gap-8 md:mt-8">
                <div :class="['min-w-max md:min-w-[250px] p-2 md:px-4 rounded-2xl dark:text-black', item.class]"
                    v-for="item in contestUKB">
                    <div class="text-center font-semibold mb-3">{{ item.name }}</div>
                    <div class="space-y-1.5">
                        <TextInfo text="Equipa" :value="item.group" />
                        <TextInfo text="Ano" :value="item.year" />
                        <TextInfo text="classificação" :value="item.position" />
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center justify-center mb-10 md:mb-0">
            <DotLottieVue style="height: 500px; width: 500px" autoplay loop src="/winner.lottie" />
            <div class="ml-0 pl-0 w-full flex justify-center md:self-start">
                <Carousel class="relative md:w-full md:-mt-10" :opts="{ align: 'start', }">
                    <CarouselContent class="flex gap-2">
                        <CarouselItem v-for="item in imgsUKB" :key="item" class="basis-1/3 md:basis-1/2 lg:basis-1/3">
                            <div class="p-0 cursor-pointer" v-viewer>
                                <img :src="item" alt="Image" class="w-35 h-35 rounded-2xl border border-gray-800" />
                            </div>
                        </CarouselItem>
                        <CarouselPrevious class="hidden md:block" />
                        <CarouselNext class="hidden md:block" />
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    </section>

    <section class="flex flex-col-reverse gap-3 w-full md:gap-8 md:flex-row justify-center items-center my-4 md:my-10">
        <div>
            <DotLottieVue style="height: 500px; width: 500px" autoplay loop src="/science.lottie" />
        </div>
        <div class="flex flex-col gap-3 md:gap-10 justify-center items-center md:mt-4 lg:mt-20">
            <div>
                <ContainerTileItem class="text-center" title="VI Feira de sistemas informáticos">
                    Obteve a 1º classificação da categoria Ensino superior, na Sexta edicação da feira de Sistemas
                    Informáticos do ISP/UKB, com o projecto denominado "Estatística fácil"
                </ContainerTileItem>
            </div>
            <Card class="w-full md:w-[550px] bg-yellow-300 dark:text-black">
                <CardHeader class="flex flex-col justify-center items-center">
                    <CardTitle class="text-center font-semibold">VI Feira de sistemas informáticos</CardTitle>
                </CardHeader>
                <CardContent>
                    <div class="space-y-1.5">
                        <TextInfo text="Projecto" value="Estatística fácil" />
                        <TextInfo text="Descrição" value="Programa para criação de tabelas de distribuição" />
                        <TextInfo text="classificação" value="1º lugar" />
                    </div>
                </CardContent>
            </Card>
        </div>
    </section>

    <section class="flex flex-col w-full items-center justify-center md:gap-10 px-0 mx-0">
        <div class="flex flex-col justify-center md:flex-row gap-2 md:gap-10 items-center">
            <div class="w-80">
                <ContainerTileItem class="text-center" title="Concurso Nacional de programação (AOCPC)">
                    AOCPC o concurso nacional de programação que um programa da organização ICPC que realizam concursos
                    de programação na entre as universidades de um determinado território começando do local (na própria
                    instituição), nacional (entre a universidades de um país), internacional (representação de várias
                    universidade em
                    todo mundo).
                </ContainerTileItem>
                <div class="flex flex-wrap justify-center items-center gap-3 mt-3 md:gap-8 md:mt-8">
                    <div :class="['min-w-full md:min-w-[250px] p-2 md:px-4 rounded-2xl dark:text-black', item.class]"
                        v-for="item in contestAOCP">
                        <div class="text-center font-semibold mb-3">{{ item.name }}</div>
                        <div class="space-y-1.5">
                            <TextInfo text="Instituição" value="Universide Kayvala Bwila" />
                            <TextInfo text="Equipa" :value="item.group" />
                            <TextInfo text="classificação" :value="item.position" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <DotLottieVue style="height: 500px; width: 500px" autoplay loop src="/winner.lottie" />
            </div>
        </div>
        <div>
            <Carousel class="relative w-full" :opts="{ align: 'start', }">
                <CarouselContent>
                    <CarouselItem v-for="item in imgsAOCP" :key="item" class="basis-1/2 md:basis-1/2 lg:basis-1/4">
                        <div class="p-0 cursor-pointer" v-viewer>
                            <img :src="item" alt="Image" class="w-40 h-40 md:w-45 md:h-45 rounded-2xl border border-gray-800" />
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    </section>
</template>