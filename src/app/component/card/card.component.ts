import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Response } from 'src/app/models/response';
import { Router } from '@angular/router';
import swal from 'sweetalert2'
import { UserService } from 'src/app/shared/user.service';

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

  myUser = this.userService.user
  id_user = this.myUser.id_user

  bookDeleted: boolean = false

  constructor(public BooksService:BooksService, private router: Router, private userService: UserService) {}

   xButtonClick(){
    console.log('card'+this.nBook.id_book)
    console.log('user'+(this.id_user))
      this.BooksService.delete(this.nBook.id_book).subscribe((res:Response)=>{

         this.BooksService.getAll(this.id_user)
      
        if (!res.error){
          this.router.navigate(['books'])
     
          swal.fire({
          title: `Libro eliminado`,
          text: `El libro '${this.nBook.title}' con ID '${this.nBook.id_book}'ha sido eliminado de la base de datos.`,
          icon: "success",
          confirmButtonColor: '#fd8945',
          background:'#d4d1ce',
          iconColor: 'green'
        }).then(()=>{
          this.bookDeleted=true
          this.router.navigate(['add-book'])
              }).then(()=>{
                this.router.navigate(['books'])
              });
      }
    })
  } 
}
