import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/ProyectCard.module.scss';

function ProyectCard({
  title, imgPath, description, repo, url
}) {
  const handleDragStart = (e) => e.preventDefault();

  return (
    <article
      className={`item ${styles.card}`}
      onDragStart={handleDragStart}
      role="presentation"
    >
      <img
        src={imgPath}
        alt={imgPath}
        className={styles.imgProyect}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.buttons}>
        {
          url && (
            <a href={url} className={styles.btn} target="_blank" rel="noreferrer">Ir al Sitio</a>
          )
        }
        {
          repo && (
            <a href={repo} className={styles.btn} target="_blank" rel="noreferrer">Repositorio</a>
          )
        }
      </div>
    </article>
  );
}

ProyectCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  url: PropTypes.string
};

ProyectCard.defaultProps = {
  url: ''
};

export default ProyectCard;
