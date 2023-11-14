import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { FormsModule, NgForm } from '@angular/forms';



@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.css']
})
export class FormBookComponent {
  constructor(public BooksService:BooksService){}
 
  @Output() addBookEvent = new EventEmitter<Book>();

  newBook:Book = new Book(null, "", null, null, null, null)
  // sendNewBook(title, type, author, price, id_book, photo){
  //   this.newBook.title = title.value;
  //   this.newBook.type = type.value;
  //   this.newBook.author = author.value;
  //   this.newBook.price = parseInt(price.value);

  //   this.newBook.id_book = id_book.value;
  //   this.newBook.photo = photo.value;
  //   console.log("emite añadir")
  //   this.addBookEvent.emit(this.newBook)
  // }

    sendNewBook(title, type, author, price, id_book, photo){

    this.newBook.title = title.value;
    this.newBook.type = type.value;
    this.newBook.author = author.value;
    this.newBook.price = parseInt(price.value);
    this.newBook.id_book = parseInt(id_book.value);
    this.newBook.photo = photo.value;
    
    
    // this.addBookEvent.emit(this.newBook)
    this.BooksService.add(this.newBook)

      }
  
      addBook(form:NgForm){
        this.BooksService.add(this.newBook)
      }


}
