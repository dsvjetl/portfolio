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
            company: 'Made with Bornfight team',
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
            company: 'Made with Bornfight team',
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
            company: 'Made with Bornfight team',
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
        {
            routeName: 'mercury-fraud',
            title: 'Mercury processing services',
            company: 'Made with Bornfight team',
            paragraphs: [
                `Improved, customized, and modernized already existing fraud management tool.`,
                `As analysts go through large volumes of information, we implemented elements
                     like organized dashboards, data lists, auto queues, graphs, sound notifications
                     and case indicators. Simple UI upgrades within these elements helped them streamline
                     their work by allowing them to focus on the most critical pieces of information.`,
                `MPSI analysts perform a lot of small actions hundreds of times, so we focused on
                     them to make them simpler, quicker to perform and overall more efficient.
                     For example, analysts constantly copy and paste information, so we modified
                     the UI to make that a single-click, 1-second action, instead of a series of
                     clicks that takes 5 or more seconds.`,
            ],
            techs: [
                'HTML',
                'CSS (SCSS)',
                'JS',
                'TypeScript',
                'Vue.js',
                'Node.js',
                'Nest.js',
            ],
            images: [
                'fraud-1.jpg',
                'fraud-2.jpg',
                'fraud-3.jpg',
                'fraud-4.jpg',
                'fraud-5.jpg',
                'fraud-6.jpg',
                'fraud-7.jpg',
                'fraud-8.jpg',
            ],
        },
        {
            routeName: 'vremenco',
            title: 'Vremenco',
            company: 'Made with Degordian team',
            paragraphs: [
                `Internal task and time tracking tool that uses every
                     employee from Degordian, Bornfight and Mediatoolkit
                     on a daily basis. It helps collecting data about how
                     many hours and resources were spent on a specific tasks
                     and projects.`,
            ],
            techs: [
                'HTML',
                'CSS (SCSS)',
                'JS',
                'Vue.js',
                'Node.js',
                'PHP',
            ],
            images: [
                'vremenco.jpg',
            ],
        },
        {
            routeName: 'weylchem',
            title: 'WeylChem',
            company: 'Made with UHP team',
            paragraphs: [
                `The WeylChem Group of Companies was founded in 2005 as the fine chemicals
                    Platform of the International Chemical Investors Group (ICIG, ic-investors.com).
                    With a variety of companies in Europe and the USA, the Weylchem Group provides
                     a comprehensive offering of products and services to its customers.`,
            ],
            linkInfo: {
                content: 'WeylChem',
                link: 'https://www.weylchem.com',
            },
            techs: [
                'HTML',
                'CSS (SCSS)',
                'JS',
                'TS',
                'Angular(11)',
                'Drupal',
                'PHP',
            ],
            images: [
                'weylchem-1.png',
                'weylchem-2.png',
                'weylchem-3.png',
            ],
        },
        {
            routeName: 'takamol',
            title: 'Takamol',
            company: 'Made with Q Agency team',
            paragraphs: [
                `Leading socio-economic transformation by creating unique solutions that meet the diverse needs of
                 individuals and society, fostering opportunities for all, contributing to a prosperous economy, and
                 achieving futuristic goals.`,
            ],
            linkInfo: {
                content: 'Takamol',
                link: 'https://takamolholding.com/en/',
            },
            techs: [
                'Vue.js (2)',
                'React.js',
                'TS',
                'Custom Design System and React Starter Kit',
                'PHP',
            ],
            images: [
                'takamol-booth.jpg',
                'takamol-holding.webp',
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
