


import {Request, Response} from 'express';
import {LESSONS} from "./db-data";
import {setTimeout} from "timers";



export function searchLessons(req: Request, res: Response) {

    console.log('Searching for lessons ...');

        const queryParams = req.query;

        const courseId = queryParams.courseId,
            filter = queryParams.filter || '',
            sortOrder = queryParams.sortOrder || 'asc',
            pageNumber = parseInt(queryParams.pageNumber) || 0,
            pageSize = parseInt(queryParams.pageSize);

        let lessons = Object.values(LESSONS).filter(lesson => lesson.courseId == courseId).sort((l1, l2) => l1.id - l2.id);

        if (filter) {
            lessons = lessons.filter(lesson => lesson.description.trim().toLowerCase().search(filter.toLowerCase()) >= 0);
        }

        if (sortOrder == "desc") {
            lessons = lessons.reverse();
        }

        const initialPos = pageNumber * pageSize;

        console.log(`Retrieving lessons page starting at position ${initialPos}, page size ${pageSize} for course ${courseId}`);

        const lessonsPage = lessons.slice(initialPos, initialPos + pageSize);

        res.status(200).json(lessonsPage);

}
