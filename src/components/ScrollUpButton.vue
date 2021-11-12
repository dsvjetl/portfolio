<template>
    <div
        class="co-scroll-up-button"
        :class="{'is-visible': show}"
    >
        <fa
            class="co-scroll-up-button__icon" :icon="['fas', 'arrow-circle-up']"
            @click="scrollToTop()"
        ></fa>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';

    @Component({
        name: 'ScrollUpButton',
    })
    export default class ScrollUpButton extends Vue {
        public windowY: number = 0;
        private windowYLimit: number = 800;

        public get show(): boolean {
            return this.windowY >= this.windowYLimit;
        }

        public created(): void {
            this.getWindowYpx();
        }

        public scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }

        private getWindowYpx(): void {
            window.addEventListener('scroll', () => {
                this.windowY = window.scrollY;
            });
        }

    }
</script>

<style lang="scss" scoped>
    .co-scroll-up-button {
        visibility: hidden;
        opacity: 0;
        transition: all .3s ease-in-out;

        &.is-visible {
            visibility: visible;
            opacity: 1;
        }

        &__icon {
            color: $black;
            transition: all .3s ease-in-out;
            font-size: 35px;

            &:hover {
                transform: scale(1.1);
                color: $gray-message;
                cursor: pointer;
            }
        }

    }
</style>
