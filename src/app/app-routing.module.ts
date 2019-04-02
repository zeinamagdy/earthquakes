import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { EarthQuakeComponent } from '../app/earth-quake/earth-quake.component';
import { EarthQuakeDetailsComponent } from '../app/earth-quake-details/earth-quake-details.component';

const routes: Routes = [
  {path: '', component: EarthQuakeComponent, pathMatch: 'full'},
  {path: 'detail/:id', component: EarthQuakeDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
