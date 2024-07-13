import React from 'react';
import './dropdownmenu.css';

function DropMenu (props){
    if (props.isTrue){
        return(
            <div className="dropdown-active">
                <ul className="dropdown-menu">
                    <li><a href="./" alt=' Inicio'>Inicio</a></li>
                    <li><a href="./" alt= 'Episodios'>Episodios</a></li>
                    <li><a href='./' alt='Blog'>Blog</a></li>
                    <li><a href='./' alt='Contacto'>Contacto</a></li>
                </ul>
            </div>
        )
    }else{
        return(
            <div className="dropdown">
                <ul className="dropdown-menu">
                    <li><a href="./" alt=' Inicio'>Inicio</a></li>
                    <li><a href="./" alt= 'Episodios'>Episodios</a></li>
                    <li><a href='./' alt='Blog'>Blog</a></li>
                    <li><a href='./' alt='Contacto'>Contacto</a></li>
                </ul>
            </div>
        )
    }
};

export default DropMenu