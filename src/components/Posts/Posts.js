import React, {useEffect, useState} from 'react';

import {postService} from "../../../../Homeworks_react/src/services";
import {Details} from "../Details/Details";
import {Post} from "../Post/Post";
import './Posts.css'

const Posts = () => {
    const detailsDiv = 'detailsDiv';
    const postsDiv = 'postsDiv';
    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        postService.getAll().then(value => value.data).then(value => setPosts([...value]))
    }, []);

    return (
        <div className='wrapper'>
            <div className={detailsDiv}>
                {!!postDetails && <Details post={postDetails}/>}
            </div>

            <div className={postsDiv}>
                <h2>All posts:</h2>
                <div className='posts'>
                    {
                        posts.map(post => <Post key={post.id} post={post} setPostDetails={setPostDetails}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export {Posts};