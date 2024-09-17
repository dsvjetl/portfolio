<template>
    <div class="co-skills js-skills">
        <h3 class="co-skills__title u-a2 --bold">_Skills</h3>

        <div class="co-skills__diagrams-wrapper">
            <SkillDiagramWrapper
                class="co-skills__diagram-wrapper js-scrollreveal-bottom"
                :id="1"
                :title="'HTML'"
                :ratio="[99, 1]"
            />
            <SkillDiagramWrapper
                class="co-skills__diagram-wrapper js-scrollreveal-bottom"
                :id="3"
                :title="'JS'"
                :ratio="[97, 3]"
            />
            <SkillDiagramWrapper
                class="co-skills__diagram-wrapper js-scrollreveal-bottom"
                :id="4"
                :title="'TS'"
                :ratio="[94, 6]"
            />
            <SkillDiagramWrapper
                class="co-skills__diagram-wrapper js-scrollreveal-bottom"
                :id="2"
                :title="'CSS'"
                :ratio="[91, 9]"
            />
            <SkillDiagramWrapper
                class="co-skills__diagram-wrapper js-scrollreveal-bottom"
                :id="5"
                :title="'Vue.js'"
                :ratio="[95, 5]"
            />
            <SkillDiagramWrapper
                class="co-skills__diagram-wrapper js-scrollreveal-bottom"
                :id="6"
                :title="'React.js'"
                :ratio="[93, 7]"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import SkillDiagram from '@/components/SkillDiagram.vue';
    import SkillDiagramWrapper from '@/components/SkillDiagramWrapper.vue';

    @Component({
        name: 'Skills',
        components: {SkillDiagramWrapper, SkillDiagram},
    })
    export default class Skills extends Vue {

    }
</script>

<style lang="scss" scoped>
    .co-skills {
        padding: 50px 0 0;
        width: 100%;
        overflow: hidden;

        @include media('<=tablet') {
            padding: 20px 0 0;
        }

        &__title {
            text-align: center;
            padding-bottom: 20px;
        }

        &__diagrams-wrapper {
            display: flex;
            flex-wrap: wrap;
            padding: 40px percentage(4 / 24);
            justify-content: center;
            text-align: center;

            @include media('<=tablet') {
                padding: 40px percentage(1 / 24);
            }
        }

        &__diagram-wrapper {
            width: 25%;
            margin-bottom: 50px;
            padding: 5px;

            @include media('<=tablet') {
                width: 33%;
            }
        }

    }
</style>
