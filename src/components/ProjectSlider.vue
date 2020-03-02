<template>
    <div class="co-project-slider">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div
                        class="co-project-slider__image"
                        :style="{backgroundImage: 'url(' + require('@/assets/images/kuwait-3.jpg') + ')'}"
                    ></div>
                </div>
                <div class="swiper-slide">
                    <div
                        class="co-project-slider__image"
                        :style="{backgroundImage: 'url(' + require('@/assets/images/kuwait-3.jpg') + ')'}"
                    ></div>
                </div>
            </div>

            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>

            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    // @ts-ignore
    import Swiper from 'swiper';

    @Component({
        name: 'ProjectSlider',
    })
    export default class ProjectSlider extends Vue {
        public mounted(): void {
            this.swiperManagement();
        }

        private swiperManagement() {
            const swiper = new Swiper('.swiper-container', {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true,
                },
            });
        }
    }
</script>

<style lang="scss" scoped>
    @import "~swiper/css/swiper.min.css";

    .co-project-slider {
        height: 500px;
        color: black;
        margin: 50px 0;
        padding: 0 percentage(4 / 24);

        .swiper-container {
            width: 100%;
            height: 100%;
        }

        .swiper-slide {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
        }

        .swiper-button-next, .swiper-button-prev {
            color: $orange;
        }

        &__image {
            background: no-repeat center center;
            background-size: cover;
            margin: auto;
            height: calc(100% - 8px);
            width: calc(80%);
            border: 4px solid $gray;
            transition: all .3s ease-in-out;

            &:hover {
                border: 4px solid $orange;
                cursor: grab;
            }
        }
    }
</style>
