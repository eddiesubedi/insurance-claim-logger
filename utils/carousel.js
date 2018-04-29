import {  Dimensions} from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

export function wp (percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}
export const itemHorizontalMargin = wp(1.5);
export const sliderWidth = viewportWidth;

const slideWidth = wp(75);
export const itemWidth = slideWidth + itemHorizontalMargin * 4;