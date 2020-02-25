<template>
    <div class="co-home">
        <AppHeader/>
        <AboutMe/>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import AppHeader from '@/components/AppHeader.vue';
    import AboutMe from '@/components/AboutMe.vue';

    @Component({
        name: 'Home',
        components: {AboutMe, AppHeader},
    })
    export default class Home extends Vue {

    }
</script>

<style lang="scss" scoped>
    .co-home {

    }
</style>
