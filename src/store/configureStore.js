import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/users'
import postReducer from '../reducers/post'
import commentReducer from '../reducers/comment'

const configureStore=()=>{
    const store=createStore(combineReducers({
        users:userReducer,
        posts:postReducer,
        comments:commentReducer
    }),applyMiddleware(thunk))
    
    return store
}

export default configureStore