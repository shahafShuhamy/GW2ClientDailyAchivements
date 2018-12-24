import { Component, OnInit, Injectable } from '@angular/core';
import { Achivement } from './achivement/achivement.model';
import { AchivementsService } from './achivements.service';

@Component({
  selector: 'app-achivements-list',
  templateUrl: './achivements-list.component.html',
  styleUrls: ['./achivements-list.component.scss']
})
@Injectable()
export class AchivementsListComponent implements OnInit {
  achivements: Achivement[];
  constructor(private achivementsService: AchivementsService) { }

  ngOnInit() {
    this.achivements = this.achivementsService.getAchivements();
  }

}
