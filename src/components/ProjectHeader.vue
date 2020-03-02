<template>
    <div class="co-project-header">
        <div
            class="co-project-header__upper-section-layer"
            :style="{backgroundImage: 'url(' + require('@/assets/images/kuwait-3.jpg') + ')'}"
        ></div>
        <h1 class="co-project-header__title u-a1 --bold">{{projectName}}</h1>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import {projectRouteNames} from '@/export-helpers/projectRouteNames';

    @Component({
        name: 'ProjectHeader',
    })
    export default class ProjectHeader extends Vue {
        public get projectName(): string {
            if (this.$route.params.projectName === projectRouteNames[0]) {
                return 'Sheikh Abdullah Al Salem Cultural Centre';
            } else {
                return '';
            }
        }
    }
</script>

<style lang="scss" scoped>
    .co-project-header {
        height: 500px;
        position: relative;
        overflow: hidden;
        width: 100%;

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
        }
    }
</style>
