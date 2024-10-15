import React, {useState} from 'react'
import '../css/navbar.css'
import logo_sinfondo from '../images/logo_sinfondo.png'
import DropMenu from '../elements/dropdownmenu'

function NavBar(){

    const [navClass, setNavClass] = useState('nav-menu--mobile');
    const [dropWrapClass, setDropClass] = useState('dropmenu-wrap unActive')
    const [open, SetOpen] = useState(false);

    const handleEvent = () => {
        SetOpen(() => !open);

        if(navClass === 'nav-menu--mobile'){
            setNavClass(() => 'nav-menu--mobile open')
        }else{
            setNavClass(() => 'nav-menu--mobile')
        };
    }

    const pages = ['Inicio', 'Episodios', 'Blog', 'Contacto'];
    const navLinks = pages.map(page => {
        return (
                <a className="nav-links" href={'/' + page}>
                    {page}
                </a>
        )
    });
    return (
        <>
            <div className= 'header-logo'>
                <img alt='header logo' src={logo_sinfondo}/>
            </div>
            <div className= 'header-menu'>
                <nav className="nav-menu">{navLinks}</nav>
            </div>
            <div className= {navClass} onClick= {handleEvent}>
                <span className='line-1'></span>
                <span className='line-2'></span>
                <span className='line-3'></span>
            </div>
            <div>
              {open && <DropMenu />}
            </div>
        </>
     )
};

export default NavBar;