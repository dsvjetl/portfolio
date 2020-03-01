<template>
    <router-link
        class="co-project-block js-scrollreveal-bottom"
        :style="{backgroundImage: 'url(' + require('@/assets/images/' + image) + ')'}"

        to="/"
        >
        <div class="co-project-block__info-block">
            <h5 class="co-project-block__title u-a3">{{title}}</h5>
            <p class="co-project-block__description u-a5">{{description}}</p>
        </div>
    </router-link>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator';

    @Component({
        name: 'ProjectBlock',
    })
    export default class ProjectBlock extends Vue {
        @Prop({required: true}) public image!: string;
        @Prop({required: true}) public title!: string;
        @Prop({required: true}) public description!: string;
    }
</script>

<style lang="scss" scoped>
    .co-project-block {
        $root: &;

        display: block;
        position: relative;
        text-decoration: none;
        background: no-repeat center center;
        background-size: cover;
        transition: all .3s ease-in;

        &:hover {

            #{$root}__info-block {
                opacity: .9;
            }

            #{$root}__title {
                transform: translateY(0px);
                opacity: 1;
            }

            #{$root}__description {
                transform: translateY(0px);
                opacity: 1;
            }
        }

        &__info-block {
            background-color: $white;
            height: 100%;
            width: 100%;
            padding: 10px;
            opacity: 0;
            transition: all .3s ease-in-out;
            overflow: hidden;
        }

        &__title, &__description {
            text-align: center;
            text-decoration: none;
            transition: all .4s ease-in-out;
            opacity: 0;
            display: block;
        }

        &__title {
            color: $orange;
            padding: 0 0 10px;
            text-transform: uppercase;
            transform: translateY(-50px);
        }

        &__description {
            color: $black;
            transform: translateY(50px);
        }
    }
</style>
