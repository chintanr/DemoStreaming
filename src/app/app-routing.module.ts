import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent},
  { path: 'Movies', component: MoviesComponent},
  { path: 'Series', component: SeriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
