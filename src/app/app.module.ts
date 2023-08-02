import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BtnComponent } from './components/btn/btn.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgChartsModule } from 'ng2-charts';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { MenuSideComponent } from './components/menu-side/menu-side.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { BinnacleComponent } from './pages/binnacle/binnacle.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {DialogModule} from '@angular/cdk/dialog';
import { ActividadDialogComponent } from './components/actividad-dialog/actividad-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BtnComponent,
    BoardsComponent,
    NavbarComponent,
    ActivitiesComponent,
    MenuSideComponent,
    BinnacleComponent,
    ActividadDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    FontAwesomeModule,
    NgChartsModule,
    CdkAccordionModule,
    DragDropModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
