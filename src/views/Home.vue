<template>
    <div class="co-home">
        <AppHeader/>
        <ParticlesBlock/>
        <AboutMe/>
        <MyResume/>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import AppHeader from '@/components/AppHeader.vue';
    import AboutMe from '@/components/AboutMe.vue';
    import MyResume from '@/components/MyResume.vue';
    import EducationTimeline from '@/components/EducationTimeline.vue';
    import ParticlesBlock from '@/components/ParticlesBlock.vue';

    @Component({
        name: 'Home',
        components: {ParticlesBlock, EducationTimeline, MyResume, AboutMe, AppHeader},
    })
    export default class Home extends Vue {

    }
</script>

<style lang="scss" scoped>
    .co-home {

    }
</style>
