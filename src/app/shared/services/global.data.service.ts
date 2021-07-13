import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalData {


    constructor() { }
    
    public getNews(): Array<any> {
        return [
            { title: 'sunny', text: 'very good' },
            { title: 'cloudy', text: 'anyway happy' },
            { title: 'rain', text: 'sadding weather' },
        ]
    }
}
//Dependency injection - внедрение зависимостей, т.е присвоение переменным данных из Сервиса
// Injector (Инжектор) - это внешний источник в кототором Ангуляр создает сервисы  откуда компоненты могут брать данные для переменных(экземпляры класса), т.е. внешнее хранилище
//Injectable - это дикоратор который говорит что созданыый класс (сервис) управляется при помощи Injector
//Service - это класс в котором реализуется общая логика

//Способ добавления
//1. Сгенеривать сервис с помощью ng g s (generate service) ./root/file-name
//2. Зарезестрировать сервис в разделе providers: [] (на уровне компонента либо модуля)
//
//
// 3. В конструкторе компоненты добавляем наш сервис и присваиваем нашей компоненте значения сервиса через его методы