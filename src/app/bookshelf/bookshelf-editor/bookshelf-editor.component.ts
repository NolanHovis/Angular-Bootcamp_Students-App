import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bookshelf-editor',
  templateUrl: './bookshelf-editor.component.html',
  styleUrls: ['./bookshelf-editor.component.css'],
})
export class BookshelfEditorComponent implements OnInit {
  idx: number;
  isEditMode = false;
  bookDetails = {
    title: '',
    author: '',
    genre: '',
    coverImagePath: '',
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.isEditMode = params['id'] != null;

      // If we are in "edit mode" => set the initial values for "bookDetails"
    });
  }

  onFormSubmit(formObj: NgForm) {
    // 1.
    // 2.
    // 3.
    // 4.
  }

  onFormReset() {
    // Re-route to the root url of "/bookshelf"
  }
}
