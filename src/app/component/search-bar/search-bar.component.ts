import { Component, Output, EventEmitter } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})


export class SearchBarComponent {
  @Output() filterById = new EventEmitter<number>()
  constructor(public BooksService:BooksService){}
  getBookId(search){
    let id:number;
    isNaN(parseInt(search.value))? id = 0:id = parseInt(search.value)
    this.filterById.emit(id)

  }
}
