import './sidebar-nav-link.scss';

export function SidebarNavLink(props) {
  // eslint-disable-next-line react/prop-types
  const { clss, iconPath, text } = props;
  return (
    <a href='#' className={`${clss}`}>
      <svg className='nav-icon'>
        <use xlinkHref={iconPath}></use>
      </svg>
      <span>{text}</span>
    </a>
  );
}
