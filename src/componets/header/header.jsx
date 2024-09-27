import './header.scss';
import { HeaderLogo } from '../header-logo/header-logo';
import { HeaderSearchForm } from '../header-search-form/header-search-form';
import { HeaderNav } from '../header-nav/header-nav';

export function Header() {
  return (
    <header className='header'>
      <HeaderLogo />
      <HeaderSearchForm />
      <HeaderNav />
    </header>
  );
}
