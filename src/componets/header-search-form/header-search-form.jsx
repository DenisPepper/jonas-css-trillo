import './header-search-form.scss';
import sprite from '/src/assets/sprite.svg';

const iconMagnifyingGlass = `${sprite}#icon-magnifying-glass`;

export function HeaderSearchForm() {
  return (
    <form className='search' action='#'>
      <input className='serachc' type='text' placeholder='Search hotels ...' />
      <button className='search__button'>
        <svg className='icon search__icon'>
          <use xlinkHref={iconMagnifyingGlass}></use>
        </svg>
      </button>
    </form>
  );
}
