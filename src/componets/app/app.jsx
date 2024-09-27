import './app.scss';
import { Header } from '../header/header';

export function App() {
  return (
    <div className='container'>
      <Header />
      <div className='content'>
        <nav className='sidebar'>Sidebar</nav>
        <main className='hotel-view'>Content</main>
      </div>
    </div>
  );
}
