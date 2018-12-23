import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { fadeInAnimation } from './../../animations/index';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
  animations: [fadeInAnimation]
})
export class ErrorPageComponent implements OnInit {
  message: String;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe( (data: Data) => {
      this.message = data['message'];
      console.log('not found page');
    });
  }

}
