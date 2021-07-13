import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { NotFoundComponent } from './not-found/not-found.component';


registerLocaleData(localeRu, 'ru')
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent,
    HomeComponent,
    AboutComponent,
    NewsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



// модуль это класс у которого есть Декоратор NgModule. Все свойства являються массивами
// в declarations - указываются компоненты которые используются в этом модуле (Component, Directive, Pipe)
// в imports - помещаются другие модули
// в providers - помещаем Сервисы, есть возможность поместить Сервис внутри Component
// в bootstrap - нужно для того чтоб указать какой компонент будет корневым и в нем будут рисоваться дочерние компоненты
