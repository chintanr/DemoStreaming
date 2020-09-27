import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServicesService {
  
  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get('assets/sample.json');
  }
}
