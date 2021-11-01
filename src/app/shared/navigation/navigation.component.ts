import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http/http.service';

@Component({
  selector: 'app-nav',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  collapsed: boolean = true;
  show: boolean = false;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}

  onSaveData() {
    this.httpService.saveBooksToFirebase();
  }

  onFetchData() {
    this.httpService.fetchBooksFromFirebase().subscribe();
  }
}
