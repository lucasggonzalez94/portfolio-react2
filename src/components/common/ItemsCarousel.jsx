import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-grid-carousel';

function ItemsCarousel({
  items, hideArrows, showDots, autoPlay
}) {
  return (
    <Carousel
      autoplay={autoPlay ? 2000 : false}
      hideArrow={hideArrows}
      showDots={showDots}
      cols={5}
      rows={1}
      gap={3}
      loop
    >
      {items.map((item) => (
        <Carousel.Item>
          {item}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

ItemsCarousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
  hideArrows: PropTypes.bool,
  showDots: PropTypes.bool,
  autoPlay: PropTypes.bool
};

ItemsCarousel.defaultProps = {
  hideArrows: false,
  showDots: false,
  autoPlay: false
};

export default ItemsCarousel;
