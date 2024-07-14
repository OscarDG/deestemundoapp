
import React, {useState, useEffect} from 'react';
import NavBar from "../elements/navbar";
import Footer from "../elements/footer";
import SecondHero from '../elements/secondhero';
import Dropdown from '../elements/dropdownmenu'
import './episodespage.css'
import '../elements/dropdownmenu.css'

import image1 from '../images/T3_Ep1_v2.png';
import image2 from '../images/T3_Ep2.png';
import image3 from '../images/T3_Ep3.png';



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

    const episodes = [
    {
        name: 'Episodio 1',
        image: image1,
        Date: '16-06-2024',
        topic: 'Politics',
        isNew: false, 
        link: 'https://open.spotify.com/episode/3VN4IID3iagPCymctwAQEf?si=ee48d49fda9f4e29',
    },
    {
        name: 'Episodio 2',
        image: image2,
        Date: '06-07-2024',
        topic: 'Economics',  
        isNew: false,
        link: 'https://open.spotify.com/episode/5rDV4YcYijgk3acAs7XZ0f?si=fbf5ad003d7a4aaf',
    },
    {
        name: 'Episodio 3',
        image: image3,
        Date: '15-07-2024',
        topic: 'Social', 
        isNew: true,
        link: 'https://open.spotify.com/episode/7n7vMqFQxGMCDCkOWGw3qR?si=39a5ddacc0ea405f',
    },
    {
        name: 'Episodio 3',
        image: image3,
        Date: '15-07-2024',
        topic: 'Social', 
        isNew: true,
        link: 'https://open.spotify.com/episode/7n7vMqFQxGMCDCkOWGw3qR?si=39a5ddacc0ea405f',
    },
];

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