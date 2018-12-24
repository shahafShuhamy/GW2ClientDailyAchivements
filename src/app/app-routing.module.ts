import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AchivementsListComponent } from './achivements-list/achivements-list.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'not-found', component: ErrorPageComponent , data: {message: 'page not found!!'}},
  {path: 'achivements', component: AchivementsListComponent},
  {path: '**', redirectTo: '/not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
