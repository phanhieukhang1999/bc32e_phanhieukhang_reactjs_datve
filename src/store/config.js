import { combineReducers, createStore } from 'redux'

//C1
// import { baiTapBookingTicket } from './reducers'

//C2
import * as reducers from './reducers'

const rootReducers = combineReducers({

    //C1
    // baiTapBookingTicket,

    //C2
    ...reducers,
})

export const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())