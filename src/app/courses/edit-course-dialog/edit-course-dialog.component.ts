import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Course} from '../model/course';
import {AppState} from '../../reducers';
import {Store} from '@ngrx/store';
import {CourseEntityService} from '../services/course-entity.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'course-dialog',
  templateUrl: './edit-course-dialog.component.html',
  styleUrls: ['./edit-course-dialog.component.css']
})
export class EditCourseDialogComponent {

  form: FormGroup;

  dialogTitle: string;

  course: Course;

  mode: 'create' | 'update';

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private dialogRef: MatDialogRef<EditCourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private coursesService: CourseEntityService) {

    this.dialogTitle = data.dialogTitle;
    this.course = data.course;
    this.mode = data.mode;

    this.form = this.fb.group({
      description: [this.course.description, Validators.required],
      category: [this.course.category, Validators.required],
      longDescription: [this.course.longDescription, Validators.required],
      promo: [this.course.promo, []]
    });

  }

  onClose() {
    this.dialogRef.close();
  }

  onSave() {

    const course = {
      ...this.course,
      ...this.form.value
    };

    if (this.mode == 'update') {

      this.coursesService.update(course);

      this.dialogRef.close();

    }
    else if (this.mode == 'create') {

    }

  }

}
