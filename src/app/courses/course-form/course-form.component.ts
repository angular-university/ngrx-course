import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Course} from '../model/course';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnChanges {

  form: FormGroup;

  @Input()
  course: Course;

  constructor(private fb: FormBuilder) {


  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['course']) {
      const change = changes['course'],
        course: Course = {...change.currentValue};

      if (change.isFirstChange()) {
        setTimeout(() => {
          this.form = this.fb.group({
            description: [course.description, Validators.required],
            category: [course.category, Validators.required],
            longDescription: [course.longDescription, Validators.required],
            promo: [course.promo, []]
          });
        });
      }
    }
  }

}
