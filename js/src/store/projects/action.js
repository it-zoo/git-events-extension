import * as types from "./actionTypes"

export function fetchProjects() {
    return async (dispatch, getState) => {
        try {
            console.log("I'm dispatch fetchProjects");


            // dispatch({type: types.FETCH_PROJECTS, boards: boards})

        } catch (error) {
            console.error(error)
        }
    }
}