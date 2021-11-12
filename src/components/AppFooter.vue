<template>
    <footer class="co-app-footer">
        <p class="co-app-footer__copyrights u-a5">
            © 2020 <AppLink :content="'Domagoj Svjetličić'" :href="'https://www.linkedin.com/in/dsvjetl'"/>. All Rights Reserved.
        </p>
    </footer>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import AppLink from '@/components/AppLink.vue';

    @Component({
        name: 'AppFooter',
        components: {AppLink},
    })
    export default class AppFooter extends Vue {

    }
</script>

<style lang="scss" scoped>
    .co-app-footer {
        width: 100%;
        border-top: 1px solid $orange;
        padding: 10px 5px;
        text-align: center;
        max-height: 39px;
        color: $black;

        &__copyrights {
            @include media('<=400px') {
                font-size: 10px;
            }
        }
    }
</style>
