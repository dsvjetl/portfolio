import {library} from '@fortawesome/fontawesome-svg-core';
import {faUserSecret} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {VueConstructor} from 'vue';

export class FontAwesomeInitializer {
    private vue: any;

    constructor(vue: VueConstructor) {
        this.vue = vue;

        this.initializeIcons();
    }

    private initializeIcons() {
        library.add(faUserSecret);
        library.add(faLinkedin);

        this.vue.component('fa', FontAwesomeIcon);
    }
}
