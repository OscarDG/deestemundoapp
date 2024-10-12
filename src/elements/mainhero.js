import '../css/mainhero.css'
//import 'bootstrap/dist/css/bootstrap.min.css'
import background from '../images/background.jpg';
//import {Button, Alert} from 'react-bootstrap';

function MainHero(){
    return(
        <>
        <section className='main-hero'>
        <img src= {background} className='main-hero--img' Alt='Main hero'/>
            <div className='main-hero--overlay'>
                {/*<Alert variant='danger'>Una alerta</Alert>
                <Button variant="secondary">Otro boton</Button>*/}
                <button Type= 'button' className='main-hero--button'>APOYANOS</button>
            </div>
        </section>
        </>
    );
}

export default MainHero;