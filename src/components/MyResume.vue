<template>
    <div class="co-my-resume">

        <h3 class="co-my-resume__title u-a2 u-a2 --bold">_My Resume</h3>

        <ResumeTimeline/>
        <EducationTimeline/>

    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import ResumeTimeline from '@/components/ResumeTimeline.vue';
    import EducationTimeline from '@/components/EducationTimeline.vue';

    @Component({
        name: 'MyResume',
        components: {EducationTimeline, ResumeTimeline},
    })
    export default class MyResume extends Vue {

    }
</script>

<style lang="scss" scoped>
    .co-my-resume {

        &__title {
            text-align: center;
            padding-bottom: 50px;
        }

    }
</style>
