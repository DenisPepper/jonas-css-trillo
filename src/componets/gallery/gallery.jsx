import './gallery.scss';

export function Gallery() {
  return (
    <div className='gallery'>
      <figure className='gallery__item'>
        <img className='gallery__photo' src='/src/assets/hotel-1.jpg' alt='Photo of hotel 1.' />
      </figure>
      <figure className='gallery__item'>
        <img className='gallery__photo' src='/src/assets/hotel-2.jpg' alt='Photo of hotel 2.' />
      </figure>
      <figure className='gallery__item'>
        <img className='gallery__photo' src='/src/assets/hotel-3.jpg' alt='Photo of hotel 3.' />
      </figure>
    </div>
  );
}
