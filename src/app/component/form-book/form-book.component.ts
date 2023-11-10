import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Book } from 'src/app/models/book';



@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.css']
})
export class FormBookComponent {
 
  @Output() addBookEvent = new EventEmitter<Book>();

  newBook:Book = new Book("","","",0,"",0)
  sendNewBook(title, type, author, price, photo){
    this.newBook.title = title.value;
    this.newBook.type = type.value;
    this.newBook.author = author.value;
    this.newBook.price = parseInt(price.value);
    this.newBook.photo = photo.value;
    console.log("emite añadir")
    this.addBookEvent.emit(this.newBook)
  }

  

}
