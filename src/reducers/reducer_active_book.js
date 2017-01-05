/**
 * Created by joon on 1/4/2017.
 */
// State argument is not application state, only the state
// this reducer is responsible for

// reducer called only when there's an action
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}