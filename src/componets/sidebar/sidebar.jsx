import { SidebarNavLink } from '../sidebar-nav-link/sidebar-nav-link';
import './sidebar.scss';
import sprite from '/src/assets/sprite.svg';

const links = [
  { iconPath: `${sprite}#icon-home`, text: 'Home' },
  { iconPath: `${sprite}#icon-aircraft-take-off`, text: 'Flyght' },
  { iconPath: `${sprite}#icon-key`, text: 'Car rental' },
  { iconPath: `${sprite}#icon-map`, text: 'Tours' },
];

export function Sidebar() {
  return (
    <nav className='sidebar'>
      <ul className='side-nav'>
        {links.map((item) => (
          <li className='side-nav__item' key={item.text}>
            <SidebarNavLink clss={'side-nav__link'} {...item} />
          </li>
        ))}
      </ul>
      <div className='legal'>&copy; 2024 by Denis Pepper. All rightes reserved</div>
    </nav>
  );
}
