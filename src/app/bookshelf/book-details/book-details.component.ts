import { Book } from './../../shared/book/book.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  @Input() book: Book;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private bookshelfService: BookshelfService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.book = this.bookshelfService.getBook(this.id);
    });
  }

  onEditBook() {
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }
}
