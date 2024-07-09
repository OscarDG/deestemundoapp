import './mainhero.css'
import background from '../images/background.jpg';

function MainHero(){
    return(
        <>
        <section className='main-hero'>
        <img src= {background} className='main-hero--img' Alt='Main hero'/>
            <div className='main-hero--overlay'>
                <button Type= 'button' className='main-hero--button'>APOYANOS</button>
            </div>
        </section>
        </>
    );
}

export default MainHero;