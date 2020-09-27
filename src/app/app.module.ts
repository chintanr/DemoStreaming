import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';
import { MoviesComponent } from './movies/movies.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ServicesService } from './services.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SeriesComponent,
    MoviesComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
