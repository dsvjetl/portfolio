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
                    <p class="co-about-me__value u-a4">Horvatova 8d, Sesvete</p>
                    <p class="co-about-me__value u-a4">Zagreb</p>
                </div>

            </div>

            <div class="co-about-me__message-wrapper js-scrollreveal-bottom">

                <p class="co-about-me__message-title u-a2">_Hello Reader!</p>

                <p class="co-about-me__message u-a4">
                    My name is Domagoj, though I often go by Dava. I'm 30 years old and currently reside in Sesvete,
                    Zagreb.
                    As a web developer, I am deeply passionate about learning and implementing the latest technologies.
                    I specialize in creating dynamic, well-designed, and efficient web applications. My technical skill
                    set includes HTML, CSS, JavaScript, TypeScript, and frameworks such as Vue, React, and
                    Angular. Additionally, I have experience with backend technologies like Node.js, as well as some
                    exposure to PHP and SQL.
                </p>

                <p class="co-about-me__message u-a4">
                    Beyond my professional interests, I have a strong passion for music. I enjoy composing, writing
                    songs, and playing the guitar. I also stay active through various sports including football,
                    fitness, cycling, skiing, and rollerblading. As a movie enthusiast, you’ll often find me at the
                    cinema, enjoying the latest films.🙂
                </p>

                <p class="co-about-me__message u-a4">
                    I am continually seeking opportunities to grow and develop my skills, whether through professional
                    projects or personal initiatives. My goal is to contribute to and create innovative, user-centric
                    web solutions.
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

    @include media('<=tablet') {
        padding: 30px 0 40px;
    }

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
            margin: 20px 0 0;
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
