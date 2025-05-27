<script setup lang="ts">
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import TextInfo from '../TextInfo.vue';

const items = [
    { name: "Cinfotec", course: "Informática na Óptica do utilizador", period: "2016-01-18 à 2016-02-09", img: '/cinfotec.png' },
    { name: "Cinfotec", course: "Conceitos básico de redes de computadores", period: "2016-04-25 à 2016-05-09", img: '/cinfotec.png' }
];

</script>
<template>
    <section class="flex flex-col gap-3 md:gap-10">
        <div
            class="flex flex-col md:flex-row gap-3 md:gap-8 w-full items-center mt-4 bg-blue-50 dark:bg-slate-700 rounded-2xl p-3 md:p-5">
            <div class="w-full md:w-4/6">
                <div>
                    <div class="font-semibold text-xl">Ensino superior</div>
                    <div class="mt-3">
                        Realizei o ensino superior em <span class="italic font-semibold">Ciências da Computação</span>
                        pela <span class="italic font-semibold">Universidade Katyvala Bwila</span>,
                        localizada em Benguela, Angola. Durante o curso, estudei inicialmente no município de Benguela,
                        com as atividades atualmente concentradas na Catumbela, dentro da mesma província.
                    </div>
                </div>
                <div class="mt-3">
                    <div class="font-semibold text-xl">Percurso como estudante</div>
                    <div class="mt-3">
                        Meu percurso acadêmico foi marcado por dedicação e desempenho de destaque. Em todos os anos,
                        estive entre os melhores alunos da instituição e participei ativamente de diversas atividades
                        acadêmicas e extracurriculares, representado a instituição em concursos locais, províncias e
                        nacionais que podem ser sem <span class="italic font-semibold">"carreira"</span>.
                    </div>
                </div>
            </div>
            <div class="w-full md:w-2/6">
                <Card class="shadow">
                    <CardHeader class="flex flex-col justify-center items-center">
                        <img src="/ukb.png" class="h-25 w-25" />
                        <CardTitle>Informção da instituição</CardTitle>
                        <CardDescription>Essas informações esta relacionado com a instituição</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div class="space-y-2">
                            <TextInfo text="Instituição" value="Universidade Katyvala Bwila (UKB)" />
                            <TextInfo text="Curso" value="Ciências da computação" />
                            <TextInfo text="Grau" value="Licenciatura" />
                            <TextInfo text="País" value="Angola" />
                            <TextInfo text="Peródo" value="2017 à 2023" />
                            <TextInfo text="Provícia" value="Benguela" />
                            <TextInfo text="Município" value="Benguela" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div>
                            <span class="font-semibold pr-2 text-yellow-600">Aviso:</span>
                            <span>essas informações são do periódo que fiz a formação 2017 à 2023 e bem possível que
                                essas informações podem sofrer alterações</span>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
        <div
            class="flex flex-col md:flex-row gap-3 md:gap-8 w-full items-center mt-4 bg-blue-50 dark:bg-slate-700 rounded-2xl p-3 md:p-5">
            <div class="w-full md:w-2/6">
                <div class="font-semibold text-xl">Ensino técnico profissional</div>
                <div class="mt-3">
                    Realizei alguns cursos profissionais com o objetivo de adquirir conhecimentos técnicos específicos
                    na área em que desejava atuar, visando tanto o aprimoramento pessoal quanto a preparação para o
                    mercado de trabalho.
                </div>
            </div>
            <div class="w-full md:w-4/6 flex flex-col gap-3 md:flex-row">
                <Card class="shadow w-full md:w-1/2" v-for="item in items">
                    <CardHeader class="flex flex-col justify-center items-center">
                        <img :src="item.img" class="h-20 w-20" />
                        <CardTitle>Curso Técnico profissional</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div class="space-y-1.5">
                            <TextInfo text="Instituição" :value="item.name" />
                            <TextInfo text="Curso" :value="item.course" />
                            <TextInfo text="Período" :value="item.period" />
                            <TextInfo text="País" value="Angola" />
                            <TextInfo text="Provícia" value="Luanda" />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </section>
</template>