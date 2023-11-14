import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent {
  constructor(public BooksService:BooksService ) {}



  books:Book [] = this.BooksService.getAll()
  bookToEdit:Book;
  bookToUpdate:Book = new Book(null, null, null, null, null, null)

 
  selectedBookIndex: number = -1; // Inicializado con un valor que no corresponderá a ningún índice válido

  onSelect(bookIndex: number): void {
    console.log(bookIndex)
    this.selectedBookIndex = bookIndex;}

  editBook(title:HTMLInputElement, author:HTMLInputElement, type:HTMLInputElement, price:HTMLInputElement, photo:HTMLInputElement):void{
     
  //   console.log('editBook function called');
  // const titleValue = titleElement.value;
  // console.log(titleValue);
    
    this.bookToEdit = this.books[this.selectedBookIndex]
    console.log(this.bookToEdit)
    console.log(parseInt(price.value))

    this.bookToEdit.title = title.value != ""? title.value:this.bookToEdit.title;
    this.bookToEdit.type = type.value !== ""? type.value:this.bookToEdit.type;
    this.bookToEdit.author = author.value !== ""? author.value:this.bookToEdit.author;
    this.bookToEdit.price = price.value !== ""? parseInt(price.value):this.bookToEdit.price;
    this.bookToEdit.photo = photo.value !== ""? photo.value:this.bookToEdit.photo;

    console.log(this.bookToEdit)
    this.BooksService.edit(this.bookToEdit)

  }


  updateBook(form:NgForm){
    this.bookToUpdate
    this.bookToEdit = this.books[this.selectedBookIndex]

    this.bookToEdit.title = this.bookToUpdate.title != null? this.bookToUpdate.title:this.bookToEdit.title;
    this.bookToEdit.type = this.bookToUpdate.type != null? this.bookToUpdate.type:this.bookToEdit.type;
    this.bookToEdit.author = this.bookToUpdate.author != null? this.bookToUpdate.author:this.bookToEdit.author;
    this.bookToEdit.price = this.bookToUpdate.price != null? this.bookToUpdate.price:this.bookToEdit.price;
    this.bookToEdit.photo = this.bookToUpdate.photo != null? this.bookToUpdate.photo:this.bookToEdit.photo;

    this.BooksService.edit(this.bookToEdit)

  }

    
}
