import React from 'react';

import Carousel from 'react-native-snap-carousel';
import CarouselItem from './CarouselItem';

import { sliderWidth, itemWidth } from '../../utils/carousel';

const CarouselList = (props) => {
  const renderCards = data => <CarouselItem data={data.item} deleteClaim={props.deleteClaim} navigateToClaim={props.navigateToClaim} />;
  return (
    <Carousel
      data={props.data}
      renderItem={renderCards}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      inactiveSlideOpacity={0.5}
      inactiveSlideScale={0.9}
      enableMomentum={false}
      ref={props.inputRef}
    />
  );
};

export default CarouselList;
