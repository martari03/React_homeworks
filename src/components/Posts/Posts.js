import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Post} from "../Post/Post";
import {postActions} from "../../redux";

const Posts = () => {
    const {posts, errors, loading} = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postActions.getAllPosts())
    }, [dispatch]);

    return (
        <div className='posts'>
            {errors && JSON.stringify(errors)}
            {loading && <h3>The page is loading</h3>}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};