<template>
    <div
        class="co-timeline-block"
        :class="{'is-right': side === 'right'}"
    >

        <fa
            class="co-timeline-block__timeline-icon" :icon="faIcon"
            :class="[{'is-graduation': faIcon.includes('graduation-cap')}]"
        ></fa>

        <h5 class="co-timeline-block__info-title u-a3">{{title}}</h5>
        <p class="co-timeline-block__company u-a4">
            <span class="co-timeline-block__company-name">
                <AppLink
                    :content="companyName"
                    :href="companyHref"
                />
            </span>: {{dateString}}
        </p>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator';
    import AppLink from './AppLink.vue';

    @Component({
        name: 'TimelineBlock',
        components: {AppLink},
    })
    export default class TimelineBlock extends Vue {
        @Prop({required: true}) public title!: string;
        @Prop({required: true}) public companyName!: string;
        @Prop({required: true}) public companyHref!: string;
        @Prop({required: true}) public dateString!: string;
        @Prop({default: 'left'}) public side!: string;
        @Prop({default: () => ['fas', 'briefcase']}) public faIcon!: [];
    }
</script>

<style lang="scss" scoped>
    .co-timeline-block {
        position: relative;
        padding: 40px 30px 30px 0;

        &.is-right {
            padding: 40px 0 30px 30px;
        }

        &__info-title, &__company {
            padding-bottom: 10px;
        }

        &__company {
            color: $gray;
        }

        &__company-name {
            color: $gray-message;
        }

        &__timeline-icon {
            color: $orange;
            font-size: 25px;
            position: absolute;
            top: 38px;
            right: -43px;

            &.is-graduation {
                right: -47px;
            }

            .is-right & {

                &.is-graduation {
                    left: -47px;
                }

                right: auto;
                left: -44px;
            }
        }

    }
</style>
