import {DefaultDataService, HttpUrlGenerator} from "@ngrx/data";
import {Course} from "../model/course";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable()
export class CoursesDataService extends DefaultDataService<Course>{
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Course', http, httpUrlGenerator);
  }

  getAll(): Observable<Course[]> {
    return this.http.get('/api/courses')
      .pipe(
        map(res => res['payload'])
      )
  }
}
