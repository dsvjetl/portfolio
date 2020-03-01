<template>
    <div class="co-work">

        <h5 class="co-work__title u-a2 --bold">_Projects</h5>
        <p class="co-work__subtitle u-a4">Some of the latest projects I worked on.</p>

        <div class="co-work__wrapper">
            <ProjectBlock
                class="co-work__project-block"
                v-for="backgroundImage in backgroundImages"
                :key="backgroundImage.image"
                :image="backgroundImage.image"
                :title="backgroundImage.title"
                :description="backgroundImage.description"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import ProjectBlock from '@/components/ProjectBlock.vue';
    import {BackgroundImage} from '@/interfaces/BackgroundImage';

    @Component({
        name: 'Work',
        components: {ProjectBlock},
    })
    export default class Work extends Vue {
        public backgroundImages: BackgroundImage[] = [
            {image: 'kuwait-4.jpg', title: 'Al-Salem Cultural Centre', description: '30 interactive applications for the biggest museum in the world.'},
            {image: 'zuja-2.jpg', title: 'Ožujsko', description: 'Websites for Ožujsko.'},
            {image: 'eotg-screens.jpg', title: 'Eye on the goal', description: 'School improvement system.'},
            {image: 'fraud-official.jpg', title: 'Mercury processing services', description: 'Fraud management platform.'},
            {image: 'vremenco.jpg', title: 'vremen.co', description: 'Task tracking tool.'},
        ];
    }
</script>

<style lang="scss" scoped>
    .co-work {
        padding: 50px 0;
        width: 100%;
        background-color: $orange;

        &__title {
            text-align: center;
            color: $white;
            padding-bottom: 10px;
        }

        &__subtitle {
            font-weight: normal;
            color: $gray-message;
            text-align: center;
            padding-bottom: 20px;
        }

        &__wrapper {
            display: flex;
            flex-wrap: wrap;
            position: relative;
            padding: 30px percentage(4 / 20) 0;
            justify-content: space-evenly;
        }

        &__project-block {
            display: block !important;
            width: 30%;
            height: 150px;
            margin-bottom: 20px;
        }

    }
</style>
