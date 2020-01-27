import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './App'
import configureStore from './store/configureStore'
import {startGetUsers} from './actions/users'
import {startGetPosts} from './actions/post'
import {startGetComments} from './actions/comment'

const store=configureStore()
store.subscribe(()=>{
    console.log(store.getState())
})
console.log(store.getState())


store.dispatch(startGetUsers())
store.dispatch(startGetPosts())
store.dispatch(startGetComments())

const jsx=(
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('root'))