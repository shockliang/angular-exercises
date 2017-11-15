import { trigger, state, style, transition, animate, keyframes } from "@angular/animations";

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
    animate('0.5s ease-out', keyframes([
      style({
        offset: .2,
        opacity: 1,
        transform: 'translateX(20px)'
      }),
      style({
        offset: 1,
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
    ])
    )
  ]),
]);