import { Component } from '@angular/core';

export interface CardApp {
  title: string
  text: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCardsShowed = true

  cards :CardApp[] = [
    {title: 'Card1', text: 'This is first card'},
    {title: 'This is card 2', text: 'This is second card'},
    {title: 'Last card', text: 'This is card 3'},
  ]

  toggleCard() {
    this.isCardsShowed = !this.isCardsShowed
  }
}
