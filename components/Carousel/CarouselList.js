import React, { Component } from 'react';

import {  View, Text, Dimensions, StyleSheet, Platform} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarouselItem from './CarouselItem';

import {sliderWidth, itemWidth} from '../../utils/carousel';

const CarouselList = () => {
  const renderCards = ({item}) => {
    return <CarouselItem data={item} />;
  }
  return (
      <Carousel
        data={ENTRIES2}
        renderItem={renderCards}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        inactiveSlideOpacity={.5}
        inactiveSlideScale={0.90}
        enableMomentum={false}
      />
  );
}

export default CarouselList;


const ENTRIES2 = [
  {
      title: 'Fire In Napa',
      subtitle: 'After the Napa Fires, a Disaster-in-Waiting: Toxic AshGeorge Rose/Getty ImagesBy any measure, the fires that tore through Northern California were a major disaster. Forty-two people are dead, and 100,000 are displaced. More than 8,400 homes and other buildings were destroyed, more than 160,000 acres burned—and the fires aren’t all out yet.',
      illustration: 'https://i.imgur.com/SsJmZ9jl.jpg'
  },
  {
      title: 'Favourites landscapes 2',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/5tj6S7Ol.jpg'
  },
  {
      title: 'Favourites landscapes 3',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat',
      illustration: 'https://i.imgur.com/pmSqIFZl.jpg'
  },
  {
      title: 'Favourites landscapes 4',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/cA8zoGel.jpg'
  },
  {
      title: 'Favourites landscapes 5',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/pewusMzl.jpg'
  },
  {
      title: 'Favourites landscapes 6',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat',
      illustration: 'https://i.imgur.com/l49aYS3l.jpg'
  }
];