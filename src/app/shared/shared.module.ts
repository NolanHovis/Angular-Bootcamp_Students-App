import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { NotificationComponent } from './notification/notification.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { BookComponent } from './book/book.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AlertComponent,
    NotificationComponent,
    BookComponent,
    DropdownDirective,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    AlertComponent,
    NotificationComponent,
    BookComponent,
    DropdownDirective,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class SharedModule {}
