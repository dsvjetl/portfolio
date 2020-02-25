<template>
    <div class="co-app">
        <AppHeader/>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import AppHeader from '@/components/AppHeader.vue';

    @Component({
        name: 'App',
        components: {AppHeader},
    })
    export default class App extends Vue {

    }
</script>

<style lang="scss">
    @import "assets/scss/style";

    .co-app {

    }
</style>
