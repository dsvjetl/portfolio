<template>
    <div class="co-skill-diagram-wrapper">
        <h5 class="co-skill-diagram-wrapper__title u-a4">
            {{title}} <span class="co-skill-diagram-wrapper__percentage">{{percentage}}%</span>
        </h5>
        <SkillDiagram
            :id="id"
            :ratio="ratio"
        />
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator';
    import SkillDiagram from './SkillDiagram.vue';

    @Component({
        name: 'SkillDiagramWrapper',
        components: {SkillDiagram},
    })
    export default class SkillDiagramWrapper extends Vue {
        @Prop({required: true}) public id!: number | string;
        @Prop({required: true}) public title!: string;
        @Prop({default: () => [40, 60]}) public ratio!: number[];

        public get percentage(): number {
            return this.ratio[0];
        }
    }
</script>

<style lang="scss" scoped>
    .co-skill-diagram-wrapper {

        &__title {
            text-align: center;
            padding-bottom: 5px;
        }

        &__percentage {
            color: $gray-message;
            font-weight: normal;
        }

    }
</style>
