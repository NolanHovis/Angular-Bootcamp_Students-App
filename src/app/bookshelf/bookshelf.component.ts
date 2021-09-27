import { Book } from './../shared/book/book.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css'],
})
export class BookshelfComponent implements OnInit {
  selectedBook: Book;

  constructor() {}

  ngOnInit(): void {}
}
