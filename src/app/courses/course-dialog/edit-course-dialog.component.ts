import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {Course} from "../model/course";
import {AppState} from "../../reducers";
import {Store} from "@ngrx/store";
import {CourseEntityService} from '../services/course-entity.service';
import {CourseFormComponent} from '../course-form/course-form.component';

@Component({
    selector: 'course-dialog',
    templateUrl: './edit-course-dialog.component.html',
    styleUrls: ['./edit-course-dialog.component.css']
})
export class EditCourseDialogComponent {

    dialogTitle:string;

    course:Course;

    @ViewChild(CourseFormComponent, {static:false})
    courseForm: CourseFormComponent;

    constructor(
        private store: Store<AppState>,
        private dialogRef: MatDialogRef<EditCourseDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data,
        private coursesService: CourseEntityService) {

        this.dialogTitle = data.dialogTitle;
        this.course = data.course;

    }


    save() {

      const course = {
        ...this.course,
        ...this.courseForm.form.value
      };

        this.coursesService.update(course);

        this.dialogRef.close();

    }

    close() {
        this.dialogRef.close();
    }

}
