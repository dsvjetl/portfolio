<template>
    <div class="co-skill-diagram">
        <canvas class="co-skill-diagram__canvas" :id="id"></canvas>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator';

    const Chart = require('chart.js');

    @Component({
        name: 'SkillDiagram',
    })
    export default class SkillDiagram extends Vue {
        @Prop({required: true}) public id!: string;

        private mounted() {
            var data = [{
                data: [50, 55],
                labels: ['India', 'China'],
                backgroundColor: [
                    '#4b77a9',
                ],
                borderColor: 'green'
            }];

            // @ts-ignore
            var ctx = document.getElementById(this.id);
            var myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    datasets: data
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                }
            });
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
