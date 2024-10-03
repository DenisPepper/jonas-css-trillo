import './app.scss';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';
import { Gallery } from '../gallery/gallery';
import { Overview } from '../overview/overview';
import { Detail } from '../detail/detail';

export function App() {
  return (
    <div className='container'>
      <Header />
      <div className='content'>
        <Sidebar />
        <main className='hotel-view'>
          <Gallery />
          <Overview />
          <Detail />
        </main>
      </div>
    </div>
  );
}
