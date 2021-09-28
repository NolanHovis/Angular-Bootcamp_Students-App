import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  collapsed: boolean = true;
  show: boolean = false;
  @Output() featureSelected = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
