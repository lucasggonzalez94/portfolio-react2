/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-scroll';

import MenuIcon from '@mui/icons-material/Menu';

import styles from './styles/Menu.module.scss';

function Menu() {
  const [checked, setChecked] = useState(false);

  const changeInput = (e) => {
    const inputActive = e.target;

    if (inputActive.checked === true) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  return (
    <header className={`${styles.header}`}>
      <input
        type="checkbox"
        id={`${styles.active}`}
        defaultChecked={checked}
        onChange={(e) => changeInput(e)}
      />
      <label htmlFor={`${styles.active}`} className={`${styles.btn_menu}`}>
        <MenuIcon />
      </label>
      <nav className={`${styles.navegacion}`}>
        <Link to="inicio" id="link-inicio" smooth duration={500}>
          Inicio
        </Link>
        <Link to="sobre_mi" id="link-sobre-mi" smooth duration={500}>
          Sobre mí
        </Link>
        <Link to="proyectos" id="link-proyectos" smooth duration={500}>
          Proyectos
        </Link>
        <Link to="contacto" id="link-contacto" smooth duration={500}>
          Contacto
        </Link>
      </nav>
    </header>
  );
}

export default Menu;
