import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
  EntityCollectionServiceFactory
} from "@ngrx/data";
import {Injectable} from "@angular/core";
import {Course} from "../model/course";

@Injectable()
export class CourseEntityService extends EntityCollectionServiceBase<Course> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Course', serviceElementsFactory);
  }
}
