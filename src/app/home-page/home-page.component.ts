import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition, query, stagger} from '@angular/animations';
import { onSelected, fadeInAnimation } from './../../animations/index';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [onSelected, fadeInAnimation]
})
export class HomePageComponent implements OnInit {
  selected = true;
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.selected = !this.selected;
  }

}
