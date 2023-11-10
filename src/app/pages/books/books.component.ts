import { Component, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
formVisible:Boolean = false;

//libro ficticio para dar formato al botón
templateNewBook:Book = new Book("NUEVO LIBRO","","Pulsa para añadir", 0,  "/assets/img/newBook.jpg")

  // books:Book[] = []
  books: Book[] = [
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

deletedBooks: Book[] = []

deleteBook(book:Book){
  const index = this.books.indexOf(book);
  this.deletedBooks.push(this.books[index])
  this.books.splice(index,1)

}

registerNewBook(book:Book){
  let bookToAdd:Book = book
  this.formVisible = false
  // this.formVisible = book[Object.keys(book)[1]]
  this.books.push(bookToAdd)
}



}
