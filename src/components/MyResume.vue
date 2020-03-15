<template>
    <div class="co-my-resume">

        <h3 class="co-my-resume__title u-a2 u-a2 --bold">_Resume</h3>

        <div class="co-my-resume__timelines-wrapper">
            <ResumeTimeline/>
            <EducationTimeline/>
        </div>

        <MobileResume/>

    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import ResumeTimeline from '@/components/ResumeTimeline.vue';
    import EducationTimeline from '@/components/EducationTimeline.vue';
    import MobileResume from '@/components/MobileResume.vue';

    @Component({
        name: 'MyResume',
        components: {MobileResume, EducationTimeline, ResumeTimeline},
    })
    export default class MyResume extends Vue {

    }
</script>

<style lang="scss" scoped>
    .co-my-resume {
        width: 100%;

        &__timelines-wrapper {
            @include media('<=tablet') {
                display: none;
            }
        }

        &__title {
            text-align: center;
            padding-bottom: 50px;
        }

    }
</style>
