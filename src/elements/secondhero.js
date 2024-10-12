
import background from '../images/background.jpg';
import '../css/secondhero.css';

function SecondHero(){
    return(
        <>
            <div className='second-hero'>
            <img src= {background} className='second-hero--img' Alt='Second hero'/>
                <div className='second-hero--overlay'> </div>
            </div>
        </>
    );
}

export default SecondHero;