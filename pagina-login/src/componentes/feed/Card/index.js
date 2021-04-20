import '../../../styles/feed/Card.scss';
import Profile from '../Profile';
import { ReactComponent as CardButton } from '../../../images/feed/cardButton.svg';
import CardMenu from '../CardMenu';
import Comment from '../Comment';

function Card(props) {
    const {
        storyBorder,
        image,
        comments,
        likedByText,
        likedByNumber,
        hours,
    } = props;

    return (
        <div className='card'>
            <header>
                <Profile iconSize='medium' storyBorder={storyBorder} />
                <CardButton className='cardButton' />
            </header>
            <img className='cardImage' src={image} alt='card context' />
            <CardMenu />
            <div className='likedBy'>
                <Profile iconSize='small' hideAccountName={true} />
                <span>
                    Liked by <strong>{likedByText}</strong> and{''}
                    <strong>{likedByNumber} others</strong>
                </span>
            </div>
            <div className='comments'>
                {comments.map((comments) => {
                    return (
                        <Comment
                        key={comments.id}
                        accountName={comments.user}
                        comment={comments.text}
                        />
                    );
                })}
            </div>
            <div className='timePosted'>{hours} HOURS AGO</div>
            <div className='addComment'>
                <div className='commentText'>Add a comment...</div>
                <div className='postText'>POST</div>
            </div>
        </div>
    );
}

export default Card;