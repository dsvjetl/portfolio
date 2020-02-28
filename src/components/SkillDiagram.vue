<template>
    <div class="co-skill-diagram" ref="skillDiagram">
        <canvas class="co-skill-diagram__canvas" :id="id"></canvas>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator';
    // @ts-ignore
    import Chart from 'chart.js';

    @Component({
        name: 'SkillDiagram',
    })
    export default class SkillDiagram extends Vue {
        @Prop({required: true}) public id!: string;
        @Prop({default: () => [40, 60]}) public ratio!: [];

        private initialized: boolean = false;

        private initChart() {
            const data = [{
                data: this.ratio,
                labels: ['skill', 'blank'],
                backgroundColor: [
                    '#fb8807',
                    'transparent',
                ],
            }];

            // @ts-ignore
            const ctx = document.getElementById(this.id);
            const myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    datasets: data,
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    tooltips: {
                        enabled: false,
                    },
                    elements: {
                        arc: {
                            borderWidth: 0,
                            borderColor: '#fb8807',
                        },
                    },
                },
            });
        }

        private scrollTrigger() {
            const skillDiagram: HTMLElement = document.querySelector('.js-skills') as HTMLElement;
            const skillDiagramHeight = skillDiagram.clientHeight;
            const skillDiagramTopDistance = skillDiagram.getBoundingClientRect().top - (skillDiagramHeight / 1.5);

            if (window.scrollY >= skillDiagramTopDistance && !this.initialized) {
                this.initialized = true;
                this.initChart();
            }

            document.addEventListener('scroll', () => {
                if (window.scrollY >= skillDiagramTopDistance && !this.initialized) {
                    this.initialized = true;
                    this.initChart();
                }
            });
        }

        private mounted() {
            this.scrollTrigger();
        }
    }
</script>

<style lang="scss">
    .co-skill-diagram {
        &__canvas {
            width: 200px;
            height: 200px;
        }
    }
</style>
