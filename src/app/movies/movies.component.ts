import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  data: any;
  entries: any;
  movies;
  programType;

  constructor(private service: ServicesService) { }

  ngOnInit() {
    let elem = <HTMLParagraphElement>document.getElementById('error');
    elem.style.display = 'none';
    this.getData();
  }

  async getData() {
    await this.service.getData().subscribe(res => {
      if (res) {
        this.hide();
      }
      console.log("res", res);
      this.data = res;
      this.getMovies();
      console.log(this.movies);
    },
      error => {
        this.show();
      });
  }

  async getMovies() {
    this.entries = [];
    this.movies = [];

    for (let i = 0; i < this.data.entries.length; i++) {
      if (this.data.entries[i].programType == 'movie') {
        if (this.data.entries[i].releaseYear >= 2010) {
          this.movies.push(this.data.entries[i]);
        }
      }
    }
  }

  hide() {
    let elem = <HTMLParagraphElement>document.getElementById('loading');
    elem.style.display = 'none';
  }

  show() {
    let elem = <HTMLParagraphElement>document.getElementById('error');
    elem.style.display = 'block';
  }



}
