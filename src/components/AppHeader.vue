<template>
    <div class="co-app-header">

        <div class="co-app-header__wrapper">

            <div class="co-app-header__profile-image-wrapper">
                <div class="co-app-header__profile-image"></div>
            </div>

            <h1
                class="co-app-header__title u-a1"
                :class="{'rotate': rotateTitle}"
            >
                < Domagoj Svjetličić />
            </h1>

            <h5 class="co-app-header__info u-a3">
                {{title}}
                <span
                    class="co-app-header__blinker"
                    v-if="blinkerShow"
                    :class="{'is-visible': blinkerToggle}"
                >
                    |
                </span>
            </h5>

            <ArrowDownIcon class="co-app-header__arrow gsap-arrow"/>

            <div class="co-app-header__social-icons-wrapper">
                <a href="https://www.linkedin.com/in/dsvjetl" target="_blank" class="co-app-header__social-link">
                    <fa class="co-app-header__social-icon" :icon="['fab', 'linkedin']"></fa>
                </a>
                <a href="/documents/Domagoj Svjetlicic CV.pdf" class="co-app-header__social-link" download>
                    <fa class="co-app-header__social-icon" :icon="['fas', 'file']"></fa>
                </a>
                <a href="https://github.com/dsvjetl" target="_blank" class="co-app-header__social-link">
                    <fa class="co-app-header__social-icon" :icon="['fab', 'github-square']"></fa>
                </a>
            </div>

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
        public blinkerShow: boolean = false;
        public blinkerToggle: boolean = false;
        public rotateTitle: boolean = false;
        private titleForTimeout = `JavaScript Developer (Vue | React | Angular)`;

        public titleTimeoutSet() {
            let index: number = 0;

            const interval = setInterval(() => {
                this.title += this.titleForTimeout[index];
                index++;

                if (index >= this.titleForTimeout.length) {
                    clearInterval(interval);
                    this.blinkerShow = true;
                    this.rotateTitle = true;
                    this.startBlinkerToggle();
                }
            }, 85);
        }

        private animateHeaderDom() {
            const tl = gsap.timeline({repeat: -1, repeatDelay: 0});

            tl.to('.gsap-arrow', {y: 0, duration: 1});
            tl.to('.gsap-arrow', {y: 50, duration: 1});
            tl.to('.gsap-arrow', {y: 0, duration: 1});
        }

        private startBlinkerToggle() {
            setInterval(() => {
                this.blinkerToggle = !this.blinkerToggle;
            }, 350);
        }

        private mounted(): void {
            setTimeout(() => {
                this.titleTimeoutSet();
            }, 1000);
            this.animateHeaderDom();
        }
    }
</script>

<style lang="scss" scoped>
    .co-app-header {
        $root: &;

        background-color: $orange;
        position: relative;
        text-align: center;
        display: flex;
        padding: 50px 0 50px;
        width: 100%;

        &__wrapper {
            margin: auto;
        }

        &__profile-image-wrapper {
            width: 300px;
            height: 300px;
            border-radius: 50%;
            margin: 0 auto 50px;
            box-shadow: 0 0 22px 0 rgba(255, 255, 255, 1);
            border: 1px solid $white;
            overflow: hidden;
            position: relative;

            @include media('<=tablet') {
                width: 200px;
                height: 200px;
            }
        }

        &__profile-image {
            background-image: url("../assets/images/profile-image.jpg");
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
            width: 100%;
            height: 100%;
            transition: transform .4s ease-in;
            position: relative;

            &:hover {
                transform: scale(1.1) translateY(3%);
            }

            &:after {
                content: '';
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: $white;
                opacity: 0;
                transition: all .3s ease-in;
                border-radius: 50%;
            }
        }

        &__title {
            font-family: 'Kaushan Script', sans-serif;
            color: $white;
            transition: all .3s ease-in-out;

            &.rotate {
                transform: rotate(-10deg);
            }

            @include media('<=tablet') {
                font-size: 30px;
            }

            @include media('<=570px') {
                font-size: 22px;
            }
        }

        &__info {
            padding: 120px 30px 80px;
        }

        &__blinker {
            visibility: hidden;

            &.is-visible {
                visibility: visible;
            }
        }

        &__social-icons-wrapper {
            margin-top: 50px;
        }

        &__social-link {
            display: inline-block;
            height: 30px;
            margin: 0 5px;

            &:hover {
                cursor: pointer;
            }
        }

        &__social-icon {
            font-size: 35px;
            color: $white;
            transition: color .3s ease-in-out;

            &:hover {
                color: $black;
            }
        }
    }
</style>
