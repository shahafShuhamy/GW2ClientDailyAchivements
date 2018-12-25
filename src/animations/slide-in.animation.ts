import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideInOut =
trigger('slideInOut', [
  transition(':enter', [
    style({transform: 'translateX(-100%)'}),
    animate('0.5s 300ms ease-in', style({transform: 'translateX(0%)'}))
  ]),
  transition(':leave', [
    animate('0.5s 300ms ease-in', style({transform: 'translateX(-100%)'}))
  ])
]);
