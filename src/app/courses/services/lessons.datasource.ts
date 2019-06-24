


import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {Observable, BehaviorSubject, of} from "rxjs";
import {Lesson} from "../model/lesson";
import {CoursesHttpService} from "./courses-http.service";
import {catchError, finalize, tap} from 'rxjs/operators';
import {AppState} from '../../reducers';
import {select, Store} from '@ngrx/store';
import {loadLessonsPage, PageQuery} from '../course.actions';
import {selectLessonsPage} from '../course.selectors';



export class LessonsDataSource implements DataSource<Lesson> {

    private lessonsSubject = new BehaviorSubject<Lesson[]>([]);

    constructor(private store: Store<AppState>) {

    }

    loadLessons(courseId:number, page: PageQuery) {
        this.store
          .pipe(
            select(selectLessonsPage(courseId, page)),
            tap(lessons => {
              if (lessons.length > 0) {
                this.lessonsSubject.next(lessons);
              }
              else {
                this.store.dispatch(loadLessonsPage({courseId, page}));
              }
            }),
            catchError(() => of([]))
          )
          .subscribe();

    }

    connect(collectionViewer: CollectionViewer): Observable<Lesson[]> {
        console.log("Connecting data source");
        return this.lessonsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.lessonsSubject.complete();
    }

}

