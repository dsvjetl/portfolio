<template>
    <div class="co-project-slider">
        <div
            v-if="projectName !== 'nda-restricted'"
            :class="[{'swiper-container': createSlider}]"
        >

            <div class="swiper-wrapper">

                <div
                    class="swiper-slide"
                    v-for="sliderImage in sliderImages"
                    :key="sliderImage"
                >
                    <div
                        class="co-project-slider__image"
                        :style="{backgroundImage: 'url(' + require('@/assets/images/' + sliderImage) + ')'}"
                    ></div>
                </div>

            </div>

            <div v-if="createSlider">
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>

                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
// @ts-ignore
import Swiper from 'swiper';

@Component({
    name: 'ProjectSlider',
})
export default class ProjectSlider extends Vue {
    @Prop({required: true}) public sliderImages!: string[];
    @Prop({required: true}) public projectName!: string;

    public mounted(): void {
        this.swiperManagement();
    }

    public get createSlider(): boolean {
        return this.sliderImages.length > 1;
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
    color: black;
    margin: 50px 0;
    padding: 0 percentage(4 / 24);

    @include media('<=tablet') {
        padding: 0 percentage(1 / 24);
    }

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
        transform: translateY(-15px);

        @include media('<=tablet') {
            &:after {
                font-size: 30px;
            }
        }

        @include media('<=450px') {
            &:after {
                font-size: 25px;
            }
        }
    }

    .swiper-button-next {
        @include media('<=520px') {
            transform: translateX(15px) translateY(-15px);
        }
    }

    .swiper-button-prev {
        @include media('<=520px') {
            transform: translateX(-15px) translateY(-15px);
        }
    }

    &__image {
        background: no-repeat center center;
        background-size: cover;
        margin: auto;
        /*height: calc(100% - 8px);*/
        height: 0;
        width: calc(80%);
        padding-top: 56.25%;
        border: 4px solid $gray;
        transition: all .3s ease-in-out;
        position: relative;

        &:hover {
            border: 4px solid $orange;
            cursor: grab;
        }
    }
}
</style>
