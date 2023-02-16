import './Details.css'

const Details = ({post}) => {
    const details = 'details';
    const {id, userId, title, body} = post;

    return (
        <div className={details}>
            <h2>Details of chosen post:</h2>
            <h4>Title: {title}</h4>
            <p><b>Id:</b> {id}</p>
            <p><b>UserId:</b> {userId}</p>
            <p><b>Body:</b> {body}</p>
        </div>
    );
};

export {Details};