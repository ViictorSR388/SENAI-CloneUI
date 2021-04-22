import '../../../styles/feed/Sidebar.scss';
import Sticky from 'react-sticky-el';
import Profile from '../Profile';
import Suggestions from '../Suggestions';
import Footer from '../Footer'
import image from '../../../images/feed/profile.jpg';

function Sidebar() {
    return(
        <Sticky topOffset={-80}>
            <div className='sidebar'>
                <Profile 
                    username='papo_a_esmo' 
                    caption='Papo a Esmo - Podcast' 
                    urlText='Switch' 
                    iconSize='big' 
                    image={image}
                />
                <Suggestions />
                <Footer />
            </div>
        </Sticky>
    );
}

export default Sidebar;