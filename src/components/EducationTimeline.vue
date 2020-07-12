<template>
    <div class="co-education-timeline">

        <div class="co-education-timeline__title-wrapper">
            <p class="co-education-timeline__title u-a3">Education</p>
        </div>

        <div class="co-education-timeline__timeline-block">

            <div class="co-education-timeline__timeline-block-left">
                <TimelineBlock
                  class="js-scrollreveal-bottom"
                  :title="'Multimedia Computer Engineering'"
                  :companyName="'Algebra'"
                  :companyHref="'https://www.algebra.hr/visoko-uciliste'"
                  :dateString="'09/13 - 04/17'"
                  :faIcon="['fas', 'graduation-cap']"
                />
            </div>

            <div class="co-education-timeline__timeline-block-right">

            </div>

        </div>

    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import AppLink from '@/components/AppLink.vue';
    import TimelineBlock from '@/components/TimelineBlock.vue';

    @Component({
        name: 'EducationTimeline',
        components: {TimelineBlock, AppLink},
    })
    export default class EducationTimeline extends Vue {

    }
</script>

<style lang="scss" scoped>
    .co-education-timeline {

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
