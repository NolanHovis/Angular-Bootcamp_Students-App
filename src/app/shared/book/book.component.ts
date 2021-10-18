import { BookshelfService } from './../../bookshelf/bookshelf.service';
import { Book } from './book.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Input() idx: number;

  constructor(private bookshelfService: BookshelfService) {}

  ngOnInit(): void {}

  onBookSelected() {
    // Tell App Component that someone clicked on a book!
    this.bookshelfService.bookSelected.next(this.book);
  }
}
