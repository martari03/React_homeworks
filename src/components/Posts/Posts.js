import React, {Component} from 'react';

import {Post} from "../Post/Post";
import {postsService} from "../../services";

class Posts extends Component {
    constructor({props}) {
        super({props});
        this.state = {posts: []};
    }

    componentDidMount() {
        postsService.getAllPosts().then(({data}) => this.setState({posts: [...data]}));
    }

    render() {
        return (
            <div className='posts'>
                {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        );
    };
}

export {Posts};