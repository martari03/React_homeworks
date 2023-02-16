import React, {Component} from 'react';

class Comment extends Component {
    render() {
        const {postId, id, name, email, body} = this.props.comment;
        return (
            <div className='comment'>
                <h4>Name: {name}</h4>
                <p>Post id: {postId}</p>
                <p>Id: {id}</p>
                <p>Email: {email}</p>
                <p>Body: {body}</p>
            </div>
        );
    };
}

export {Comment};