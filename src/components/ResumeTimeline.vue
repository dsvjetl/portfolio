<template>
    <div class="co-resume-timeline">

        <div class="co-resume-timeline__title-wrapper">
            <p class="co-resume-timeline__title u-a3">WORK EXPERIENCE</p>
        </div>

        <div class="co-resume-timeline__timeline-block">

            <div class="co-resume-timeline__timeline-block-left">
                <TimelineBlock
                    class="js-scrollreveal-left"
                    :title="'Front-end Development Intern'"
                    :companyName="'Degordian'"
                    :companyHref="'https://www.degordian.com'"
                    :dateString="'03/17 - 01/18'"
                />
                <div class="co-resume-timeline__empty-space"></div>
                <TimelineBlock
                    class="js-scrollreveal-left"
                    :title="'Front-end Developer'"
                    :companyName="'Bornfight'"
                    :companyHref="'https://www.bornfight.com'"
                    :dateString="'12/18 - 02/20'"
                />
            </div>

            <div class="co-resume-timeline__timeline-block-right">
                <div class="co-resume-timeline__empty-space"></div>
                <TimelineBlock
                    class="js-scrollreveal-bottom"
                    :title="'Front-end Developer'"
                    :companyName="'Degordian'"
                    :companyHref="'https://www.degordian.com'"
                    :dateString="'01/18 - 12/18'"
                    :side="'right'"
                />
            </div>

        </div>

    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import AppLink from '@/components/AppLink.vue';
    import TimelineBlock from '@/components/TimelineBlock.vue';

    @Component({
        name: 'ResumeTimeline',
        components: {TimelineBlock, AppLink},
    })
    export default class ResumeTimeline extends Vue {

    }
</script>

<style lang="scss" scoped>
    .co-resume-timeline {

        &__title-wrapper {
            text-align: center;
        }

        &__title {
            display: inline-block;
            background-color: $gray-light;
            padding: 5px 10px;
            text-transform: uppercase;
            color: $black;
        }

        &__timeline-block {
            display: flex;
            padding: 0 percentage(4 / 24);

            @include media('<=860px') {
                padding: 0 percentage(1 / 24);
            }
        }

        &__timeline-block-left {
            flex: 1;
            border-right: 2px solid $gray-light;
            text-align: right;
            padding: 0 30px 0 0;
        }

        &__timeline-block-right {
            flex: 1;
            padding: 0 0 0 30px;
        }

        &__empty-space {
            height: 132px;
        }

    }
</style>
