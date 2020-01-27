import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startGetUsers} from '../actions/users'


function UserList(props){
    if(props.users.length==0){
        props.dispatch(startGetUsers())
    }
    return (
        <div>
        <h1>Listing Users-{props.users.length}</h1>
        <ul>
            {
                props.users.map(user=>{
                return <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                })
            }
        </ul>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return {
        users:state.users
    }
}
export default connect(mapStateToProps)(UserList)