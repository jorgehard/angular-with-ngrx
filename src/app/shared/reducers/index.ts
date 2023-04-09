import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import { storeLogger } from "ngrx-store-logger";
import { environment } from "src/environments/environment";
import { CourseStateInterface } from "../models/courses.interface";
import { CourseReducer } from "./courses/courses.reducers";

export interface State {
    course: CourseStateInterface
};

export const logger = (reducer: ActionReducer<State>): any =>
storeLogger({
    filter: {
        blacklist: [
            '@ngrx/store/update-reducers',
            '@ngrx/effects/init'
        ]
    }
})(reducer);

export const reducers: ActionReducerMap<State> = {
    course: CourseReducer
}

export const metaReducers: MetaReducer<State>[] = environment.production? [] : [logger]