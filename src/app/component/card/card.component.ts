import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() even:boolean;
  @Input() newBook:boolean;
  @Input () nBook: Book;
  @Output() bookEvent = new EventEmitter<number>();

  constructor(public BooksService:BooksService){}

  xButtonClick(){
    console.log(this.nBook.id_book)
    this.BooksService.delete(this.nBook.id_book)

    // this.bookEvent.emit(this.nBook.id_book)
  }
 
}
