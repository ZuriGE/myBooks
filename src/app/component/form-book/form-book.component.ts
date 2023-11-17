import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Response } from 'src/app/models/response';
import swal from 'sweetalert2'



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
    
    

    this.BooksService.add(this.newBook)

      }
  //comentado para usar API
      // addBook(form:NgForm){
      //   this.BooksService.add(this.newBook)
      // }


      addBook(form:NgForm){

        
          this.BooksService.add(this.newBook).subscribe((res:Response)=>{
          
          console.log(res)
          if (res.error === false) {
            console.log('OK')
            
            swal.fire({
                    title: `Libro añadido`,
                    text: `El libro '${this.newBook.title}' ha sido añadido a la base de datos.`,
                    icon: "success",
                    confirmButtonColor: '#fd8945',
                    background:'#d4d1ce',
                    iconColor: 'green'
                  })
          } else if(res.message===`id already exists`){{//
            console.log('fallo')
            swal.fire({
                    title: `ERROR:\nEl libro '${this.newBook.title}' NO se ha añadido`,
                    text: `La ID '${this.newBook.id_book}' ya está en uso. Puedes volver a intentarlo cambiando la ID por '${res.data[0].id_book}'`,
                    icon: "error",
                    confirmButtonColor: '#fd8945',
                    background:'#d4d1ce',
                    iconColor: 'red'
                  })
          }}else{
            console.log('error')
          }
            
          
        })
        }

        
      }



