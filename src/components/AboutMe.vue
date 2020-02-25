<template>
    <div class="co-about-me">

        <h3 class="co-about-me__title u-a2">
            _About me
        </h3>

        <div class="co-about-me__content-wrapper">

            <div class="co-about-me__personal-info-wrapper">

                <div class="co-about-me__personal-info-left">
                    <p class="co-about-me__keyname u-a4">_Full name:</p>
                    <p class="co-about-me__keyname u-a4">_Phone:</p>
                    <p class="co-about-me__keyname u-a4">_E-mail:</p>
                    <p class="co-about-me__keyname u-a4">_Address:</p>
                </div>

                <div class="co-about-me__personal-info-right">
                    <p class="co-about-me__value u-a4">Domagoj Svjetličić</p>
                    <p class="co-about-me__value u-a4"><a href="tel:+385917390936" class="co-about-me__email-link">+385 91 739 0936</a></p>
                    <p class="co-about-me__value u-a4"><a href="mailto:domagoj.svjetlicic@gmail.com" class="co-about-me__email-link">domagoj.svjetlicic@gmail.com</a></p>
                    <p class="co-about-me__value u-a4">Stjepana Vojnovića 26, Kašina, Grad Zagreb</p>
                </div>

            </div>

            <div class="co-about-me__message-wrapper">

                <p class="co-about-me__message u-a4">
                    <span class="u-a2">_Hello Reader!</span> My name is Domagoj! I live in a little place near Zagreb called <AppLink :content="'Gajec'" :href="'https://www.google.com/maps/place/10362,+Gajec/@45.883029,16.1372168,15z/data=!3m1!4b1!4m5!3m4!1s0x476676edf04e429f:0x991a014137a16f7!8m2!3d45.8829226!4d16.1411792'"/>, and I am 25 years old.
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
        padding: 60px 0 50px;
        background-color: $white;

        &__title {
            text-align: center;
        }

        &__content-wrapper {
            padding: 0 percentage(4 / 24);
            margin: 50px 0;
            display: flex;
        }

        &__personal-info-wrapper {
            width: percentage(10 / 20);
            display: flex;
        }

        &__personal-info-left {
            padding-right: 10px;
        }

        &__message-wrapper {
            width: percentage(10 / 20);
        }

        &__keyname, &__value {
            padding-bottom: 10px;
        }

        &__keyname {
            text-align: right;
            color: $black;
        }

        &__value {
            color: $gray;
        }

        &__message-title {
            padding-bottom: 10px;
        }

        &__email-link {
            color: $gray;
        }
    }
</style>
