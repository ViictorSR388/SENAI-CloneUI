import '../../../styles/feed/Menu.scss';
import { ReactComponent as Home } from '../../../images/feed/home.svg';
import { ReactComponent as Inbox } from '../../../images/feed/inbox.svg';
import { ReactComponent as Explore } from '../../../images/feed/explore.svg';
import { ReactComponent as Notifications } from '../../../images/feed/notifications.svg';
import ProfileIcon from '../ProfileIcon';
import image from '../../../images/feed/profile.jpg'

export default function Menu () {
    return (
        <div className='menu'>
            <Home className='icon' />
            <Inbox className='icon' />
            <Explore className='icon' />
            <Notifications className='icon' />
            <ProfileIcon iconSize='small' image={image} storyBorder={true}/> 
        </div>
    );
}