/* eslint-disable import/no-useless-path-segments */
import merck from '../src/assets/merck.jpg';
import medlog from '../src/assets/medlog.jpg';
import galicia from '../src/assets/galicia.png';
import buscadorAutos from '../src/assets/buscador-autos.jpeg';
import citasVete from '../src/assets/citas-vete.jpeg';
import carrito from '../src/assets/carrito.jpeg';
import cripto from '../src/assets/cripto.jpeg';
import criptoReact from '../src/assets/cripto-react.jpeg';
import bebidas from '../src/assets/bebidas.jpeg';
import frases from '../src/assets/frases.jpeg';
import gastos from '../src/assets/gastos.jpeg';
import peluqueria from '../src/assets/peluqueria.jpeg';
import github from '../src/assets/github.jpeg';
import letras from '../src/assets/letras.jpeg';
import seguros from '../src/assets/seguros.jpeg';
import festival from '../src/assets/festival.jpeg';
import gestion from '../src/assets/gestion.jpg';

const proyects = [
  {
    title: 'Backoffice Merck (Midas)',
    image: merck,
    description: 'Proyecto backoffice de análisis de fármacos anticonceptivos en el cual se le daban instrucciones a los instrumentos y se hacían reportes.'
  },
  {
    title: 'Proyecto MEDLOG (Midas)',
    image: medlog,
    description: 'Proyecto de obtención y configuración de turnos para empresa transportadora de containers, desarrollo tanto para web pública, backoffice y tablet para el depósito.'
  },
  {
    title: 'Backoffice Galicia (Midas)',
    image: galicia,
    description: 'Proyecto de backoffice multifuncional para Banco Galicia.'
  },
  {
    title: 'Buscador de Autos',
    image: buscadorAutos,
    description: 'Buscador de autos leídos desde un objeto que simula una base de datos local, con distintos filtros de busqueda. Hecho con HTML, CSS y Javascript.',
    link: 'https://buscador-autos-js.netlify.app/',
    repo: 'https://github.com/lucasggonzalez94/BuscadorDeAutos'
  },
  {
    title: 'Citas en Veterinaria',
    image: citasVete,
    description: 'Proyecto de registro de turnos para una veterinaria, Hecho principalmente con React JS.',
    link: 'https://citas-vete-react.netlify.app/',
    repo: 'https://github.com/lucasggonzalez94/CitasConReact'
  },
  {
    title: 'Carrito de Compras',
    image: carrito,
    description: 'Modelo de una academia online de cursos de programación, el objetivo fue maquetar el sitio principal con HTML y CSS y agregar la funcionalidad del carrito de compras con JavaScript.',
    link: 'https://beprogrammer.netlify.app/',
    repo: 'https://github.com/lucasggonzalez94/carritoDeComprasPropio'
  },
  {
    title: 'Cotizador de Criptomonedas',
    image: cripto,
    description: 'Proyecto de cotizacion de criptomonedas a monedas fisicas, se utilizó la API CryptoCompare y JavaScript.',
    link: 'https://cotizador-criptomonedas-lucas.netlify.app/',
    repo: 'https://github.com/lucasggonzalez94/Criptomonedas'
  },
  {
    title: 'Cotizador Criptomonedas con React',
    image: criptoReact,
    description: 'Proyecto de cotizacion de criptomonedas a monedas fisicas, se utilizó la API CryptoCompare y React JS.',
    link: 'https://criptomonedas-react-lucas.netlify.app/',
    repo: 'https://github.com/lucasggonzalez94/criptomonedas-react'
  },
  {
    title: 'Buscador de Recetas Bebidas',
    image: bebidas,
    description: 'Proyecto hecho React JS y consumiendo la API TheCocktailDB para consultar las recetas.',
    link: 'https://bebidas-react-lucas.netlify.app/',
    repo: 'https://github.com/lucasggonzalez94/bebidas'
  },
  {
    title: 'Frases de Breaking Bad',
    image: frases,
    description: 'Obteniendo frases de Breaking Bad con React JS y consumiento la api Breakingbadquotes.',
    link: 'https://breaking-bad-lucas.netlify.app/',
    repo: 'https://github.com/lucasggonzalez94/breakingbad'
  },
  {
    title: 'Control de Presupuesto',
    image: gastos,
    description: 'Proyecto de control de presupuesto hecho con React JS.',
    link: 'https://gastos-react.netlify.app/',
    repo: 'https://github.com/lucasggonzalez94/presupuestoReact'
  },
  {
    title: 'Turnos Peluquería',
    image: peluqueria,
    description: 'Proyecto de administracion de turnos para una peluquería, con conexion a base de datos MySQL.',
    link: 'https://app-peluqueria-react.netlify.app/',
    repo: 'https://github.com/lucasggonzalez94/AppPeluqueria'
  },
  {
    title: 'Buscador GitHub Jobs',
    image: github,
    description: 'Consumiento API de GitHub Jobs con React JS.',
    link: 'https://github-jobs-lucas.netlify.app/',
    repo: 'https://github.com/lucasggonzalez94/GithubJobs'
  },
  {
    title: 'Buscador de Letras',
    image: letras,
    description: 'Buscador de letras de canciones consumiento APIs lyrics y TheAudioDB con React JS.',
    link: 'https://buscador-letras-react-lucas.netlify.app/',
    repo: 'https://github.com/lucasggonzalez94/letras-react'
  },
  {
    title: 'Cotizador de Seguros',
    image: seguros,
    description: 'Cotizador de seguros para autos, tiene en cuenta el modelo, region del fabricante de la marca y tipo de plan. Hecho con React JS.',
    link: 'https://cotizador-seguros-react-lucas.netlify.app/',
    repo: 'https://github.com/lucasggonzalez94/cotizadorSeguros'
  },
  {
    title: 'Festival de Rock',
    image: festival,
    description: 'Proyecto utilizando HTML, SASS, JavaScript y funciones de Gulp.',
    link: 'https://festival-rock.netlify.app/',
    repo: 'https://github.com/lucasggonzalez94/FestivalDeMusicaDeployment'
  },
  {
    title: 'Gestión de alumnos',
    image: gestion,
    description: 'Gestion de alumnos e inscripciones para una universidad. Codificado en Java, librería Swing, MySQL como base de datos y usando el patrón MVC.',
    repo: 'https://github.com/lucasggonzalez94/GestorInscripcionesUniversidad'
  }
];

export default proyects;
