import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from './navbar';
import EpisodesContent from './episodes';
import Footer from './footer';
import MainHero from './mainhero';
import BlogContent from './blog';

function App() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 50){
            setSticky(true);
        }else{
            setSticky(false);
        }
    };
    window.addEventListener('scroll', handleScroll);
    return() => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  return (
    <>
      <header className={`app-header ${sticky ? 'sticky' : ''}`}>
        <NavBar name="Nav Bar" status={true}/>
      </header>
      <section>
        <MainHero />
      </section>
      <section className="App-content">
        <h1 className='episodes-title'>ÚLTIMOS EPISODIOS</h1>
        <EpisodesContent />
        <BlogContent />
      </section>
      <footer className='App-footer'>
        <Footer />
      </footer>
    </>
  );
}

export default App;
