import { trigger, state, style, transition, animate } from "@angular/animations";

export let fade = trigger('fade', [
    state('void', style({ opacity: 0 })),

    transition(':enter, :leave', [  // void <=> *
        animate(500)
    ]),
]);

export let slide = trigger('slide', [
    transition(':enter', [
        style({ transform: 'translateX(-10px)' }),
        animate(250),
    ]),

    transition(':leave', [
        animate('0.5s cubic-bezier(.15,.91,1,.63)', style({ transform: 'translateX(-100%)' }))
    ]),
]);