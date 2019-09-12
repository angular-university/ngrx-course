import {Injectable} from '@angular/core';
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';
import {Lesson} from '../model/lesson';


@Injectable()
export class LessonEntityService extends EntityCollectionServiceBase<Lesson> {

    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super("Lesson", serviceElementsFactory);
    }

}
