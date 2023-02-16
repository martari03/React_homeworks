import React from 'react';
import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";

import {commentValidator} from "../../validators";
import {commentService} from "../../services";
import './CommentForm.css'

const CommentForm = ({setComments}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(commentValidator)
    });

    const submit = async (comment) => {
        const {data} = await commentService.createComment(comment);
        setComments(prev => [...prev, data]);
        reset();
    };

    return (
        <div className='form'>
            <form onSubmit={handleSubmit(submit)}>
                <h4>Enter Info About Comment Here:</h4>
                <input type="text" placeholder={'postId'} {...register('postId')}/>
                {errors.postId && <span>{errors.postId.message}</span>}
                <input type="text" placeholder={'name'} {...register('name')}/>
                {errors.name && <span>{errors.name.message}</span>}
                <input type="text" placeholder={'email'} {...register('email')}/>
                {errors.email && <span>{errors.email.message}</span>}
                <input type="text" placeholder={'body'} {...register('body')}/>
                {errors.body && <span>{errors.body.message}</span>}
                <button className='btn' disabled={!isValid}>Add comment</button>
            </form>
        </div>
    );
};

export {CommentForm};