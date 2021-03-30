import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddBookComponent } from './app/components/add-book/add-book.component';
import { BookDetailComponent } from './app/components/book-detail/book-detail.component';
import { BooksListComponent } from './app/components/books-list/books-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-book' }, // Create
  { path: 'books-list', component: BooksListComponent }, // View
  { path: 'add-book', component: AddBookComponent }, // Add
  { path: 'edit-book/:id', component: BookDetailComponent }, // Details
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
