import React, {useEffect, useState} from 'react';

import {configsService} from "../../../../Homeworks_react/src/services";
import {Post} from "../Post/Post";
import './Posts.css'

const Posts = ({id}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        configsService.getUserPosts(id).then(value => value.data).then(value => setPosts([...value]))
    }, [id])

    return (
        <div className='postsDiv'>
            <div className='divider'/>
            <h3>Posts of chosen user:</h3>
            <div className='posts'>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        </div>
    );
};

export {Posts};