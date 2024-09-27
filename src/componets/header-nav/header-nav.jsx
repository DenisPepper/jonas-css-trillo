import './header-nav.scss';
import sprite from '/src/assets/sprite.svg';
import userPhoto from '/src/assets/user.jpg';

const iconBookmark = `${sprite}#icon-bookmark`;
const iconChat = `${sprite}#icon-chat`;

export function HeaderNav() {
  return (
    <nav className='header__nav'>
      <div>
        <svg className='icon'>
          <use xlinkHref={iconBookmark}></use>
        </svg>
        <span className='count--bookmark'>7</span>
      </div>
      <div>
        <svg className='icon'>
          <use xlinkHref={iconChat}></use>
        </svg>
        <span className='count--chat'>17</span>
      </div>
      <div className='user'>
        <img className='user__photo' src={userPhoto} alt='User photo.' />
      </div>
    </nav>
  );
}
