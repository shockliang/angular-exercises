import { trigger, state, style, transition, animate } from "@angular/animations";

export let fade = trigger('fade', [
    state('void', style({ opacity: 0 })),

    transition(':enter, :leave', [  // void <=> *
        animate(500)
    ]),
]);

export let slide = trigger('slide', [
    state('void', style({ transform: 'translateX(-20px)' })),
    
    transition('void => *', [
        animate(250),
    ]),

    transition('* => void', [
        animate(100, style({ transform: 'translateX(-1000px)' }))
    ]),
]);