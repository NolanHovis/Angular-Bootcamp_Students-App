<<<<<<< Updated upstream
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
=======
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
>>>>>>> Stashed changes
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
<<<<<<< Updated upstream
  @Output() currentSelectedBook = new EventEmitter<Book>();
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
=======
  @Input() myBooks: Book[];
  @Input() book: Book;
  @Input() id: number;

  constructor(
    private bookshelfService: BookshelfService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
>>>>>>> Stashed changes

  ngOnInit(): void {}

  handleBookSelected(book: Book) {
    // console.log('BOOK:', book);
    this.currentSelectedBook.emit(book);
  }

  addNewBook() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
