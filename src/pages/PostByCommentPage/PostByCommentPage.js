import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services";
import {Post} from "../../components";
import './PostByCommentPage.css';

const PostByCommentPage = () => {

    const {postId} = useParams();

    const [post, setPost] = useState([]);

    useEffect(() => {
        postService.getPostByComment(postId).then(({data}) => setPost(data))
    }, [postId]);

    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};


export {PostByCommentPage};