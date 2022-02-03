import React from 'react';

import Container from './common/Container';
import ProyectCard from './common/ProyectCard';
import Tecnologies from './Tecnologies';

import proyects from '../proyects';
import Slideshow from './common/Slideshow';

function Proyects() {
  const items = proyects.map((proyect) => (
    <ProyectCard
      title={proyect.title}
      imgPath={proyect.image}
      description={proyect.description}
    />
  ));

  return (
    <Container id="proyectos">
      <Tecnologies />
      <Slideshow
        items={items}
      />
    </Container>
  );
}

export default Proyects;
