<template>
    <div class="co-about-me">

        <h3 class="co-about-me__title u-a2 u-a2 --bold">
            _About me
        </h3>

        <div class="co-about-me__content-wrapper">

            <div class="co-about-me__personal-info-wrapper">

                <div class="co-about-me__personal-info-left js-scrollreveal-left">
                    <p class="co-about-me__keyname u-a4">_Full name:</p>
                    <p class="co-about-me__keyname u-a4">_Phone:</p>
                    <p class="co-about-me__keyname u-a4">_E-mail:</p>
                    <p class="co-about-me__keyname u-a4">_Address:</p>
                    <p class="co-about-me__keyname u-a4">_City:</p>
                </div>

                <div class="co-about-me__personal-info-right js-scrollreveal-left">
                    <p class="co-about-me__value u-a4">Domagoj Svjetličić</p>
                    <p class="co-about-me__value u-a4"><a href="tel:+385917390936" class="co-about-me__email-link">+385
                        91 739 0936</a></p>
                    <p class="co-about-me__value u-a4"><a href="mailto:domagoj.svjetlicic@gmail.com"
                                                          class="co-about-me__email-link">domagoj.svjetlicic@gmail.com</a>
                    </p>
                    <p class="co-about-me__value u-a4">Stjepana Vojnovića 26, Kašina</p>
                    <p class="co-about-me__value u-a4">Zagreb</p>
                </div>

            </div>

            <div class="co-about-me__message-wrapper js-scrollreveal-bottom">

                <p class="co-about-me__message-title u-a2">_Hello Reader!</p>

                <p class="co-about-me__message u-a4">
                    My name is Domagoj, but you can call me Dava (weird nickname, I know...). I live in a little place near Zagreb called
                    <AppLink
                        :content="'Gajec'"
                        :href="'https://www.google.com/maps/place/10362,+Gajec/@45.883029,16.1372168,15z/data=!3m1!4b1!4m5!3m4!1s0x476676edf04e429f:0x991a014137a16f7!8m2!3d45.8829226!4d16.1411792'"
                    />, and I am 25 years old.
                </p>

                <p class="co-about-me__message u-a4">
                    In my spare time, I love to hang out with my friends, compose music, writing songs, play guitar and
                    play sports such as football, fitness, bicycling & rollerblading. Also, I am a big movies fan, so you
                    could see me very often eating popcorn in movie theatres.🙂
                </p>

                <p class="co-about-me__message u-a4">
                    And not to forget, I love to learn new Web Development technologies and create fun and interesting
                    projects for personal use and improvement. Technologies I mainly use are HTML, CSS(3) (SASS/SCSS),
                    JavaScript (ES6+), TypeScript, Vue.js, Node.js, PHP & SQL.
                </p>

            </div>

        </div>

    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import AppLink from '@/components/AppLink.vue';

    @Component({
        name: 'AboutMe',
        components: {AppLink},
    })
    export default class AboutMe extends Vue {

    }
</script>

<style lang="scss" scoped>
    .co-about-me {
        padding: 60px 0 80px;
        background-color: $white;
        width: 100%;

        &__title {
            text-align: center;
        }

        &__content-wrapper {
            padding: 0 percentage(4 / 24);
            margin: 50px 0 0;
            display: flex;

            @include media('<=1275px') {
                display: block;
            }

            @include media('<=tablet') {
                padding: 0 percentage(1 / 24);
            }
        }

        &__personal-info-wrapper {
            width: percentage(10 / 20);
            display: flex;
            padding-top: 59px;

            @include media('<=1275px') {
                width: 100%;
                padding-top: 10px;
                padding-bottom: 40px;
                justify-content: center;
            }

            @include media('<=425px') {
                justify-content: left;
            }
        }

        &__personal-info-left {
            padding-right: 10px;
        }

        &__message-wrapper {
            width: percentage(10 / 20);

            @include media('<=1275px') {
                width: 100%;
            }
        }

        &__keyname, &__value {
            padding-bottom: 10px;

            @include media('<=425px') {
                font-size: 12px;
            }

            @include media('<=335px') {
                font-size: 11px;
            }
        }

        &__keyname {
            text-align: right;
            color: $black;

            @include media('<=1275px') {
                text-align: left;
            }
        }

        &__value {
            color: $gray;
        }

        &__message-title {
            padding-bottom: 20px;
        }

        &__message {
            padding-bottom: 15px;
            color: $gray-message;
        }

        &__email-link {
            color: $gray;
        }
    }
</style>
