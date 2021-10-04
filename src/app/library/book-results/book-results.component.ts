import { BookshelfService } from './../../bookshelf/bookshelf.service';
import { LibraryService } from './../library.service';
import { Book } from './../../shared/book/book.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css'],
})
export class BookResultsComponent implements OnInit {
  allBooks: Book[] = [];

  constructor(
    private bookshelfService: BookshelfService,
    private libraryService: LibraryService
  ) {}

  ngOnInit(): void {
    // Bring Global "apiBooks" array into the Local "allBooks" array
    this.allBooks = this.libraryService.getBooks();
  }

  onSaveBook(book: Book) {
    // Pass this to the "bookshelfService" "myBooks" array
    this.bookshelfService.saveBook(book);
  }
}
