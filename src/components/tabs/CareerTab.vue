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

const contestUKB = [
    { name: "III Edição campeonato de programação", group: "Lambda", year: "2017", position: "-", class: "bg-red-300" },
    { name: "IV Edição campeonato de programação", group: "XZ", year: "2018", position: "1", class: "bg-green-300" },
    { name: "V Edição campeonato de programação", group: "XZ", year: "2019", position: "1", class: "bg-blue-300" },
];

const contestAOCP = [
    { name: "AOCPC 2019", group: "-", position: "14", class: "bg-red-300" },
    { name: "AOCPC 2020", group: "IP/UKB_01", position: "7", class: "bg-green-300" },
    { name: "AOCPC 2021-2022", group: "Sparta", position: "7", class: "bg-blue-300" },
];

</script>
<template>
    <section class="flex flex-col md:flex-row gap-2 md:gap-10 items-center">
        <div>
            <ContainerTileItem class="text-center" title="Concurso de Campeonato de programação (IP-UKB)">
                A instituição do ensino que fiz o ensino superior realiza concursos internos de programação onde
                são formados equipas para representa a instituições em concursos provincial e nacional.
            </ContainerTileItem>
            <div class="flex flex-wrap justify-center items-center gap-3 mt-3 md:gap-8 md:mt-8">
                <div :class="['min-w-[250px] p-2 md:px-4 rounded-2xl dark:text-black', item.class]"
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
        <div>
            <DotLottieVue style="height: 500px; width: 500px" autoplay loop src="/winner.lottie" />
        </div>
    </section>

    <section class="flex flex-col gap-3 md:gap-8 md:flex-row justify-center items-center my-4 md:my-10">
        <div>
            <DotLottieVue style="height: 500px; width: 500px" autoplay loop src="/science.lottie" />
        </div>
        <div class="flex flex-col gap-3 md:gap-10 justify-center items-center">
            <div>
                <ContainerTileItem class="text-center" title="VI Feira de sistemas informáticos">
                    Obteve a 1º classificação da categoria Ensino superior, na Sexta edicação da feira de Sistemas
                    Informáticos do ISP/UKB, com o projecto denominado "Estatística fácil"
                </ContainerTileItem>
            </div>
            <Card class="w-full md:w-[550px]">
                <CardHeader class="flex flex-col justify-center items-center">
                    <CardTitle class="text-center font-semibold">VI Feira de sistemas informáticos</CardTitle>
                </CardHeader>
                <CardContent>
                    <div class="space-y-1.5">
                        <TextInfo text="Projecto" value="Estatística fácil" />
                        <TextInfo text="Descrição" value="Programa para criação de tabelas de distribuição" />
                        <TextInfo text="classificação" value="1" />
                    </div>
                </CardContent>
            </Card>
        </div>
    </section>


    <section class="flex flex-col md:flex-row gap-2 md:gap-10 items-center">
        <div>
            <DotLottieVue style="height: 500px; width: 500px" autoplay loop src="/winner.lottie" />
        </div>
        <div>
            <ContainerTileItem class="text-center" title="Concurso Nacional de programação (AOCPC)">
                AOCPC o concurso nacional de programação que um programa da organização ICPC que realizam concursos de
                programação na entre as universidades de um determinado território começando do local (na própria instituição), 
                nacional (entre a universidades de um país), internacional (representação de várias universidade em todo mundo).
            </ContainerTileItem>
            <div class="flex flex-wrap justify-center items-center gap-3 mt-3 md:gap-8 md:mt-8">
                <div :class="['min-w-[250px] p-2 md:px-4 rounded-2xl dark:text-black', item.class]" v-for="item in contestAOCP">
                    <div class="text-center font-semibold mb-3">{{ item.name }}</div>
                    <div class="space-y-1.5">
                        <TextInfo text="Instituição" value="Universide Kayvala Bwila" />
                        <TextInfo text="Equipa" :value="item.group" />
                        <TextInfo text="classificação" :value="item.position" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>