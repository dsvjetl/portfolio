<template>
    <div class="co-home">
        <AppHeader/>
        <AboutMe/>
        <MyResume/>
        <Skills/>
        <Work/>
        <MediumPosts/>
        <AppFooter/>
        <ScrollUpButton class="co-home__scroll-up-button"/>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import AppHeader from '@/components/AppHeader.vue';
    import AboutMe from '@/components/AboutMe.vue';
    import MyResume from '@/components/MyResume.vue';
    import EducationTimeline from '@/components/EducationTimeline.vue';
    import Skills from '@/components/Skills.vue';
    import Work from '@/components/Work.vue';
    import MediumPosts from '@/components/MediumPosts.vue';
    import AppFooter from '@/components/AppFooter.vue';
    import ScrollUpButton from '@/components/ScrollUpButton.vue';

    @Component({
        name: 'Home',
        components: {
            ScrollUpButton,
            AppFooter,
            MediumPosts,
            Work,
            Skills,
            EducationTimeline,
            MyResume,
            AboutMe,
            AppHeader,
        },
    })
    export default class Home extends Vue {

    }
</script>

<style lang="scss" scoped>
    .co-home {

        &__scroll-up-button {
            position: fixed;
            bottom: 50px;
            right: 50px;
        }

    }
</style>
