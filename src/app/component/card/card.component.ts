import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input () nBook: Book;
  
  constructor(private cardComponent: CardComponent) {}
  
  xDelete():void{
    this.cardComponent.deleteBook(this.nBook)
  }
 
}
