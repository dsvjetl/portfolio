<template>
    <div class="co-project-view">
        <ProjectHeader/>
        <ProjectSlider/>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import {projectRouteNames} from '@/export-helpers/projectRouteNames';
    import ProjectHeader from '@/components/ProjectHeader.vue';
    import ProjectSlider from '@/components/ProjectSlider.vue';

    @Component({
        name: 'ProjectView',
        components: {ProjectSlider, ProjectHeader},
    })
    export default class ProjectView extends Vue {
        public created() {
            this.manageProjectNameParam();
        }

        public get projectNameParam(): string {
            return this.$route.params.projectName;
        }

        private manageProjectNameParam() {
            if (!projectRouteNames.includes(this.projectNameParam)) {
                this.$router.push({name: 'NotFound'});
            }
        }
    }
</script>

<style lang="scss" scoped>
    .co-project-view {
        color: $white;
    }
</style>
