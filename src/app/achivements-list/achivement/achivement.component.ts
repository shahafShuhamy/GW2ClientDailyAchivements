import { Component, OnInit, Input } from '@angular/core';
import { Achivement } from './achivement.model';

@Component({
  selector: 'app-achivement',
  templateUrl: './achivement.component.html',
  styleUrls: ['./achivement.component.scss']
})
export class AchivementComponent implements OnInit {
  @Input() achivement: Achivement;
  constructor() { }

  ngOnInit() {
  }

}
