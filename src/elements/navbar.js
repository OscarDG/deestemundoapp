import '../elements/navbar.css'
import logo_sinfondo from '../images/logo_sinfondo.png'
import menu from '../images/burguer_menu.svg'

function NavBar(props){
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
        <div className='nav-menu--mobile'>
            <img src={menu} alt='menú'/>
        </div>
        </>  
     )
}

export default NavBar;