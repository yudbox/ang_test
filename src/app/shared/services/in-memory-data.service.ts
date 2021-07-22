import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const weather = [
      { title: 'sunny', text: 'very good' },
      { title: 'cloudy', text: 'anyway happy' },
      { title: 'rain', text: 'sadding weather' },
  ]
    return {weather};
  }
  constructor() { }
}
