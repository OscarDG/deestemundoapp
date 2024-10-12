import React, {useState, useEffect} from 'react';
import NavBar from '../elements/navbar';
import EpisodesContent from '../elements/episodessection';
import MainHero from '../elements/mainhero';
import BlogContent from '../elements/blog_home';
import Footer from '../elements/footer';

import '../css/home.css'

function Home (){
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
  
    return(
        <>
        <header className={`app-header ${sticky ? 'sticky' : ''}`}>
            <NavBar name="Nav Bar" status={true}/>
        </header>
        <section>
            <MainHero />
        </section>
        <section className="App-content">
            <EpisodesContent />
            <BlogContent />
        </section>
        <footer className='App-footer'>
            <Footer />
        </footer>
        </>
    )
};

export {Home};