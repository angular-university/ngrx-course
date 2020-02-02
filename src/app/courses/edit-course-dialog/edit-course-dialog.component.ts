import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Course} from '../model/course';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject, of} from 'rxjs';
import {CoursesHttpService} from '../services/courses-http.service';
import {AppState} from '../../reducers';
import {Store} from '@ngrx/store';
import {Update} from '@ngrx/entity';
import {addCourse, courseUpdated} from '../course.actions';
import {filter, map, mergeMap, tap} from 'rxjs/operators';
import {selectCourseSaving} from '../courses.selectors';

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

  saves = new Subject<any>();
  saving$ = this.store.select(selectCourseSaving);

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditCourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private store: Store<AppState>) {

    this.dialogTitle = data.dialogTitle;
    this.course = data.course;
    this.mode = data.mode;

    const formControls = {
      description: ['', Validators.required],
      category: ['', Validators.required],
      longDescription: ['', Validators.required],
      promo: ['', []]
    };

    if (this.mode == 'update') {
      this.form = this.fb.group(formControls);
      this.form.patchValue({...data.course});
    }
    else if (this.mode == 'create') {
      this.form = this.fb.group({
        ...formControls,
        url: ['', Validators.required],
        iconUrl: ['', Validators.required]
      });
    }

    const saved$ = this.saving$.pipe(
      filter(saving => !saving)
    );
    this.saves.pipe(
      map(_ => this.createSaveAction()),
      tap(action => this.store.dispatch(action)),
      mergeMap(_ => this.mode === 'create' ? saved$ : of(true))
    )
    // no need to unsubscribe here as stream dies with component
    .subscribe(_ => {
      this.dialogRef.close();
    });
  }

  onClose() {
    this.dialogRef.close();
  }

  private createSaveAction() {
    const course: Course = {
      ...this.course,
      ...this.form.value
    };
    if (this.mode === 'update') {
      const update: Update<Course> = {
          id: course.id,
          changes: course
      };
      return courseUpdated({update});
    } else {
      return addCourse({ course });
    }
  }
}
