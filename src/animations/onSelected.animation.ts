import { trigger, style, state, transition, animate } from '@angular/animations';

export const onSelected = trigger('Onselected', [
  state('selected', style({
    backgroundColor: 'rgb(240, 239, 194)'
  })),
  state('unSelected', style({
    backgroundColor: 'red'
  })),
  transition('selected => unSelected', [
    animate('1s')
  ]),
  transition('unSelected => selected', [
    animate('2s')
  ])
]);
