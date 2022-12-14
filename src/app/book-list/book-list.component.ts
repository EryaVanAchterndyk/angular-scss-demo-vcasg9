import { Component, OnInit } from '@angular/core';
import { BookDataService } from './book-data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  providers: [BookDataService],
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books = [];

  constructor(private bookData: BookDataService) {
    this.books = this.bookData.getBooks();
  }

  ngOnInit() {}
}
