import './detail.scss';
import user1 from '/src/assets/user-1.jpg';
import user2 from '/src/assets/user-2.jpg';
import user3 from '/src/assets/user-3.jpg';
import user4 from '/src/assets/user-4.jpg';
import user5 from '/src/assets/user-5.jpg';
import user6 from '/src/assets/user-6.jpg';

export function Detail() {
  return (
    <div className='detail'>
      <div className='description'>
        <p className='paragraf'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente
          saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
        </p>
        <p className='paragraf'>
          Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure
          aliquid aliquam.
        </p>
        <ul className='list'>
          <li className='list__item'>Close to the beach</li>
          <li className='list__item'>Breakfast included</li>
          <li className='list__item'>Free airport shuttle</li>
          <li className='list__item'>Free wifi in all rooms</li>
          <li className='list__item'>Air conditioning and heating</li>
          <li className='list__item'>Pets allowed</li>
          <li className='list__item'>We speak all languages</li>
          <li className='list__item'>Perfect for families</li>
        </ul>
        <div className='recommend'>
          <p className='recommend__count'>Lucy and 3 other friends recommend this hotel</p>
          <div className='recommend__friends'>
            <img className='recommend__photo' src={user3} alt='Friend 1.' />
            <img className='recommend__photo' src={user4} alt='Friend 2.' />
            <img className='recommend__photo' src={user5} alt='Friend 3.' />
            <img className='recommend__photo' src={user6} alt='Friend 4.' />
          </div>
        </div>
      </div>
      <div className='reviews'>
        <article className='review'>
          <blockquote className='review__text'>
            Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure
            aliquid aliquam.
          </blockquote>
          <div className='review__user'>
            <img className='review__photo' src={user1} alt='' />
            <div className='review__user-box'>
              <p className='review__user-name'>Nick Smith</p>
              <p className='review__user-date'>Feb 3rd, 2017</p>
            </div>
            <div className='review__rating'>7.8</div>
          </div>
        </article>
        <article className='review'>
          <blockquote className='review__text'>
            Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure
            aliquid aliquam.
          </blockquote>
          <div className='review__user'>
            <img className='review__photo' src={user2} alt='' />
            <div className='review__user-box'>
              <p className='review__user-name'>Nick Smith</p>
              <p className='review__user-date'>Feb 3rd, 2017</p>
            </div>
            <div className='review__rating'>7.8</div>
          </div>
        </article>
      </div>
    </div>
  );
}
