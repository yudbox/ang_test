import { Component, OnInit } from '@angular/core';
import { GlobalData } from '../shared/services/global.data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public newsData: Array<any> = []
  
  constructor(private globalData: GlobalData) {   // добавили сервис в приватную переменную globalData, это можно делать тк наш сервис помечен дикоратором Injectable
    this.newsData = globalData.getNews()  // применили метод сервиса и положили его в другую переменную
   }
  
  ngOnInit(): void {
  }

}
