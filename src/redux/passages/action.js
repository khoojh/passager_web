import instance from '../instance';
import {
    PASSAGES_FETCH
} from './types';

export function fetchPassages() {
    console.log("CALLED")
    return (dispatch) => {
        return instance.get(
            `api/passages/`
        ).then((response) => {
            let passages = response.data;
            console.log("RESPONSE", response)
            dispatch({
                type: PASSAGES_FETCH,
                payload: passages
            });
        }).catch((error) => {
            console.log("ERROR", error);
        });
    }
}
