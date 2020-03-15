<template>
    <div class="co-medium-posts">
        <h3 class="co-medium-posts__title u-a2 --bold">_Medium posts</h3>

        <div class="co-medium-posts__wrapper">
            <MediumPost
                class="co-medium-posts__post js-scrollreveal-left"
                v-for="mediumPost in mediumPosts"
                :key="mediumPost.title"
                :title="mediumPost.title"
                :description="mediumPost.description"
                :href="mediumPost.href"
                :image="mediumPost.image"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import {MediumPostInterface} from '@/interfaces/MediumPost';
    import MediumPost from '@/components/MediumPost.vue';

    @Component({
        name: 'MediumPosts',
        components: {MediumPost},
    })
    export default class MediumPosts extends Vue {
        public mediumPosts: MediumPostInterface[] = [
            {
                title: 'Nuxt.js over Vue.js: when should you use it and why',
                description: 'Nuxt.js is a frontend framework built upon Vue.js that offers great development features such as server side rendering, automatically generated routes, improved meta tags managing and SEO improvement.',
                href: 'https://medium.com/distant-horizons/nuxt-js-over-vue-js-when-should-you-use-it-and-why-e25c18adf14',
                image: 'nuxt.jpg',
            },
            {
                title: 'Vue.js: how we started and what are we using it for',
                description: 'In the last 2 years, we have built several web applications with Vue.js — from a banking fraud app and an internal time tracking tool, all the way to interactive Kinect applications and many more.',
                href: 'https://medium.com/distant-horizons/vue-js-how-we-started-and-what-are-we-using-it-for-ce9c35f53245',
                image: 'vue.jpg',
            },
        ];
    }
</script>

<style lang="scss" scoped>
    .co-medium-posts {
        padding: 80px 0 50px;
        width: 100%;

        &__title {
            text-align: center;
            padding-bottom: 50px;
        }

        &__wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 0 percentage(4 / 24);

            @include media('<=tablet') {
                padding: 0 percentage(2 / 24);
                display: block;
                justify-content: initial;
            }
        }

        &__post {
            width: 49%;

            @include media('<=tablet') {
                width: 100%;
                margin-bottom: 20px;
            }
        }
    }
</style>
