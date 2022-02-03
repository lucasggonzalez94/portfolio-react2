import React, {
  useRef, useEffect, useState, useCallback
} from 'react';
import PropTypes from 'prop-types';
import { useWindowSize } from 'react-use';

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import styles from './styles/Slideshow.module.scss';

function Slideshow(props) {
  const { items } = props;

  const { width } = useWindowSize();

  const principal = useRef(null);
  const slideshow = useRef(null);

  const [translation, setTranslation] = useState(0);
  const [slidePage, setSlidePage] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  const generateArray = useCallback(() => {
    const pages = items.length / itemsToShow;
    const dotsArray = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < pages; i++) {
      dotsArray.push(i);
    }
    return dotsArray;
  }, [itemsToShow, items]);

  const next = useCallback(() => {
    const itemSlideShow = slideshow.current.children[0].offsetWidth;
    const translationSlideShow = itemSlideShow * itemsToShow;
    const widthSlideShow = itemSlideShow * (slideshow.current.children.length - itemsToShow);
    if (translation < widthSlideShow) {
      slideshow.current.style.transform = `translateX(-${translation + translationSlideShow}px)`;
      setTranslation(translation + translationSlideShow);
      setSlidePage(slidePage + 1);
    }
    if ((translation + translationSlideShow) > widthSlideShow) {
      slideshow.current.style.transform = `translateX(-${widthSlideShow}px)`;
      setTranslation(widthSlideShow);
    }
  }, [slideshow, translation, itemsToShow, slidePage]);

  const back = useCallback(() => {
    const itemSlideShow = slideshow.current.children[0].offsetWidth;
    const translationSlideShow = itemSlideShow * itemsToShow;
    if (translation >= translationSlideShow) {
      slideshow.current.style.transform = `translateX(-${translation - translationSlideShow}px)`;
      setTranslation(translation - translationSlideShow);
      setSlidePage(slidePage - 1);
    } else if (translation < translationSlideShow) {
      slideshow.current.style.transform = 'translateX(0)';
      setTranslation(0);
      setSlidePage(0);
    }
  }, [slideshow, translation, itemsToShow, slidePage]);

  const navigation = useCallback((itemSlide, end) => {
    const itemSlideShow = slideshow.current.children[0].offsetWidth;
    const widthSlideShow = itemSlideShow * (slideshow.current.children.length - itemsToShow);
    const translationSlideShow = itemSlideShow * itemsToShow;
    if (end) {
      slideshow.current.style.transform = `translateX(-${widthSlideShow}px)`;
      setTranslation(widthSlideShow);
    } else {
      slideshow.current.style.transform = `translateX(-${translationSlideShow * itemSlide}px)`;
      setTranslation(translationSlideShow * itemSlide);
    }
    setSlidePage(itemSlide);
  }, [slideshow, translation, slidePage]);

  useEffect(() => {
    const itemSlideShow = slideshow.current.children[0].offsetWidth;
    const widthContainer = Math.floor(width / itemSlideShow);
    setItemsToShow(widthContainer - 1);
  }, [width]);

  useEffect(() => {
    const itemSlideShow = slideshow.current.children[0]?.offsetWidth;
    const translationSlideShow = itemSlideShow * itemsToShow;
    principal.current.style.width = `${translationSlideShow - 1}px`;
  }, [itemsToShow, items]);

  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.container}`}>
        <button
          type="button"
          className={`${styles.button}`}
          onClick={back}
        >
          <NavigateBeforeIcon />
        </button>
        <div ref={principal} className={`${styles.contenedorPrincipal}`}>
          <div ref={slideshow} className={`${styles.contenedorSlideShow}`}>
            {items}
          </div>
        </div>
        <button
          type="button"
          className={`${styles.button}`}
          onClick={next}
        >
          <NavigateNextIcon />
        </button>
      </div>
      <div className={`${styles.dots}`}>
        {generateArray().map((item) => (
          <button
            type="button"
            onClick={() => navigation(item, item === generateArray().length - 1)}
            key={item}
            className={`${slidePage === item ? styles.active : ''}`}
          >
            {null}
          </button>
        ))}
      </div>
    </div>
  );
}

export default React.memo(Slideshow);

Slideshow.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element).isRequired
};
