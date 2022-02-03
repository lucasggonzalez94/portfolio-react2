import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/TecnologyIcon.module.scss';

function TecnologyIcon({ label, icon }) {
  return (
    <div className={styles.tecnologia}>
      <div className={styles.icon}>
        {icon}
      </div>
      <p>{label}</p>
    </div>
  );
}

TecnologyIcon.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired
};

export default TecnologyIcon;
