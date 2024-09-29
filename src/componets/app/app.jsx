import './app.scss';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';

export function App() {
  return (
    <div className='container'>
      <Header />
      <div className='content'>
        <Sidebar />
        <main className='hotel-view'>Content</main>
      </div>
    </div>
  );
}
