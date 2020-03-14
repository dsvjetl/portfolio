<template>
    <div class="co-particles-block">
        <div
            class="co-particles-block__block"
            id="particles-js"
            @click="toggleExpandParticlesElement()"
            ref="particles"
            :class="{'is-expanded': isParticlesExpanded}"
        >
        </div>
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import {headerPerticlesConfig} from '@/export-helpers/particlesConfigs';

@Component({
    name: 'ParticlesBlock',
})
export default class ParticlesBlock extends Vue {
    public isParticlesExpanded: boolean = false;

    public mounted() {
        this.startParticles();
    }

    public beforeDestroy(): void {
        // @ts-ignore
        pJSDom = [];
    }

    public toggleExpandParticlesElement() {
        this.isParticlesExpanded = !this.isParticlesExpanded;
        const body = document.querySelector('body') as HTMLElement;

        if (this.isParticlesExpanded) {
            body.style.overflow = 'hidden';
            body.style.position = 'fixed';
        } else {
            body.style.overflow = 'auto';
            body.style.position = 'static';
        }

        this.$nextTick(() => {
            // @ts-ignore
            pJSDom[0].pJS.particles.move.enable = true;
            // @ts-ignore
            pJSDom[0].pJS.fn.particlesRefresh();
        });
    }

    private startParticles() {
        // @ts-ignore
        particlesJS('particles-js', headerPerticlesConfig);
    }
}
</script>

<style lang="scss" scoped>
    .co-particles-block {

        &__block {
            height: 200px;
            width: 100%;
            border-bottom: 1px solid $orange;
            transition: opacity .5s ease-in-out, background-color .5s ease-in-out;

            &:hover {
                cursor: pointer;
                background-color: $black;
            }

            &.is-expanded {
                height: 100vh;
                width: 100%;
                position: fixed;
                top: 0;
                left: 0;
                background-color: rgba($black, .8);
            }
        }
    }
</style>
