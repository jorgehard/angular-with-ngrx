import { createReducer, on } from "@ngrx/store";
import { CourseFailure, CourseRequest, CourseSuccess } from "../../actions/courses/courses.actions";
import { CourseStateInterface } from "../../models/courses.interface";

export const initialState: CourseStateInterface = {
    data: [],
    totalElements: 0,
    totalPages: 0,
    error: null,
    loaded: false,
    loading: false,
    paginateLoading: false,
};

export const CourseReducer = createReducer(
    initialState,
    on(CourseFailure, (state, payload) => ({
        ...initialState,
        error: payload,
        loaded: true
    })),
    on(CourseRequest, () => ({
        ...initialState,
        loading: true
    })),
    on(CourseSuccess, (state, payload) => ({
        ...initialState,
        data: payload.data.content
    }))
)
