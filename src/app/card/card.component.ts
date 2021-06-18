import { Component, Input, OnInit } from '@angular/core' // Component, Input  Это дикоратор
import { CardApp } from '../app.component' 

// template: `
// <div class="card">
//     <h2>Card Component </h2>
//     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, ad?</p>
// </div>
// `,
// styles: [
//     `
//     .card {
//         padding: .5rem 1rem;
//         border: 1px dashed #ccc;
//         color: #444;
//         margin-bottom: 1rem;
//     }
//     `
// ]

@Component({
    selector: 'app-card',
    templateUrl:'./card.component.html',
    styleUrls: ['./card.component.scss'],
    interpolation: ['{{', '}}'],       // так можно указывать начало и конец интерполяции, например '[[', ']]'
})

export class CardComponent implements OnInit {

    @Input() cardIns: CardApp = {title:'', text:''};
    @Input() cardIndex: number = 1;
    
    
    title = 'My card title'
    text: string = 'this is subtitle'   // можно явно указывать типы, но для примитивов не обязятельно

    cardNumber: number = 5

    imgUrlAng = 'https://img1.freepng.ru/20180329/jue/kisspng-angularjs-dart-front-and-back-ends-npm-escalator-5abda7d6ba62f5.4348649815223787107634.jpg'
    imgUrlVue = 'https://banner2.cleanpng.com/20180718/cbh/kisspng-vue-js-javascript-library-angularjs-react-vue-js-5b4ebe1bc45884.1915769815318871318042.jpg'

    cardDate: Date = new Date()

    cardData = {
        name: 'card',
        fields: {
            collor:'yellow',
            size: 5
        }
    }

    disabledButton = false

    collorSubtitle = 'black'

    ngOnInit() {
        setTimeout(()=> {
            this.imgUrlAng = this.imgUrlVue
            this.disabledButton = true
        }, 2500)
        
    }

    changeTitle() {
        this.cardIns.title = 'Title has been changed'
    }

    inputHandler(event: any) {
        const valueInput = event.target.value
        console.log('valueInput', valueInput);
        this.cardIns.title = valueInput
    }

    inputHandlerSecond(valueInput: string) {
        console.log('valueInput', valueInput);
        this.cardIns.title = valueInput
    }

    inputChangeHandler() {
        console.log(this.cardIns.title);
        
    }

    getInfo():string {
        return 'This is my info'
    }


 }