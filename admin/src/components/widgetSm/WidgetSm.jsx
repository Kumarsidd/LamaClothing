import './WidgetSm.css';
import { Visibility } from '@material-ui/icons';

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New Join Members</span>
      <ul className='widgetSmList'>
        <li className='widgetSmListItem'>
          <img src='/images/user.jpg' alt='User' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Anna Keller</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src='/images/user.jpg' alt='User' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Anna Keller</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src='/images/user.jpg' alt='User' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Anna Keller</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src='/images/user.jpg' alt='User' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Anna Keller</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src='/images/user.jpg' alt='User' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Anna Keller</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
