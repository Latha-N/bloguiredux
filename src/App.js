import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import UserList from './components/usersList'
import UserShow from './components/userShow'
import PostList from './components/postList'
import PostShow from './components/postShow'

function App(props){
    return(
        <BrowserRouter>
        <div>
            <h2>BlogUi</h2>
            
            <Link to="/users">users</Link>
            <Link to="/posts"> |posts</Link>

            <Route path="/users" component={UserList} exact={true}/>
            <Route path="/users/:id" component={UserShow} exact={true}/>

             <Route path="/posts" component={PostList} exact={true}/>
             <Route path="/posts/:id" component={PostShow} exact={true}/> 
        </div>
        </BrowserRouter>
    )
}
const mapStateToProps=(state)=>{
    return {
        users:state.users
    }
}

export default connect(mapStateToProps)(App)