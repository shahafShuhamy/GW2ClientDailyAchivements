import { Achivement } from './achivement/achivement.model';

export class AchivementsService {
  achivements: Achivement[] = [
  new Achivement('PVE', 'content for pve 1', 'requiere pve 1'),
  new Achivement('PVE', 'content for pve 2', 'requiere pve 2'),
  new Achivement('PVP', 'content for pvp 1', 'requiere pvp 1'),
  new Achivement('PVP', 'content for pvp 2', 'requiere pvp 2'),
  new Achivement('PVP', 'content for pvp 3', 'requiere pvp 3'),
  new Achivement('WVW', 'content for wvw 1', 'requiere wvw 1'),
  new Achivement('WVW', 'content for wvw 2', 'requiere wvw 2')
 ];
 constructor() {}

 getAchivements() {
   // this should be a http service call to server bringing dailies achivements -> now have a demo.
   return this.achivements;
 }
}
