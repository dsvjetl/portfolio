import {library} from '@fortawesome/fontawesome-svg-core';
import {faUserSecret, faBriefcase, faGraduationCap, faCode, faArrowLeft, faArrowCircleUp, faFile} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {VueConstructor} from 'vue';

export class FontAwesomeInitializer {
    private vue: VueConstructor;

    constructor(vue: VueConstructor) {
        this.vue = vue;

        this.initializeIcons();
    }

    private initializeIcons() {
        library.add(faUserSecret);
        library.add(faLinkedin);
        library.add(faBriefcase);
        library.add(faGraduationCap);
        library.add(faCode);
        library.add(faArrowLeft);
        library.add(faGithubSquare);
        library.add(faArrowCircleUp);
        library.add(faFile);

        this.vue.component('fa', FontAwesomeIcon);
    }
}
