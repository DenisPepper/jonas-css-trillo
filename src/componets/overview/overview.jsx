import './overview.scss';
import sprite from '/src/assets/sprite.svg';

const iconStar = `${sprite}#icon-star`;
const iconLocation = `${sprite}#icon-location-pin`;

export function Overview() {
  return (
    <div className='overview'>
      <h1 className='overview__heading'>Hotel Las Palmas</h1>

      <div className='overview__stars'>
        <svg className='overview__icon-star'>
          <use xlinkHref={iconStar} />
        </svg>
        <svg className='overview__icon-star'>
          <use xlinkHref={iconStar} />
        </svg>
        <svg className='overview__icon-star'>
          <use xlinkHref={iconStar} />
        </svg>
        <svg className='overview__icon-star'>
          <use xlinkHref={iconStar} />
        </svg>
        <svg className='overview__icon-star'>
          <use xlinkHref={iconStar} />
        </svg>
      </div>

      <div className='overview__location'>
        <svg className='overview__icon-location'>
          <use xlinkHref={iconLocation} />
        </svg>
        <button className='btn-inline'>Albufeira, Portugal</button>
      </div>

      <div className='overview__rating'>
        <div className='oberview__rating-average'>8.6</div>
        <div className='oberview__rating-count'>429 votes</div>
      </div>
    </div>
  );
}
