import { Book } from './../shared/book/book.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  bookListChanged = new EventEmitter<Book[]>();

  private apiBooks: Book[] = [
    new Book(
      'API Book 1',
      'Will Wilder',
      'Mystery',
      'https://source.unsplash.com/50x50/?mystery,book'
    ),
    new Book(
      'API Book 2',
      'Nolan Hovis',
      'Non-Fiction',
      'https://source.unsplash.com/50x50/?serious,book'
    ),
    new Book(
      'API Book 3',
      'German Cruz',
      'Mystery',
      'https://source.unsplash.com/50x50/?mystery,book'
    ),
    new Book(
      'API Book 4',
      'Lex Pryor',
      'Non-Fiction',
      'https://source.unsplash.com/50x50/?serious,book'
    ),
  ];

  getBooks() {
    return this.apiBooks.slice();
  }
}
