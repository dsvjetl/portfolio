<template>
    <router-link to="/" class="co-back-home-button">
        <fa class="co-back-home-button__icon" :icon="['fas', 'arrow-left']"></fa>
        <small class="u-a5 --uppercase">Back to home</small>
    </router-link>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';

    @Component({
        name: 'BackHomeButton',
    })
    export default class BackHomeButton extends Vue {

    }
</script>

<style lang="scss" scoped>
    .co-back-home-button {
        color: $orange;

        &__icon {
            margin-right: 10px;
            font-size: 10px;
        }
    }
</style>
