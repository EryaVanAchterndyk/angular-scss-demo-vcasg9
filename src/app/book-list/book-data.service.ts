import { Injectable } from '@angular/core';

@Injectable()
export class BookDataService {
  books = [
    {
      title: 'Book1',
      subtitle: 'Subtitle1',
    },
    {
      title: 'Book1',
      subtitle: 'Subtitle1',
    },
    {
      title: 'Book1',
      subtitle: 'Subtitle1',
    },
  ];

  constructor() {}

  getBooks() {
    return this.books;
  }
}
