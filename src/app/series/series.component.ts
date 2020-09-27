import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  data: any;
  entries: any;
  series;
  movies;
  programType;
  temp: any;

  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    await this.service.getData().subscribe(res => {
      if (res) {
        this.hide();
      }
      console.log("res", res);
      this.data = res;
      this.getSeries();
    });
  }

  async getSeries() {
    this.entries = [];
    this.series = [];
  
    for (let i = 0; i < this.data.entries.length; i++) {
      if (this.data.entries[i].programType == 'series') {
        if (this.data.entries[i].releaseYear >= 2010){
          this.series.push(this.data.entries[i]);
        }
      }
    }
  }

  hide() {
    let elem = <HTMLParagraphElement>document.getElementById('loading');
    elem.style.display = 'none';
  }


}
