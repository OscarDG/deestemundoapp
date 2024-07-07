
import image1 from './images/T3_Ep1_v2.png';
import image2 from './images/T3_Ep2.png';
import image3 from './images/T3_Ep3.png';
import image4 from './images/T3_Ep3.png';

function EpisodesContent(){
    const episodes = [{
          name: 'Episodio 1',
          image: image1,
          Date: '16-06-2024',
          topic: 'Politics',
          isNew: false, 
          link: 'https://open.spotify.com/episode/3VN4IID3iagPCymctwAQEf?si=ee48d49fda9f4e29' ,
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
        link: 'https://open.spotify.com/episode/7n7vMqFQxGMCDCkOWGw3qR?si=39a5ddacc0ea405f' ,
    },
]
    const episodesContainers = episodes.map((episode) => {
            if (episode.isNew === true){
                return(
                    <>
                    <div className="episodes-wrap">
                        <span className='new-span'></span>
                        <div className="episode-image">
                        <a href= {episode.link} target='_blank'><img alt={episode.name} src={episode.image}/></a>
                        </div>
                        <div className="episode-name">
                            <p>{episode.name}</p>
                        </div>
                        <span className="episode-date">{episode.Date}</span> 
                        <div className="episode-topic">
                            <p>Categoría: {episode.topic}</p>
                        </div>
                    </div>
                    </>
                )
            }else{
                return(
                    <div className="episodes-wrap">
                        <div className="episode-image">
                            <a href={episode.link} target='_blank'><img alt={episode.name} src={episode.image}/></a>
                        </div>
                        <div className="episode-name">
                            <p>{episode.name}</p>
                        </div>
                        <span className="episode-date">{episode.Date}</span>
                        <div className="episode-topic">
                            <p>Categoría: {episode.topic}</p>
                        </div>
                    </div>
                )
            }
    });
    return(
        <>
        <div className="mainEpisodes-wrap">
            {episodesContainers}
            <div className='episodes-button'>
                <a href='./'><p>Más episodios</p></a>
            </div>
        </div>
        </>
    )

}

export default EpisodesContent;