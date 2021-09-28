import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  @Output() bookWasSelected = new EventEmitter<Book>();
  myBooks: Book[] = [
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

  constructor() {}

  ngOnInit(): void {}

  onBookSelected(book: Book) {
    this.bookWasSelected.emit(book);
  }
}
