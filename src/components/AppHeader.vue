<template>
    <div class="co-app-header">

        <div class="co-app-header__wrapper">

            <div class="co-app-header__profile-image"></div>

            <h1 class="co-app-header__title u-a1">< Domagoj Svjetličić /></h1>

            <h5 class="co-app-header__info u-a3">
                {{title}}
            </h5>

            <ArrowDownIcon class="co-app-header__arrow gsap-arrow"/>

        </div>

    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import ArrowDownIcon from '@/components/icons/ArrowDown.vue';
    import gsap from 'gsap';

    @Component({
        name: 'AppHeader',
        components: {ArrowDownIcon},
    })
    export default class AppHeader extends Vue {
        public title: string = ``;
        private titleForTimeout = `Front-end / JavaScript / Vue.js Developer...`;

        public titleTimeoutSet() {
            const titleForTimeoutLength: number = this.titleForTimeout.length;
            let index: number = 0;

            const interval = setInterval(() => {
                this.title += this.titleForTimeout[index];
                index++;

                if (index >= this.titleForTimeout.length) {
                    clearInterval(interval);
                }
            }, 100);
        }

        private animateHeaderDom() {
            const tl = gsap.timeline({repeat: -1, repeatDelay: 0});

            tl.to('.gsap-arrow', {y: 0, duration: 1});
            tl.to('.gsap-arrow', {y: 50, duration: 1});
            tl.to('.gsap-arrow', {y: 0, duration: 1});
        }

        private mounted(): void {
            this.titleTimeoutSet();
            this.animateHeaderDom();
        }
    }
</script>

<style lang="scss" scoped>
    .co-app-header {
        width: 100%;
        height: 100vh;
        background-color: $orange;
        position: relative;
        text-align: center;
        padding: 50px 0;
        display: flex;

        &__wrapper {
            margin: auto;
        }

        &__profile-image {
            background-image: url("https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg");
            width: 220px;
            height: 220px;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
            border-radius: 50%;
            margin: 0 auto 50px;
            box-shadow: 0 0 22px 0 rgba(255, 255, 255, 1);
            border: 1px solid $white;
        }

        &__title {
            font-family: 'Kaushan Script', sans-serif;
            color: $white;
            transform: rotate(-10deg);
            padding-bottom: 120px;
        }

        &__info {
            padding-bottom: 30px;
        }
    }
</style>
