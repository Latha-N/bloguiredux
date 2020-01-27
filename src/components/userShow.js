import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function UserShow(props) {
    return (
        <div>
            {
                props.user && (
                    <div>
                      <h2>User Name- {props.user.name}</h2>  
                    </div>
                )
            }

            <h2>POST WRITTEN BY USER</h2>
            <ul>
                {props.posts.map(post => {
                    return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                })}
            </ul>
        </div>
    )
}
const mapStateToProps = (state, props) => {
    return {
        user: state.users.find(user => user.id == props.match.params.id),
        posts: state.posts.filter(post => post.userId == props.match.params.id)
    }
}
export default connect(mapStateToProps)(UserShow)
