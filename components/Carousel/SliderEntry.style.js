import { StyleSheet, Dimensions, Platform } from 'react-native';
import {sliderWidth, itemWidth, itemHorizontalMargin, wp} from '../../utils/carousel';
import { platform } from 'os';

const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: '#B721FF',
    background2: '#21D4FD'
};

const IS_IOS = Platform.OS === 'ios';
const { height: viewportHeight } = Dimensions.get('window');
const slideHeight = viewportHeight * 0.36;
const entryBorderRadius = 8;

export default StyleSheet.create({
  slideInnerContainer: {
    width: itemWidth,
    height: slideHeight,
    paddingHorizontal: itemHorizontalMargin,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: .1,
    shadowRadius: 10,    
    elevation: 20,
  },
  shadow: {
    
  },
  imageContainer: {
    flex: 1,
    marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius,
    overflow: 'hidden',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  textContainer: {
    justifyContent: 'center',
    paddingTop: 20 - entryBorderRadius,
    paddingBottom: 20,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderBottomLeftRadius: entryBorderRadius,
    borderBottomRightRadius: entryBorderRadius,
    ...Platform.select ({
      android: {
        borderWidth: 2,
        borderColor: 'black',
      }
    })
  },
  title: {
    color: colors.black,
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 0.5
  },
  subtitle: {
    marginTop: 6,
    color: colors.gray,
    fontSize: 12,
    fontStyle: 'italic'
  },
});
