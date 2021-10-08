import { Book } from './book.model';
<<<<<<< Updated upstream
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
=======
import { Component, Input, OnInit } from '@angular/core';
>>>>>>> Stashed changes

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Output() bookSelected = new EventEmitter<void>();
  @Input() book: Book;
  @Input() id: number;

  constructor() {}

  ngOnInit(): void {}
<<<<<<< Updated upstream

  onBookSelected() {
    // Tell App Component that someone clicked on a book!
    this.bookSelected.emit();
  }
=======
>>>>>>> Stashed changes
}
