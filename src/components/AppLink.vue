<template>
    <a
        class="co-app-link"
        :target="target"
        :href="href"
    >{{content}}</a>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator';

    @Component({
        name: 'AppLink',
    })
    export default class AppLink extends Vue {
        @Prop({required: true}) public content!: string;
        @Prop({default: ''}) public href!: string;
        @Prop({default: '_blank'}) public target!: string;
        @Prop({default: 'primary'}) public mode!: string;
    }
</script>

<style lang="scss" scoped>
    .co-app-link {
        color: $orange;
    }
</style>
