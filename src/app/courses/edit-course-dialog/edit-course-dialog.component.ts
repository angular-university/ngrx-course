import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Course} from '../model/course';
import {AppState} from '../../reducers';
import {Store} from '@ngrx/store';
import {CourseEntityService} from '../services/course-entity.service';

@Component({
  selector: 'course-dialog',
  templateUrl: './edit-course-dialog.component.html',
  styleUrls: ['./edit-course-dialog.component.css']
})
export class EditCourseDialogComponent {

  dialogTitle: string;

  course: Course;

  constructor(
    private store: Store<AppState>,
    private dialogRef: MatDialogRef<EditCourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private coursesService: CourseEntityService) {

    this.dialogTitle = data.dialogTitle;
    this.course = data.course;

  }

  close() {
    this.dialogRef.close();
  }

  onCourseChanged(course: Course) {

    this.coursesService.update(course);

    this.dialogRef.close();
  }

}
