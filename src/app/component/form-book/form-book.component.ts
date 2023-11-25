import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Response } from 'src/app/models/response';
import swal from 'sweetalert2'
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.css']
})
export class FormBookComponent {
  myUser = this.userService.user
 id_user = this.myUser.id_user

  constructor(public BooksService:BooksService, private userService:UserService){}
 
  @Output() addBookEvent = new EventEmitter<Book>();

  newBook:Book = new Book(null, "", null, null, null, null, this.id_user)
  
  sendNewBook(title, type, author, price, id_book, photo){

    this.newBook.title = title.value;
    this.newBook.type = type.value;
    this.newBook.author = author.value;
    this.newBook.price = parseInt(price.value);
    this.newBook.id_book = parseInt(id_book.value);
    this.newBook.photo = photo.value;
   
    this.BooksService.add(this.newBook)


  }
  addBook(form:NgForm){
       
    this.BooksService.add(this.newBook).subscribe((res:Response)=>{
 
      if (res.error === false) {          
        swal.fire({
          title: `Libro añadido`,
          text: `El libro '${this.newBook.title}' ha sido añadido a la base de datos.`,
          icon: "success",
          confirmButtonColor: '#fd8945',
          background:'#d4d1ce',
          iconColor: 'green'
        })

      } else if(res.code===1){{
        console.log('fallo')
        swal.fire({
          title: `ERROR:`,
          text: `El libro '${this.newBook.title}' ya existe para el usuario ${this.myUser.name} ${this.myUser.last_name}`,
          icon: "error",
          confirmButtonColor: '#fd8945',
          background:'#d4d1ce',
          iconColor: 'red'
        })
      }
      }else{
        console.log('error')
      }
    })
  }   
}



