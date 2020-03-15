// @ts-ignore
import ScrollReveal from 'scrollreveal';

export class ScrollRevealService {

    public static init() {
        ScrollReveal().reveal('.js-scrollreveal-left', this.scrollConfig);
        ScrollReveal().reveal('.js-scrollreveal-bottom', Object.assign({}, this.scrollConfig, {
            origin: 'bottom',
            rotate: {
                x: 20,
                z: 20,
            },
        }));
    }

    private static scrollConfig: any = {
        distance: '100%',
        origin: 'left',
        opacity: 0,
        delay: 400,
        duration: 550,
        easing: 'ease-in-out',
        scale: 0.85,
        mobile: false,
        interval: 100,
    };
}
