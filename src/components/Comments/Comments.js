import React, {Component} from 'react';

import {commentsService} from "../../services";
import {Comment} from "../Comment/Comment";

class Comments extends Component {
    constructor() {
        super();
        this.state = {comments: []};
    }

    componentDidMount() {
        commentsService.getAllComments().then(({data}) => this.setState({comments: [...data]}));
    }

    render() {
        return (
            <div className='comments'>
                {this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        );
    };
}

export {Comments};