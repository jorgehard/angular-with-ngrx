import { createAction, props } from "@ngrx/store";

export const CourseFailure = createAction(
    '[Course] - Failure',
    props<{ payload: any}>()
);

export const CourseRequest = createAction(
    '[Course] - Request',
    props<{ params: any }>()
);

export const CourseSuccess = createAction(
    '[Course] - Success',
    props<{ data: any }>()
);

