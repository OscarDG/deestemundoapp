import React from 'react';
import './dropdownmenu.css';

function DropMenu (){
        return(
            <div className= "dropdown-active">
                <ul className="dropdown-menu">
                    <li><a href="./Inicio" alt=' Inicio'>Inicio</a></li>
                    <li><a href="./Episodios" alt= 'Episodios'>Episodios</a></li>
                    <li><a href='./' alt='Blog'>Blog</a></li>
                    <li><a href='./' alt='Contacto'>Contacto</a></li>
                </ul>
            </div>
        )
};

export default DropMenu