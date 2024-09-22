
import React, {useState, useEffect} from 'react';
import NavBar from "../elements/navbar";
import Footer from "../elements/footer";
import {episodes} from '../episodesData';
import SecondHero from '../elements/secondhero';
import './episodespage.css';
import '../elements/dropdownmenu.css';



function Episodespage (){

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

const episodesChart = episodes.map((episode) => {
    return(
        <div className="episode-chart">
            <img className='episode-image--page' src={episode.image} alt={episode.name}/>
            <a className='episode-more' href={episode.link} target='_blank'><span></span></a>
            <h2 className='episode-title--page'>{episode.name}</h2>
            <span className='episode-topic--page'>{episode.topic}</span>
        </div>
    )
});


  return(
<>
    <header className={`app-header ${sticky ? 'sticky' : ''}`}>
        <NavBar />
    </header>
    <section>
        <SecondHero />
    </section>
    <section className='pageEpisodes-wrap'>
        {episodesChart}
    </section>
    <footer className='App-footer'>
        <Footer />
    </footer>
</>
  )

};


export default Episodespage;