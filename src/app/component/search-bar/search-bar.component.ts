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

  secondPlaceholder:boolean = false

  getBookId(searchValue):void{
    
    let id:number;
    if (isNaN(parseInt(searchValue))){
      id = 0
    } else{
      id = parseInt(searchValue);
      
    }
    
    this.filterById.emit(id)

  }
}
