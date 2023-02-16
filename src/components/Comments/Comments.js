//Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий коментар
// постовим запитом на http://jsonplaceholder.typicode.com/comments

import React, {useEffect, useState} from 'react';

import {Comment} from "../Comment/Comment";
import {commentService} from "../../services";
import {CommentForm} from "../CommentForm/CommentForm";
import './Comments.css';

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getAllComments().then(({data}) => setComments([...data]))
    }, []);

    return (
        <div className='wrapper'>
            <CommentForm setComments={setComments}/>
            <div className='divider'/>
            <div className='comments'>{comments.map(comment => <Comment key={comment.id} comment={comment}/>)}</div>
        </div>
    );
};

export {Comments};