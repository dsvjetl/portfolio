<template>
    <div class="co-skills">
        <h3 class="co-skills__title u-a2">_Skills</h3>

        <div class="co-skills__diagrams-wrapper">
            <SkillDiagram :id="1"/>
            <SkillDiagram :id="2"/>
            <SkillDiagram :id="3"/>
            <SkillDiagram :id="4"/>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import SkillDiagram from '@/components/SkillDiagram.vue';

    @Component({
        name: 'Skills',
        components: {SkillDiagram},
    })
    export default class Skills extends Vue {

    }
</script>

<style lang="scss" scoped>
    .co-skills {
        padding-top: 70px;

        &__title {
            text-align: center;
        }

        &__diagrams-wrapper {
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            padding: 40px percentage(4 / 24);
        }

    }
</style>
