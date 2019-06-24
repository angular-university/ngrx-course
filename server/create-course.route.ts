import {Request, Response} from 'express';
import {COURSES} from './db-data';

export var coursesKeyCounter = 100;

export function createCourse(req: Request, res: Response) {

    console.log("Creating new course ...");

    const changes = req.body;

    const newCourse = {
        id: coursesKeyCounter,
      seqNo: coursesKeyCounter,
        ...changes
    };

  COURSES[newCourse.id] = newCourse;

  coursesKeyCounter += 1;

    setTimeout(() => {

      res.status(200).json(newCourse);

    }, 2000);

}

