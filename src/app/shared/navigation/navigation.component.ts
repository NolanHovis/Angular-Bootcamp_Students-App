import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  collapsed: boolean = true;
  show: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
