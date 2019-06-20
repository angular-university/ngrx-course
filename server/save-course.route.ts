import {Request, Response} from 'express';
import {COURSES} from "./db-data";


export function saveCourse(req: Request, res: Response) {

    console.log("Saving course ...");

    const id = req.params["id"],
        changes = req.body;

    COURSES[id] = {
        ...COURSES[id],
        ...changes
    };

    res.status(200).json(COURSES[id]);

}

