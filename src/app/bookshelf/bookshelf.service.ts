import { Book } from './../shared/book/book.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookshelfService {
  bookSelected = new Subject<Book>();
  bookListChanged = new Subject<Book[]>();

  // Data sources should be IMMUTABLE
  private myBooks: Book[] = [
    new Book(
      'Book of Testing',
      'Will Wilder',
      'Mystery',
      'https://source.unsplash.com/50x50/?mystery,book'
    ),
    new Book(
      'Testing Title 2',
      'Nolan Hovis',
      'Science',
      'https://source.unsplash.com/50x50/?science,book'
    ),
    new Book(
      'Fantasy Test',
      'German Cruz',
      'Non-Fiction',
      'https://source.unsplash.com/50x50/?fantasy,book'
    ),
    new Book(
      'Fantasy Test',
      'Lex Pryor',
      'Math',
      'https://source.unsplash.com/50x50/?fantasy,book'
    ),
  ];

  // READ
  getBooks() {
    return this.myBooks.slice();
  }

  getBook(idx: number) {
    return this.myBooks.slice()[idx];
  }

  // CREATE
  saveBook(book: Book) {
    this.myBooks.push(book);
    this.bookListChanged.next(this.myBooks.slice());
  }

  // UPDATE
  updateBook(idx: number, updatedBookInfo: Book) {
    this.myBooks[idx] = updatedBookInfo;
    this.bookListChanged.next(this.myBooks.slice());
  }

  // DELETE
  removeBook(idx: number) {
    if (idx !== -1) {
      // We found a book at the index we passed in
      this.myBooks.splice(idx, 1);
      this.bookListChanged.next(this.myBooks.slice());
    }
  }
}
