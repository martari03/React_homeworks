//з json-placeholder отримати всіх юзерів в компоненту Users.js
// зобразити кожного інформацію (id, name) з кожного юзера (компонента User)
// Зробити кнопку вибору юзера, при натисканні на яку в Users.js ви покажете детальну інформацію
// про користувача(довільно обрану інформацію)

import './Post.css'

const Post = ({post, setPostDetails}) => {
    const className = 'post';
    const {id, title} = post;

    return (
        <div className={className}>
            <h3>{id}. {title}</h3>
            <button className='btn' onClick={() => setPostDetails(post)}>Details</button>
        </div>
    );
};

export {Post};