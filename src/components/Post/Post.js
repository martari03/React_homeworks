import React, {Component} from 'react';

class Post extends Component {
    render() {
        const {id, userId, title, body} = this.props.post;
        return (
            <div className='post'>
                <h4>Title: {title}</h4>
                <p>Id: {id}</p>
                <p>User id: {userId}</p>
                <p>Body: {body}</p>
            </div>
        );
    };
}

export {Post};