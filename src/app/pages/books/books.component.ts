import { Component, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Router, ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/shared/books.service';
import { Response } from 'src/app/models/response';
import { Observable } from 'rxjs';


import swal from 'sweetalert2';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  
})
export class BooksComponent {
  public books:Book[]
 ngOnInit(){
  this.route.paramMap.subscribe(params => {
    
    this.routeChange();

  });

  
}

routeChange(){
  console.log('carga')
  this.getAllBooks()
}

//meto apiService en el contructor para no liar con la forma de antes 
constructor(private router:Router, public BooksService:BooksService, public apiService:BooksService, private route:ActivatedRoute ) {
  // this.apiService.books=null --> No sé que hace esta parte pero me da error
}

formVisible:Boolean = false;

//libro ficticio para dar formato al botón
templateNewBook:Book = new Book("NUEVO LIBRO","","Pulsa para añadir", 0,  "/assets/img/newBook.jpg")

//con API
// getAllBooks(): Observable<Object> {
//   return this.BooksService.getAll();
// }
getAllBooks(){
  this.BooksService.getAll().subscribe((res:Response)=>{
    if (res.error === false) {
      this.books = res.data;
    } else {
      console.log('Error');
    }
  })
}

filter(id:number){
  console.log(id)
  if(id===0){
    this.getAllBooks()
  }else{
    this.BooksService.getOne(id).subscribe((res:Response)=>{
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



  
deletedBooks: Book[] = []

// deleteBook(book:Book){
//   const index = this.books.indexOf(book);
//   this.deletedBooks.push(this.books[index])
//   this.books.splice(index,1)

// }
deleteBook(id_book:number){
this.apiService.delete(id_book).subscribe((res:Response)=>{
  console.log(res)
  
    alert(res.message)
  })
}

// deleteBook(id_book:number){
//   console.log("books component funciona")
//  this.BooksService.delete(id_book)
//  this.books = this.BooksService.getAll()

// }

// registerNewBook(book:Book){
//   let bookToAdd:Book = book
//   this.formVisible = false
//   // this.formVisible = book[Object.keys(book)[1]]
//   // this.books.push(bookToAdd)
// }

//router link para ir al formulario de añadir libros
goToAddBook(){
  this.router.navigate(['/add-book'])
}

// filter(id:number):void{
  
//   if (id==0){
//     // this.books = this.BooksService.getAll()
//   // }else if(this.books.findIndex((b)=> b.id_book ===id) ==-1){
//     window.alert("No se ha encontrado nigún libro con esa ID")
//   }else{
//     // this.books=[];
//     // this.books.push(this.BooksService.getOne(id))
//   }
 
// }


}
