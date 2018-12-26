import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule} from '@angular/material/list';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AchivementsListComponent } from './achivements-list/achivements-list.component';
import { AchivementComponent } from './achivements-list/achivement/achivement.component';
import { AchivementsService } from './achivements-list/achivements.service';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    HomePageComponent,
    AchivementsListComponent,
    AchivementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule
  ],
  exports: [ MatButtonModule, MatCheckboxModule, MatGridListModule, MatListModule ],
  providers: [AchivementsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
