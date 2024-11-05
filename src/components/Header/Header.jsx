import {Link} from 'react-router-dom';
import "./Header.css"
import "../Navbar/Navbar.css"
import Logo_nav from "../../../public/logo3.png"
import Image_nav from "../../../public/nom.png"



let vacio = '';
function Header_componente() {
    const abrir_cerrar_menu = () =>{
        let menu_desplegable = document.getElementById('menu');
        let boton_cerrar = document.getElementById('x');
        menu_desplegable.classList.toggle('abrir_menu');
        boton_cerrar.classList.toggle('colocar_x');
    }
    return (

        <header>
            <div className="barras">
                <button onClick={abrir_cerrar_menu} className='boton_menu margen_boton' id='x'>
                    <img id="logo" src={Logo_nav} alt="..." width="65" height="65"/>
                </button>

            </div>
            <nav id='menu' className="desplegable">
                <ul className="nav_lateral">
                    <a className="logo_barra" href="#">
                        <img id="logo" src={Logo_nav} alt="..." width="65" height="65"/>
                    </a>
                    <li className="estilo_lista_vacio"><img className="object-center h-25" id="logo" src={Image_nav}
                                                            alt="nombre_pagina" width="65" height="65"/>
                    </li>
                    <li className="estilo_lista_vacio"><Link to="/"
                                                             className="estilo_bloque hover padding_lateral ">Inicio</Link>
                    </li>



                    <li className="estilo_lista_vacio"><Link to="/Nosotros"
                                                             className="estilo_bloque hover padding_lateral ">Nosotros</Link>
                    </li>


                    <li className="estilo_lista_vacio"><Link to="/Equipamiento"
                                                             className="estilo_bloque hover padding_lateral"
                    >Equipamiento</Link></li>


                    <li className="estilo_lista_vacio"><Link to="/Calzado"
                                                             className="estilo_bloque hover padding_lateral"
                    >Calzado</Link></li>
                    <li className="estilo_lista_vacio"><a className="estilo_bloque hover padding_lateral"
                                                          href={vacio}>Indumentaria</a></li>
                    <li className="estilo_lista_vacio"><a className="estilo_bloque hover padding_lateral"
                                                          href={vacio}>Ayuda</a></li>

                    <div>

                        <div className='absolute inset-y-2 right-2 '>
                            <div className="navbar-search">
                                <input
                                    className="bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-black outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-gray-900"
                                    autoComplete="off"
                                    placeholder="BUSCA AQUI!!!"
                                    name="text"
                                    type="text"
                                />
                                <button type="submit">🔍</button>
                            </div>
                        </div>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Header_componente;