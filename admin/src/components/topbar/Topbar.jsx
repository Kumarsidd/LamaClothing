import './Topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>lamaadmin</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNone />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Language />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Settings />
            <span className='topIconBadge'>2</span>
          </div>
          <img src='/images/avatar.jpg' alt='Avatar' className='topAvatar' />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
