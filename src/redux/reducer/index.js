import { combineReducers } from "redux"
import bookReducer from "./bookReducer.js"
import filterReducer from "./filterReducer.js"

const rootReducer = combineReducers({
    filter: filterReducer,
    book: bookReducer
})

export default rootReducer