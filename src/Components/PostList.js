import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts : [],
             errs :[]
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>{
                 this.setState({posts:response.data})
                }
            )
            .catch(
                (err)=>{
                    this.setState({errs:"error retreiving data"})
                 }
            )
    }
    
    render() {
        const {posts,errs}=this.state
        return (
            <div>
                List of Posts :
                {
                   posts.length?
                   posts.map( post => <div key={post.id}> {post.title} </div>):
                   null
                }
                {
                    errs ?
                    (<div>{this.state.errs}</div>):
                    null
                }
            </div>
        )
    }
}

export default PostList
