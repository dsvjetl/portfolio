<template>
    <div class="co-not-found-view">
        <h1>404</h1>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';

    @Component({
        name: 'NotFoundView',
    })
    export default class NotFoundView extends Vue {

    }
</script>

<style lang="scss" scoped>
    .co-not-found-view {
    }
</style>
