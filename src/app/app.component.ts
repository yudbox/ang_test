import { Component } from '@angular/core';
import { CardApp } from './home/home.component';
import { GlobalData } from './shared/services/global.data.service';
import { NewsService } from './shared/services/news.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GlobalData, NewsService], 
})
export class AppComponent {
  constructor() { }

  ngOnInit(): void {
  }
}
