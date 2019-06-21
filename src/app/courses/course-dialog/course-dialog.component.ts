import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {Course} from "../model/course";
import {CoursesService} from "../services/courses.service";
import {AppState} from "../../reducers";
import {Store} from "@ngrx/store";
import { saveCourse} from '../course.actions';

@Component({
    selector: 'course-dialog',
    templateUrl: './course-dialog.component.html',
    styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {

    courseId:number;

    form: FormGroup;
    description:string;

    constructor(
        private store: Store<AppState>,
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<CourseDialogComponent>,
        @Inject(MAT_DIALOG_DATA) course:Course ) {

        this.courseId = course.id;

        this.description = course.description;


        this.form = fb.group({
            description: [course.description, Validators.required],
            category: [course.category, Validators.required],
            longDescription: [course.longDescription,Validators.required],
            promo: [course.promo, []]
        });

    }

    ngOnInit() {

    }


    save() {

      const update = {
        id: this.courseId,
        changes: this.form.value
      };

      this.store.dispatch(saveCourse({update}));

      this.dialogRef.close();

    }

    close() {
        this.dialogRef.close();
    }

}
