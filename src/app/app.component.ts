import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BookApp';
  pageDisplayed = 'bookshelf';

  onNavigatePage(page: string) {
    // console.log('APP:', page);
    this.pageDisplayed = page;
    // console.log(this.pageDisplayed);
  }
}
