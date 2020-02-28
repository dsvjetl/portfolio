<template>
    <div class="co-work">

        <h5 class="co-work__title u-a2 --bold">_Projects</h5>
        <p class="co-work__subtitle u-a4">This are some of my latest projects.</p>

        <div class="co-work__wrapper">
            <ProjectBlock
                class="co-work__project-block"
                :title="'Al-Salem Cultural Centre'"
                :description="'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'"
            />
            <ProjectBlock
                class="co-work__project-block"
                :title="'Al-Salem Cultural Centre'"
                :description="'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'"
            />
            <ProjectBlock
                class="co-work__project-block"
                :title="'Al-Salem Cultural Centre'"
                :description="'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'"
            />
            <ProjectBlock
                class="co-work__project-block"
                :title="'Al-Salem Cultural Centre'"
                :description="'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'"
            />
            <ProjectBlock
                class="co-work__project-block"
                :title="'Al-Salem Cultural Centre'"
                :description="'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import ProjectBlock from '@/components/ProjectBlock.vue';

    @Component({
        name: 'Work',
        components: {ProjectBlock},
    })
    export default class Work extends Vue {

    }
</script>

<style lang="scss" scoped>
    .co-work {
        padding: 50px 0;
        width: 100%;
        background-color: $orange;

        &__title {
            text-align: center;
            color: $white;
            padding-bottom: 10px;
        }

        &__subtitle {
            font-weight: normal;
            color: $gray-message;
            text-align: center;
        }

        &__wrapper {
            display: flex;
            flex-wrap: wrap;
            position: relative;
            padding: 30px percentage(4 / 20) 0;
            justify-content: space-evenly;
        }

        &__project-block {
            display: block !important;
            width: 24%;
            height: 150px;
            margin-bottom: 10px;
        }

    }
</style>
