import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { BooksComponent } from '../pages/books/books.component';

import swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})



export class BooksService {
  private books:Book[] = [
    new Book("El misterio de la cripta embrujada", "Tapa dura", "Eduardo Mendoza", 15.75, "/assets/img/book1.webp", 1),
    new Book("Ceniza en la boca", "Tapa blanda", "Brenda Navarro", 10.50, "/assets/img/book2.jpg", 2),
    new Book("Lo peor de todo", "Edición de bolsillo", "Ray Loriga", 12.99, "/assets/img/book3.jpg", 3),
    new Book("Supersaurio", "Tapa dura", "Meryem El Mehdati", 18.00, "/assets/img/book4.jpg", 4),
    new Book("Todo el azul del cielo", "Tapa blanda", "Mélissa Da Costa", 11.75, "/assets/img/book5.jpg", 5),
    new Book("Mindfulness para asesinos", "Edición de bolsillo", "Karsten Dusse", 14.00, "/assets/img/book6.jpg", 6),
    new Book("El evangelio del nuevo mundo", "Tapa dura", "Maryse Condé", 17.54, "/assets/img/book7.jpg", 7),
    new Book("Lengua de madera", "Tapa blanda", "Hilario Barrero", 19.00, "/assets/img/book8.jpg", 8),
    new Book("Hotel de cristal", "Edición de bolsillo", "Emily St. John Mandel", 9.99, "/assets/img/book9.jpg", 9),
    new Book("La mitad evanescente", "Tapa dura", "Britt Bennett", 14.55, "/assets/img/book10.jpg", 10),
    new Book("Más allá de mi reino", "Tapa blanda", "Yaa Gyasi", 11.49, "/assets/img/book11.jpg", 11),
    new Book("Hamnet", "Edición de bolsillo", "Maggie O'Farrell", 13.00, "/assets/img/book12.jpg", 12),
    new Book("La cara en el abismo", "Tapa dura", "Abraham Merritt", 16.79, "/assets/img/book13.jpg", 13),
    new Book("El evangelio según Jesucristo", "Tapa blanda", "José Saramago", 12.99, "/assets/img/book14.jpg", 14),
    new Book("Paraíso", "Edición de bolsillo", "Abdulrazak Gurnah", 15.66, "/assets/img/book15.jpg", 15),
    new Book("El lunes nos querrán", "Tapa dura", "Nahat El Hachmi", 14.85, "/assets/img/book16.jpg", 16),
    new Book("Nuestra parte de noche", "Tapa blanda", "Mariana Enríquez", 10.99, "/assets/img/book17.jpg", 17),
    new Book("Todos en mi familia han matado a alguien", "Edición de bolsillo", "Benjamin Stevenson", 19.47, "/assets/img/book18.jpg", 18),
    new Book("Te di ojos y miraste las tinieblas", "Tapa dura", "Irene Solà", 16.49, "/assets/img/book19.jpg", 19),
    new Book("Mi año de descanso y relajación", "Tapa blanda", "Ottessa Moshfegh", 11.79, "/assets/img/book20.jpg", 20),
    new Book("Vamos a morir todos", "Edición de bolsillo", "Emily Austin", 15.25, "/assets/img/book21.jpg", 21),
    new Book("El hombre hembra", "Tapa dura", "Joana Russ", 17.99, "/assets/img/book22.jpg", 22)
];


  //devuelve todos los libros
  public getAll():Book[] {
    return this.books
  }

   //devuelve un libro buscado por su número de id
   public getOne(id_book:number):Book{
    const index = this.books.findIndex((b)=> b.id_book ===id_book)
    const bookFilteredById:Book = this.books[index]
    return bookFilteredById
   } 

   //añade un libro
   add(book:Book):void{
    const index = this.books.findIndex((b)=> b.id_book ===book.id_book)
    if(index ==-1){
      this.books.push(book)
     
      swal.fire({
        title: `Libro añadido`,
        text: `El libro '${book.title}' ha sido añadido a la base de datos.`,
        icon: "success",
        confirmButtonColor: '#fd8945',
        background:'#d4d1ce',
        iconColor: 'green'
      });
    }else{
      const proposedId = 1+ this.books.reduce((currentBook, nextBook) => (currentBook.id_book > nextBook.id_book ? currentBook : nextBook)).id_book;

      swal.fire({
        title: `ERROR:\nEl libro '${book.title}' NO se ha añadido`,
        text: `La ID '${book.id_book}' ya está en uso. Puedes volver a intentarlo cambiando la ID por '${proposedId}'`,
        icon: "error",
        confirmButtonColor: '#fd8945',
        background:'#d4d1ce',
        iconColor: 'red'
      });

    }


   }

    //editar libro
    edit(book:Book):Boolean{
      const index = this.books.findIndex((b)=> b.id_book ===book.id_book)
      this.books.splice(index, 1, book);
      swal.fire({
        title: `Libro editado`,
        text: `Los datos del libro '${book.title}' se han actualizado correctamente.`,
        icon: "success",
        confirmButtonColor: '#fd8945',
        background:'#d4d1ce',
        iconColor: 'green'
      });
      // window.alert(`Los datos del libro '${book.title}' han sido actualizados`)
      return true

    }

    //borrar libro
    delete(id_book:number):Boolean{
      const index = this.books.findIndex((b)=> b.id_book ===id_book)
      console.log(index)
      this.books.splice(index, 1);
      
      return true
    }



  constructor() { }
}
