import React from 'react';

function Footer() {
  return (
    <p id="copyright">
      {`Todos los Derechos Reservados ${new Date().getFullYear()} - Lucas Gonzalez &copy;`}
    </p>
  );
}

export default Footer;
