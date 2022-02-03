import React from 'react';
import Typed from 'react-typed';

import styles from './styles/Banner.module.scss';

function Banner() {
  return (
    <div className={`${styles.contenedor}`} id="inicio">

      <span>¡Hola!, soy</span>
      <h1>Lucas González</h1>
      <span>
        {'<'}
        <Typed
          strings={['Desarrollador Web', 'Desarrollador Front End', 'Desarrollador Junior Avanzado']}
          typeSpeed={100}
          backSpeed={50}
          loop
        />
        {' />'}
      </span>
      <a href="https://drive.google.com/uc?id=1AEglt4MnWnOcmfvdGeQv4Fz-7Mw6UCgn&export=download" className="btn" target="_blank" rel="noreferrer">Descargar CV</a>
    </div>
  );
}

export default Banner;
