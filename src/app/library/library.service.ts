import { Injectable } from '@angular/core';
import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  allBooks: Book[] = [
    new Book(
      'API Book 1',
      'Will Wilder',
      'Mystery',
      'https://source.unsplash.com/50x50/?mystery,book'
    ),
    new Book(
      'API Book 2',
      'Will Wilder',
      'Non-Fiction',
      'https://source.unsplash.com/50x50/?serious,book'
    ),
    new Book(
      'API Book 3',
      'Will Wilder',
      'Mystery',
      'https://source.unsplash.com/50x50/?mystery,book'
    ),
    new Book(
      'API Book 4',
      'Will Wilder',
      'Non-Fiction',
      'https://source.unsplash.com/50x50/?serious,book'
    ),
  ];

  getBooks() {
    return this.allBooks.slice();
  }
}
