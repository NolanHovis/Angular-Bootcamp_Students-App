import { EventEmitter, Injectable } from '@angular/core';
import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookshelfService {
  bookSelected = new EventEmitter<Book>();

  private myBooks: Book[] = [
    new Book(
      'Test Book 1',
      'Will Wilder',
      'Mystery',
      'https://source.unsplash.com/50x50/?mystery,book'
    ),
    new Book(
      'Test Book 2',
      'Will Wilder',
      'Non-Fiction',
      'https://source.unsplash.com/50x50/?serious,book'
    ),
    new Book(
      'Test Book 3',
      'Will Wilder',
      'Mystery',
      'https://source.unsplash.com/50x50/?mystery,book'
    ),
    new Book(
      'Test Book 4',
      'Will Wilder',
      'Non-Fiction',
      'https://source.unsplash.com/50x50/?serious,book'
    ),
  ];

  getBook(id: number) {
    return this.myBooks[id];
  }

  getBooks() {
    return this.myBooks;
  }

  saveBook(book: Book) {
    this.myBooks.push(book);
  }

  removeBook(i) {
    const index: number = i;
    if (index !== -1) {
      this.myBooks.splice(index, 1);
    }
  }
}
