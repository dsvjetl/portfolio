<template>
    <div class="co-medium-post">
        <div
            class="co-medium-post__image"
            :style="{backgroundImage: 'url(' + require('@/assets/images/' + image) + ')'}"
        ></div>

        <div class="co-medium-post__info-wrapper">

            <AppLink
                class="co-medium-post__title u-a3"
                :content="title"
                :href="href"
            />

            <p class="co-medium-post__description u-a4">
                {{description}}
            </p>

        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator';
    import AppLink from '@/components/AppLink.vue';

    @Component({
        name: 'MediumPost',
        components: {AppLink},
    })
    export default class MediumPost extends Vue {
        @Prop({required: true}) public title!: string;
        @Prop({required: true}) public description!: string;
        @Prop({required: true}) public href!: string;
        @Prop({required: true}) public image!: string;
    }
</script>

<style lang="scss" scoped>
    .co-medium-post {
        position: relative;
        box-shadow: 0 0 10px 0 rgba($orange, 0.5);

        &__image {
            background: no-repeat center center;
            background-size: cover;
            width: 100%;
            height: 230px;
        }

        &__info-wrapper {
            padding: 10px 15px;
            border-top: 1px solid $orange;
        }

        &__title {
            padding-bottom: 20px;
            display: block;
            color: $orange;
        }

    }
</style>
