import { BookshelfEditorComponent } from './bookshelf/bookshelf-editor/bookshelf-editor.component';
import { BookDetailsComponent } from './bookshelf/book-details/book-details.component';
import { BookshelfHomeComponent } from './bookshelf/bookshelf-home/bookshelf-home.component';
import { LibraryComponent } from './library/library.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookResolverService } from './bookshelf/book-resolver.service';
import { AuthComponent } from './shared/auth/auth.component';
import { AuthGuard } from './shared/auth/auth.guard';

const appRoutes = [
  { path: '', redirectTo: '/bookshelf', pathMatch: 'full' },
  {
    path: 'bookshelf',
    component: BookshelfComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: BookshelfHomeComponent,
      },
      {
        path: 'new',
        component: BookshelfEditorComponent,
      },
      {
        path: ':id',
        component: BookDetailsComponent,
        resolve: [BookResolverService],
      },
      {
        path: ':id/edit',
        component: BookshelfEditorComponent,
        resolve: [BookResolverService],
      },
    ],
  },
  { path: 'library', component: LibraryComponent, canActivate: [AuthGuard] },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
