import { Output,EventEmitter } from "@angular/core";

export class Book {
    @Output() bookEvent = new EventEmitter<Book>();
    constructor (    
        public title: string,
        public type: string,
        public author: string,
        public price: number,
        public photo: string,
        public id_book?: number,
        public id_user?: number
    ) {}

    sendCardInfo(){
        let delBook:Book;
        this.bookEvent.emit(delBook)
      }
      
}
