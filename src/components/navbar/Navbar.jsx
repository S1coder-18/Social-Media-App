import './Navbar.css';
import { Search } from '@mui/icons-material'
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import p1 from '../../assets/person/1.jpeg';

const Navbar = () => {
  return (
    <div className='navbarContainer'>
      <div className='navbar-left'>
        <span className='logo'>SnapVerse</span>
      </div>

      <div className='navbar-center'>
        <div className='searchbar'>
          <Search className="searchIcon" />
          <input
            placeholder='Search for friend, post or video'
            className='searchINput'
          />
        </div>
      </div>

      <div className='navbar-right'>
        <div className='navabarLinks'>
          <span className='navbarLink'>HomePage</span>
          <span className='navbarLink'>TimeLine</span>
        </div>
        <div className='navbarIcons'>
          <div className='topIconItems'>
            <PersonIcon />
            <span className='navbarIconBadge'>1</span>
          </div>
          <div className='topIconItems'>
            <ChatIcon />
            <span className='navbarIconBadge'>2</span>
          </div>
          <div className='topIconItems'>
            <NotificationsIcon />
            <span className='navbarIconBadge'>1</span>
          </div>
        </div>
        <img src={p1} alt='Profile' className='navbarImg' />
      </div>
    </div>
  )
}

export default Navbar;
