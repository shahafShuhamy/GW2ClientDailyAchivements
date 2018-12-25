import { Component, OnInit, Injectable } from '@angular/core';
import { Achivement } from './achivement/achivement.model';
import { AchivementsService } from './achivements.service';
import { slideInOut, fadeInAnimation } from 'src/animations';

@Component({
  selector: 'app-achivements-list',
  templateUrl: './achivements-list.component.html',
  styleUrls: ['./achivements-list.component.scss'],
  animations: [slideInOut, fadeInAnimation]
})
@Injectable()
export class AchivementsListComponent implements OnInit {
  achivements: Achivement[];
  constructor(private achivementsService: AchivementsService) { }

  ngOnInit() {
    this.achivements = this.achivementsService.getAchivements();
  }

}
