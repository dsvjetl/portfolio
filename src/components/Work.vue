<template>
    <div class="co-work">

        <h5 class="co-work__title u-a2 --bold">_Projects</h5>
        <p class="co-work__subtitle u-a4">Some of the latest projects I worked on.</p>

        <div class="co-work__wrapper">
            <ProjectBlock
                class="co-work__project-block"
                v-for="project in projects"
                :key="project.image"
                :image="project.image"
                :title="project.title"
                :description="project.description"
                :path="project.path"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import ProjectBlock from '@/components/ProjectBlock.vue';
    import {ProjectWork} from '@/interfaces/ProjectWork';

    @Component({
        name: 'Work',
        components: {ProjectBlock},
    })
    export default class Work extends Vue {
        public projects: ProjectWork[] = [
            {
                image: 'kuwait-4.jpg',
                title: 'Al-Salem Cultural Centre',
                description: '33 interactive applications for the biggest museum in the world.',
                path: '/projects/al-salem-cultural-centre',
            },
            {
                image: 'zuja-2.jpg',
                title: 'Ožujsko',
                description: 'Websites for Ožujsko.',
                path: '/projects/ozujsko',
            },
            {
                image: 'eotg-3.jpg',
                title: 'Eye on the goal',
                description: 'School improvement system.',
                path: '/projects/eye-on-the-goal',
            },
            {
                image: 'fraud-5.jpg',
                title: 'Mercury processing services',
                description: 'Fraud management platform.',
                path: '/projects/mercury-fraud',
            },
            {
                image: 'vremenco.jpg',
                title: 'Vremenco',
                description: 'Task tracking tool.',
                path: '/projects/vremenco',
            },
            {
                image: 'weylchem.png',
                title: 'Weylchem',
                description: 'Platform for international chemical investors group',
                path: '/projects/weylchem',
            },
            {
                image: 'nda-restricted-booth.jpg',
                title: 'NDA Restricted',
                description: 'Leading socio-economic transformation for individuals, society, and the economy.',
                path: '/projects/nda-restricted',
            },
        ];
    }
</script>

<style lang="scss" scoped>
    .co-work {
        width: 100%;
        background-color: $orange;
        padding: 50px percentage(4 / 24) 30px;

        @include media('<=desktop') {
            padding: 30px percentage(2 / 20) 0;
        }

        @include media('<=tablet') {
            padding: 30px percentage(1 / 24) 0;
        }

        &__title {
            text-align: center;
            color: $white;
            padding-bottom: 50px;

            @include media('<=tablet') {
                padding-bottom: 20px;
            }
        }

        &__subtitle {
            font-weight: normal;
            color: $white;
            text-align: center;
            padding-bottom: 20px;
        }

        &__wrapper {
            display: flex;
            flex-wrap: wrap;
            position: relative;
            justify-content: space-evenly;
        }

        &__project-block {
            display: block !important;
            width: 30%;
            height: 150px;
            margin-bottom: 20px;

            @include media('<=tablet') {
                width: 48%;
            }

            @include media('<=550px') {
                width: 100%;
            }
        }

    }
</style>
