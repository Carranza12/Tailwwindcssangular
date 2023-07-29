import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { BinnacleComponent } from './pages/binnacle/binnacle.component';

const routes: Routes = [
  {
    path:'login', component: LoginComponent
  },
  {
    path: 'boards', component: BoardsComponent
  },
  {
    path: 'activities', component: ActivitiesComponent
  },
  {
    path: 'binnacle', component: BinnacleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
