import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, take } from "rxjs";
import { CourseFailure, CourseRequest, CourseSuccess } from "../../actions/courses/courses.actions";
import { CoursesService } from "../../services/courses.service";

@Injectable()
export class CourseEffects {
    constructor(
        private actions$: Actions,
        private service: CoursesService
    ){}

    course$ = createEffect((): any => {
        return this.actions$.pipe(
            ofType(CourseRequest),
            switchMap((params: any) => {
              return  this.service.list(params.params).pipe(
                take(1),
                map((payload) => CourseSuccess(payload)),
                catchError(({ error }) => of(CourseFailure(error))
              ))
            }
        ))
    })
}
