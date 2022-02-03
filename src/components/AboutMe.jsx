import React from 'react';
import Container from './common/Container';

import styles from './styles/AboutMe.module.scss';

function AboutMe() {
  return (
    <Container id="sobre_mi">
      <h2>Sobre Mí</h2>
      <p className={`${styles.textoLargo}`}>
        Te cuento un poco sobre mí. Actualmente soy desarrollador web frontend
        (React JS) en Midas Consultores, estudiante de la tecnicatura superior
        en programación (UTN), y autodidacta, estoy en busca de ganar cada vez
        más experiencia. Tengo conocimientos en diferentes tecnologías,
        especializandome en el desarrollo web. Poseo un nivel de inglés
        intermedio (No conversacional), responsable, proactivo, con capacidad de
        trabajar en equipo, de adaptarme al cambio y aprender rápidamente, y con
        muchas ganas de expandir mis conocimientos en las tecnologías actuales.
      </p>
    </Container>
  );
}

export default AboutMe;
