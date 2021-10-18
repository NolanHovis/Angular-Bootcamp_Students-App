import { BookshelfService } from './../../bookshelf/bookshelf.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit, OnDestroy {
  shredBookSub: Subscription;

  constructor(private bookshelfService: BookshelfService) {}

  ngOnInit(): void {
    this.shredBookSub = this.bookshelfService.bookSelected.subscribe((data) => {
      alert(`Title: ${data.title}\n Author: ${data.author}`);
    });
  }

  ngOnDestroy(): void {
    this.shredBookSub.unsubscribe();
  }
}
