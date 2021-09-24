import { Book } from './../../shared/book/book.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css'],
})
export class BookResultsComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
