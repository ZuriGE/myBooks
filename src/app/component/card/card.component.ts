import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() even:boolean;
  @Input() newBook:boolean;
  @Input () nBook: Book;
  @Output() bookEvent = new EventEmitter<Book>();

  constructor(){}

  xButtonClick(){
    this.bookEvent.emit(this.nBook)
  }
 
}
