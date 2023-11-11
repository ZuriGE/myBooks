import { Component, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/shared/books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

constructor(private router:Router, public BooksService:BooksService ) {}

formVisible:Boolean = false;

//libro ficticio para dar formato al botón
templateNewBook:Book = new Book("NUEVO LIBRO","","Pulsa para añadir", 0,  "/assets/img/newBook.jpg")

books:Book [] = this.BooksService.getAll()


  
deletedBooks: Book[] = []

// deleteBook(book:Book){
//   const index = this.books.indexOf(book);
//   this.deletedBooks.push(this.books[index])
//   this.books.splice(index,1)

// }
deleteBook(id_book:number){
  console.log("books component funciona")
 this.BooksService.delete(id_book)
 this.books = this.BooksService.getAll()

}

registerNewBook(book:Book){
  let bookToAdd:Book = book
  this.formVisible = false
  // this.formVisible = book[Object.keys(book)[1]]
  this.books.push(bookToAdd)
}

//router link para ir al formulario de añadir libros
goToAddBook(){
  this.router.navigate(['/add-book'])
}

filter(id:number):void{
  
  if (id==0){
    this.books = this.BooksService.getAll()
  }else if(this.books.findIndex((b)=> b.id_book ===id) ==-1){
    window.alert("No se ha encontrado nigún libro con esa ID")
  }else{
    this.books=[];
    this.books.push(this.BooksService.getOne(id))
  }
 
}


}
