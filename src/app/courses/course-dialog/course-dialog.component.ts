import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {Course} from "../model/course";
import {AppState} from "../../reducers";
import {Store} from "@ngrx/store";
import {EntityCollectionService, EntityServices} from '@ngrx/data';
import {CourseEntityService} from '../services/course-entity.service';

@Component({
    selector: 'course-dialog',
    templateUrl: './course-dialog.component.html',
    styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent {

    dialogTitle:string;

    course:Course;

    form: FormGroup;


    constructor(
        private store: Store<AppState>,
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<CourseDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data,
        private coursesService: CourseEntityService) {

        this.course = data.course;

        this.form = fb.group({
            description: [this.course.description, Validators.required],
            category: [this.course.category, Validators.required],
            longDescription: [this.course.longDescription,Validators.required],
            promo: [this.course.promo, []]
        });


    }


    save() {

      const updatedCourse = {
        ...this.course,
        ...this.form.value
      };

      this.coursesService.update(updatedCourse);

      this.dialogRef.close();

    }

    close() {
        this.dialogRef.close();
    }

}
