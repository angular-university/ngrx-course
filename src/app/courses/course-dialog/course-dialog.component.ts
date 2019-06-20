import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import * as moment from 'moment';
import {Course} from "../model/course";
import {CoursesService} from "../services/courses.service";
import {AppState} from "../../reducers";
import {Store} from "@ngrx/store";
import {Update} from "@ngrx/entity";
import {CourseSaved} from '../course.actions';

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
        private coursesService: CoursesService,
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

        const changes = this.form.value;

        this.coursesService
            .saveCourse(this.courseId, changes)
            .subscribe(
                () => {

                    const course: Update<Course> = {
                      id: this.courseId,
                      changes
                    };

                    this.store.dispatch(new CourseSaved({course}));

                    this.dialogRef.close();
                }
            );
    }

    close() {
        this.dialogRef.close();
    }

}
