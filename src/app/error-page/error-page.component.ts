import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { fadeInAnimation } from './../../animations/index';
import { AppConfig } from '../config';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
  animations: [fadeInAnimation]
})
export class ErrorPageComponent implements OnInit {
  devMode = new AppConfig().getDevMode();
  message: String;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe( (data: Data) => {
      this.message = data['message'];
      console.log('not found page');
    });
  }

}
