import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function PostShow(props){
    return (
        <div>
            {/* {{
                props.post && (
                    <div>    
                            <h2>Title-{props.post.title}</h2>
                    </div>
                )
            }} */}
            <h2>User Name-{props.user?props.user.name:'n/a'}</h2>
            <h2>Title-{props.post?props.post.title:'n/a'}</h2>
            <h2>body-{props.post?props.post.body:'n/a'}</h2>
            <h2>comments</h2>
            
                <ul>
                    {
                        props.comments.map(comment=>{
                        return <li key={comment.id}>{comment.body}</li>
                        })
                    }
                </ul>
                {<Link to={`/users/${props.user.id}`}>More post of author={props.user?props.user.name:'n/a'}</Link>}
        </div>
    )
}
const mapStateToProps=(state,props)=>{
    return{
        post:state.posts.find(post=>post.id==props.match.params.id),
        comments:state.comments.filter(comment => comment.postId == props.match.params.id),
        user:state.users.find(user=>{
            if(Object.keys(state.posts).length>0){
                const userId=state.posts.find(post=>
                    post.id==props.match.params.id).userId
                    return user.id==userId
                }else{
                    return null
                }
        //user:state.users.map(user=>user.id==props.match.params.id)
        })
    }
}

export default connect(mapStateToProps)(PostShow)