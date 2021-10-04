import { Book } from './../../shared/book/book.model';
import { Component, Input, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css'],
})
export class BookResultsComponent implements OnInit {
  @Input() allBooks: Book[];

  constructor(
    private libraryService: LibraryService,
    private bookshelfService: BookshelfService
  ) {}

  ngOnInit(): void {
    this.allBooks = this.libraryService.getBooks();
  }

  onSaveBook(book: Book) {
    return this.bookshelfService.saveBook(book);
  }
}
