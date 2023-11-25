import { Component, EventEmitter, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Router, ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/shared/books.service';
import { Response } from 'src/app/models/response';
import { Observable } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';
import swal from 'sweetalert2';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  
})
export class BooksComponent implements OnInit {
  public books:Book[]
  myUser = this.userService.user
  id_user = this.myUser.id_user

 ngOnInit(){
  this.route.paramMap.subscribe(params => {
    
    this.routeChange();

  });
 
}

routeChange(){
  
  this.getAllBooks()
}

//meto apiService en el contructor para no liar con la forma de antes 
constructor(private router:Router, public BooksService:BooksService, public apiService:BooksService, private route:ActivatedRoute, private userService: UserService, private chnDetchangeDetector: ChangeDetectorRef ) {
  // this.apiService.books=null --> No sé que hace esta parte pero me da error
}

formVisible:Boolean = false;

//libro ficticio para dar formato al botón
templateNewBook:Book = new Book("NUEVO LIBRO","","Pulsa para añadir", 0,  "/assets/img/newBook.jpg")

//con API

getAllBooks(){
  console.log("entra en books-component")
  this.BooksService.getAll(this.id_user).subscribe((res:Response)=>{
    if (res.error === false) {
      this.books = res.data;
      console.log(res.data)
    } else {
      console.log(res.error)
      console.log(res)
      console.log('Error');
    }
  })
}

  filter(id:number){
    console.log(id)
    if(id===0){
      this.getAllBooks()
    }else{
      this.BooksService.getOne(this.id_user, id).subscribe((res:Response)=>{
        if (res.error === false) {
          this.books = res.data;
        } else {
          swal.fire({
            title: `ERROR:`,
            text: `no se ha encontado nigún libro con ID '${id}' en la base de datos.`,
            icon: "error",
            confirmButtonColor: '#fd8945',
            background:'#d4d1ce',
            iconColor: 'red'
          })
        }
      })
    }
  }

  goToAddBook(){
    this.router.navigate(['/add-book'])
  }
}
