import '../../../styles/feed/CardMenu.scss';
import { ReactComponent as Inbox } from "../../../images/feed/inbox.svg";
import { ReactComponent as Comments } from "../../../images/feed/comments.svg";
import { ReactComponent as Notifications } from "../../../images/feed/notifications.svg";
import { ReactComponent as Bookmark } from "../../../images/feed/bookmark.svg";

function CardMenu(){
    return(
    <div className='cardMenu'>
        <div className='interaction'>
            <Notifications className='icon' />
            <Comments className='icon' />
            <Inbox className='icon' />
        </div>
        <Bookmark className='icon' />
    </div>
    );
}

export default CardMenu;