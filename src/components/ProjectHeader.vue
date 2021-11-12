<template>
    <div class="co-project-header">
        <div
            class="co-project-header__upper-section-layer"
            :style="{backgroundImage: 'url(' + require('@/assets/images/' + projectInfo.images[0]) + ')'}"
        ></div>
        <h1 class="co-project-header__title u-a1 --bold">{{projectInfo.title}}</h1>
        <BackHomeButton class="co-project-header__back-button"/>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator';
    import {projectRouteNames} from '@/export-helpers/projectRouteNames';
    import BackHomeButton from '@/components/BackHomeButton.vue';
    import {ProjectInfoInterface} from '@/interfaces/ProjectInfo';

    @Component({
        name: 'ProjectHeader',
        components: {BackHomeButton},
    })
    export default class ProjectHeader extends Vue {
        @Prop({required: true}) public projectInfo!: ProjectInfoInterface;
    }
</script>

<style lang="scss" scoped>
    .co-project-header {
        height: 500px;
        position: relative;
        overflow: hidden;
        width: 100%;

        @include media('<=tablet') {
            height: 350px;
        }

        @include media('<=mobile') {
            height: 250px;
        }

        &__upper-section-layer {
            width: 100%;
            height: 100%;
            background: no-repeat center center;
            background-size: cover;
            display: flex;
            filter: blur(5px) brightness(0.5);
            transform: scale(1.05);
        }

        &__title {
            text-transform: capitalize;
            text-align: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            @include media('<=tablet') {
                font-size: 25px;
            }

            @include media('<=mobile') {
                font-size: 20px;
            }
        }

        &__back-button {
            position: absolute;
            top: 20px;
            left: 20px;
        }
    }
</style>
