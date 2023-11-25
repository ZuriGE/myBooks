import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { BooksComponent } from '../pages/books/books.component';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { UserService } from './user.service';


import swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})

export class BooksService {
  
  public books: Book[]
  
  private response: Response

  private url = "http://localhost:3000/books"
 constructor(private http: HttpClient) { }

  
  ///Con API rest
  //devuelve un libro buscado por su número de id
  public getOne(id_user:number,id_book:number):Observable<Object>{
    return this.http.get<object>(`${this.url}?id_user=${id_user}?&id_book=${id_book}`)
  }
  //devuelve todos los libros
  public getAll(id_user:number): Observable<Object>{
  
  return this.http.get<object>(`${this.url}?id_user=${id_user}`)
  }

  //añade un libro
  public add(book:Book):Observable<Object>{
    return this.http.post<object>(this.url, book)
  }

    //borrar libro
  public delete(id_book:number):Observable<Object>{
    console.log(`${this.url}?id_book=${id_book}`)
    return this.http.delete<object>(`${this.url}?id_book=${id_book}`)
  }

  //editar libro
  public edit(book:Book):Observable<Object>{
    return this.http.put<object>(`${this.url}?id=${book.id_book}`, book)
  } 
}
