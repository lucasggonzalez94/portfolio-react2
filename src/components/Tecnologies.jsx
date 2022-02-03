import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3Alt,
  faGit,
  faHtml5,
  faJava,
  faJsSquare,
  faLinux,
  faNodeJs,
  faPhp,
  faReact,
  faSass,
  faWindows
} from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faDatabase,
  faPaintBrush,
  faPenNib
} from '@fortawesome/free-solid-svg-icons';

import styles from './styles/Tecnologies.module.scss';

import TecnologyIcon from './common/TecnologyIcon';

function Tecnologies() {
  return (
    <div className={styles.tecnologies}>
      <TecnologyIcon
        label="HTML"
        icon={<FontAwesomeIcon icon={faHtml5} size="2x" inverse />}
      />
      <TecnologyIcon
        label="CSS"
        icon={<FontAwesomeIcon icon={faCss3Alt} size="2x" inverse />}
      />
      <TecnologyIcon
        label="SASS/SCSS"
        icon={<FontAwesomeIcon icon={faSass} size="2x" inverse />}
      />
      <TecnologyIcon
        label="JavaScript"
        icon={<FontAwesomeIcon icon={faJsSquare} size="2x" inverse />}
      />
      <TecnologyIcon
        label="React JS"
        icon={<FontAwesomeIcon icon={faReact} size="2x" inverse />}
      />
      <TecnologyIcon
        label="Node JS"
        icon={<FontAwesomeIcon icon={faNodeJs} size="2x" inverse />}
      />
      <TecnologyIcon
        label="Java"
        icon={<FontAwesomeIcon icon={faJava} size="2x" inverse />}
      />
      <TecnologyIcon
        label="C# (.NET)"
        icon={<FontAwesomeIcon icon={faCode} size="2x" inverse />}
      />
      <TecnologyIcon
        label="PHP"
        icon={<FontAwesomeIcon icon={faPhp} size="2x" inverse />}
      />
      <TecnologyIcon
        label="MySQL"
        icon={<FontAwesomeIcon icon={faDatabase} size="2x" inverse />}
      />
      <TecnologyIcon
        label="GIT"
        icon={<FontAwesomeIcon icon={faGit} size="2x" inverse />}
      />
      <TecnologyIcon
        label="Photoshop"
        icon={<FontAwesomeIcon icon={faPaintBrush} size="2x" inverse />}
      />
      <TecnologyIcon
        label="Illustrator"
        icon={<FontAwesomeIcon icon={faPenNib} size="2x" inverse />}
      />
      <TecnologyIcon
        label="Windows"
        icon={<FontAwesomeIcon icon={faWindows} size="2x" inverse />}
      />
      <TecnologyIcon
        label="Linux"
        icon={<FontAwesomeIcon icon={faLinux} size="2x" inverse />}
      />
    </div>
  );
}

export default Tecnologies;
