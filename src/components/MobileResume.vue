<template>
    <div class="co-mobile-resume">

        <div class="co-mobile-resume__experience-block">
            <h5 class="co-mobile-resume__title u-a3 --bold">Work experience:</h5>

            <div
                class="co-mobile-resume__experience-info"
                v-for="work in experiences.work"
                :key="work.date"
            >
                <p class="co-mobile-resume__experience-title u-a4">
                    {{work.title}}
                </p>
                <p class="co-mobile-resume__experience u-a4">
                    <AppLink :content="work.linkContent" :href="work.linkHref"/>:
                    <span class="co-mobile-resume__experience-date">{{work.date}}</span>
                </p>
            </div>
        </div>

        <div class="co-mobile-resume__experience-block">
            <h5 class="co-mobile-resume__title u-a3 --bold">Education:</h5>

            <div
                class="co-mobile-resume__experience-info"
                v-for="education in experiences.education"
                :key="education.date"
            >
                <p class="co-mobile-resume__experience-title u-a4">
                    {{education.title}}
                </p>
                <p class="co-mobile-resume__experience u-a4">
                    <AppLink :content="education.linkContent" :href="education.linkHref"/>:
                    <span class="co-mobile-resume__experience-date">{{education.date}}</span>
                </p>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import AppLink from '@/components/AppLink.vue';

    @Component({
        name: 'MobileResume',
        components: {AppLink},
    })
    export default class MobileResume extends Vue {
        public experiences: any = {
            work: [
                {
                    title: `Front-end Development Intern`,
                    linkContent: `Degordian`,
                    linkHref: `https://www.degordian.com`,
                    date: `03/17 - 01/18`,
                },
                {
                    title: `Front-end Developer`,
                    linkContent: `Degordian`,
                    linkHref: `https://www.degordian.com`,
                    date: `01/18 - 12/18`,
                },
                {
                    title: `Front-end Developer`,
                    linkContent: `Bornfight`,
                    linkHref: `https://www.bornfight.com`,
                    date: `12/18 - 02/20`,
                },
                {
                    title: `Software Developer`,
                    linkContent: `MI Digital`,
                    linkHref: `https://www.devot.team`,
                    date: `04/20 - 08/20`,
                },
                {
                    title: `Angular Developer`,
                    linkContent: `UHP Digital`,
                    linkHref: `https://www.uhp.digital`,
                    date: `09/20 - 11/21`,
                },
                {
                    title: `Javascript Developer`,
                    linkContent: `Q Agency`,
                    linkHref: `https://q.agency/`,
                    date: `01/22 - current`,
                },
            ],
            education: [
                {
                    title: `Multimedia Computer Engineering`,
                    linkContent: `Algebra`,
                    linkHref: `https://www.algebra.hr/visoko-uciliste`,
                    date: `09/13 - 04/17`,
                },
            ],
        };
    }
</script>

<style lang="scss" scoped>
    .co-mobile-resume {
        padding: 0 percentage(1 / 24);
        display: none;

        @include media('<=tablet') {
            display: block;
        }

        &__experience-block {
            padding-bottom: 30px;
        }

        &__experience-info {
            padding-bottom: 10px;
        }

        &__title {
            padding-bottom: 10px;
        }

        &__experience-date {
            color: $gray;
        }
    }
</style>
