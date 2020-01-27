import React from 'react'
 import {Link} from 'react-router-dom'
 import {connect} from 'react-redux'
 import {startGetPosts} from '../actions/post'

function PostList(props){
// if(props.posts.length==0){
//     props.dispatch(startGetPosts())
// }
console.log('list',props.posts)
    return(
        <div>
            <h1>Listing Posts-{props.posts.length} </h1>
            <ul>            {
                props.posts.map(post=>{
                return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                })
            }
            </ul>

        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        posts:state.posts
    }
}

export default connect(mapStateToProps)(PostList)