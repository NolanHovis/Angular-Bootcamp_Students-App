import { Book } from './book.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() book: Book;

  constructor(private bookshelfService: BookshelfService) {}

  ngOnInit(): void {}

  onBookSelected() {
    // Tell App Component that someone clicked on a book!
    this.bookshelfService.bookSelected.emit(this.book);
  }
}
