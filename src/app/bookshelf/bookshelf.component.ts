import { BookshelfService } from './bookshelf.service';
import { Book } from './../shared/book/book.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css'],
})
export class BookshelfComponent implements OnInit {
  selectedBook: Book;

  constructor(private bookshelfService: BookshelfService) {}

  ngOnInit(): void {
    // Subscribe to the bookshelfService so we get access to all the global updates inside of this component
    this.bookshelfService.bookSelected.subscribe((book: Book) => {
      this.selectedBook = book;
    });
  }
}
