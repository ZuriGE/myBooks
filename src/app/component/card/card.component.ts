import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Response } from 'src/app/models/response';
import { Router } from '@angular/router';

import swal from 'sweetalert2'

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

  constructor(public BooksService:BooksService, private router: Router) {}




   xButtonClick(){
   
    console.log(this.nBook.id_book)

    
      this.BooksService.delete(this.nBook.id_book).subscribe((res:Response)=>{
         this.BooksService.getAll()
      
        if (!res.error){
        
     
          swal.fire({
          title: `Libro eliminado`,
          text: `El libro '${this.nBook.title}' con ID '${this.nBook.id_book}'ha sido eliminado de la base de datos.`,
          icon: "success",
          confirmButtonColor: '#fd8945',
          background:'#d4d1ce',
          iconColor: 'green'
        }).then(()=>{
          window.location.reload()
        });
       
        
       
      }
    })

    
    // this.BooksService.delete(this.nBook.id_book)

    // this.bookEvent.emit(this.nBook.id_book)
  }

  
 
}
