<template>
    <router-link
        class="co-project-block"
        style="background-image: url('https://image.freepik.com/free-vector/abstract-futuristic-background_23-2148399335.jpg')"
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


        &:hover {
            #{$root}__info-block {
                opacity: .7;
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
            padding: 15px;
            opacity: 0;
            transition: opacity .3s ease-in-out;
            overflow: hidden;
        }

        &__title, &__description {
            text-align: center;
            text-decoration: none;
            transition: all .4s ease-in-out;
            opacity: 0;
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
