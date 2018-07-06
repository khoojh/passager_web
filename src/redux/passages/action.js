import instance from '../instance';
import {
    PASSAGES_FETCH,
    PASSAGES_ADD,
    PASSAGES_EDIT,
    PASSAGES_DELETE
} from './types';

export function fetchPassages() {
    return (dispatch) => {
        return instance.get(
            `api/passages/`
        ).then((response) => {
            dispatch({
                type: PASSAGES_FETCH,
                payload: response.data
            });
        }).catch((error) => {
            console.log("ERROR", error);
        });
    }
}

export function addPassage(author, book, content) {
    console.log("CALLED", author, book, content)
    return (dispatch) => {
        return instance.post(
            `api/passages/`,
            {
                author,
                book,
                content
            }
        ).then((response) => {
            dispatch({
                type: PASSAGES_ADD,
                payload: response.data
            });
        }).catch((error) => {
            console.log("ERROR", error);
        });
    }
}

export function editPassage(author, book, content) {
    return (dispatch) => {
        return instance.patch(
            `api/passages/${id}`,
            {
                author,
                book,
                content
            }
        ).then((response) => {
            dispatch({
                type: PASSAGES_EDIT,
                payload: response.data
            });
        }).catch((error) => {
            console.log("ERROR", error);
        });
    }
}

export function deletePassage(id) {
    return (dispatch) => {
        return instance.delete(
            `api/passages/${id}`
        ).then((response) => {
            dispatch({
                type: PASSAGES_ADD,
                payload: response.data
            });
        }).catch((error) => {
            console.log("ERROR", error);
        });
    }
}
