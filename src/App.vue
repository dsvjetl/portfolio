<template>
    <div class="co-app">
        <router-view/>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import AppHeader from '@/components/AppHeader.vue';
    import {ScrollRevealService} from '@/services/ScrollRevealService';

    @Component({
        name: 'App',
        components: {AppHeader},
    })
    export default class App extends Vue {
        public mounted(): void {
            ScrollRevealService.init();
        }
    }
</script>

<style lang="scss">
    @import "assets/scss/style";

    .co-app {

    }
</style>
