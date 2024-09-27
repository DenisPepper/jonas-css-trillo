import './header-logo.scss';
import logo from '/src/assets/logo.png';

export function HeaderLogo() {
  return <img className='logo' src={logo} alt='Trillo logo.'  />;
}
