import React from 'react';
import {useDispatch} from "react-redux";

import {postActions} from "../../redux";

const Post = ({post}) => {
    const {id, title} = post;
    const dispatch = useDispatch();

    return (
        <div className='post'>
            <h5>{id}. {title}</h5>
            <button className='btn' onClick={() => dispatch(postActions.setSelectedPost(post))}>Details</button>
            <button className='btn' onClick={() => dispatch(postActions.getPostById({id}))}>Select</button>
        </div>
    );
};

export {Post};