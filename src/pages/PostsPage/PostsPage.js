import React from 'react';
import {useSelector} from "react-redux";

import {ChosenPost, Posts} from "../../components";
import './PostsPage.css';

const PostsPage = () => {
    const {selectedPost} = useSelector(state => state.posts);

    return (
        <div>
            {selectedPost && <div className='postWrapper'><ChosenPost/></div>}
            <hr/>
            <Posts/>
        </div>
    );
};

export {PostsPage};