<template>
    <div class="co-project-info">

        <div class="co-project-info__main-info-wrapper">
            <p
                class="co-project-info__main-info u-a4 js-scrollreveal-left"
                v-for="paragraph in projectInfo.paragraphs"
                :key="paragraph"
            >
                {{paragraph}}
            </p>
        </div>

        <div
            class="co-project-info__link-wrapper"
            v-if="linkExists"
        >
            <span class="co-project-info__link-key">Link: </span>
            <AppLink
                class="co-project-info__link u-a4 js-scrollreveal-bottom"
                :content="projectInfo.linkInfo.content"
                :href="projectInfo.linkInfo.link"
            />
        </div>

        <div class="co-project-info__tech-wrapper">
            <h3 class="co-project-info__tech-title u-a3">_Tech used:</h3>
            <p
                class="co-project-info__tech u-a4 js-scrollreveal-left"
                v-for="tech in projectInfo.techs"
                :key="tech"
            >
                <fa :icon="['fas', 'code']"></fa>
                {{tech}}
            </p>
        </div>

        <BackHomeButton/>

    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator';
    import AppLink from '@/components/AppLink.vue';
    import {ProjectInfoInterface} from '@/interfaces/ProjectInfo';
    import BackHomeButton from '@/components/BackHomeButton.vue';

    @Component({
        name: 'ProjectInfo',
        components: {BackHomeButton, AppLink},
    })
    export default class ProjectInfo extends Vue {
        @Prop({required: true}) public projectInfo!: ProjectInfoInterface;

        public get linkExists(): boolean {
            if (this.projectInfo.linkInfo === undefined) {
                return false;
            }

            return Object.keys(this.projectInfo.linkInfo).length > 0;
        }
    }
</script>

<style lang="scss" scoped>
    .co-project-info {
        padding: 0 percentage(6 / 24) 50px;
        color: $black;

        @include media('<=tablet') {
            padding: 0 percentage(1 / 24) 50px;
        }

        &__main-info {
            padding-bottom: 20px;
            color: $gray-message;
        }

        &__link-wrapper {
            padding: 0 0 20px;
        }

        &__link-key {
            color: $gray;
        }

        &__tech-wrapper {
            padding-bottom: 20px;
        }

        &__tech {
            color: $gray;
        }

        &__tech-title {
            padding-bottom: 10px;
        }

        &__tech {
            padding-bottom: 5px;
        }

    }
</style>
