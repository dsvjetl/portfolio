<template>
    <div class="co-project-view">
        <ProjectHeader
            :projectInfo="currentProjectInfo"
        />
        <ProjectSlider
            :sliderImages="currentProjectInfo.images"
        />
        <ProjectInfo
            :projectInfo="currentProjectInfo"
        />
        <AppFooter/>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import {projectRouteNames} from '@/export-helpers/projectRouteNames';
    import ProjectHeader from '@/components/ProjectHeader.vue';
    import ProjectSlider from '@/components/ProjectSlider.vue';
    import ProjectInfo from '@/components/ProjectInfo.vue';
    import AppFooter from '@/components/AppFooter.vue';
    import {ProjectInfoInterface} from '@/interfaces/ProjectInfo';

    @Component({
        name: 'ProjectView',
        components: {AppFooter, ProjectInfo, ProjectSlider, ProjectHeader},
    })
    export default class ProjectView extends Vue {

        public projectInfos: ProjectInfoInterface[] = [
            {
                routeName: 'al-salem-cultural-centre',
                title: 'Sheikh Abdullah Al Salem Cultural Centre',
                paragraphs: [
                    'Sheikh Abdullah Al Salem Cultural Centre is the biggest cultural centre in the world. It contains 1,100 exhibits in six different buildings - Science Museum, Museum of Islamic History, Space Museum, Fine Arts Centre and Theatre.',
                    'I was a part of the team in charge for developing 33 interactive applications as a role of Front-end JavaScript developer.',
                ],
                linkInfo: {
                    content: 'Sheikh Abdullah Al Salem Cultural Centre',
                    link: 'https://www.ascckw.com',
                },
                techs: [
                    'HTML',
                    'CSS (SCSS)',
                    'JS',
                    'PHP',
                    'Electron',
                ],
                images: [
                    'kuwait-1.jpg',
                    'kuwait-2.jpg',
                    'kuwait-3.jpg',
                    'kuwait-4.jpg',
                    'kuwait-5.jpg',
                    'kuwait-6.jpg',
                ],
            },
            {
                routeName: 'ozujsko',
                title: 'Ožujsko',
                paragraphs: [
                    'Ožujsko is a brand of beer which is produced by Zagrebačka pivovara, the biggest brewery in the Croatia. It is also the most popular and the leading beer brand in terms of sales in Croatia.',
                ],
                linkInfo: {
                    content: 'Ožujsko',
                    link: 'https://www.ozujsko.com',
                },
                techs: [
                    'HTML',
                    'CSS (SCSS)',
                    'JS',
                    'PHP',
                    'WordPress',
                ],
                images: [
                    'zuja-1.jpg',
                    'zuja-2.jpg',
                    'zuja-3.jpg',
                ],
            },
            {
                routeName: 'eye-on-the-goal',
                title: 'Eye on the goal',
                paragraphs: [
                    `The platform for teachers and educators to help them through the key components
                     of their professional work like strategic planning within the school district level.
                     Monitoring, managing and tracking progress of projects and people, and
                     visualizing and analyzing data about student learning and professional practices.`,
                ],
                linkInfo: {
                    content: 'Eye on the goal',
                    link: 'https://eyeonthegoal.com/',
                },
                techs: [
                    'HTML',
                    'CSS (SCSS)',
                    'JS',
                    'PHP',
                ],
                images: [
                    'eotg-1.jpg',
                    'eotg-2.jpg',
                    'eotg-3.jpg',
                ],
            },
        ];

        public get projectNameParam(): string {
            return this.$route.params.projectName;
        }

        public get currentProjectInfo(): ProjectInfoInterface {
            return this.projectInfos.filter((projectInfo) => {
                if (this.projectNameParam === projectInfo.routeName) {
                    return projectInfo;
                }
            })[0];
        }

        public created() {
            this.manageProjectNameParam();
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
