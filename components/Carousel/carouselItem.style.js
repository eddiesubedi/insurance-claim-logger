import { StyleSheet, Dimensions, Platform } from 'react-native';
import {sliderWidth, itemWidth, itemHorizontalMargin, wp} from '../../utils/carousel';
import Fonts from '../../utils/fonts';

const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: '#B721FF',
    background2: '#21D4FD'
};

const IS_IOS = Platform.OS === 'ios';
const { height: viewportHeight } = Dimensions.get('window');
const slideHeight = viewportHeight * 0.5;
const entryBorderRadius = 8;

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    shadowColor: 'black',
    shadowOpacity: .1,
    shadowRadius: 10,
  },
  extraSpaceContainer: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingRight: 10,
    position: 'relative',
  },
  close: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 40/2,
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 2,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: .1,
    shadowRadius: 10,
    ...Platform.select ({
      android: {
        borderWidth: 2,
        borderColor: '#eee',
      }
    }),
    shadowColor: 'black',
    shadowOpacity: .1,
    shadowRadius: 10,
  },
  closeIcon: {
    fontSize: 20
  },
  slideInnerContainer: {
    width: itemWidth,
    height: slideHeight,
    marginTop: '10%',
  },
  imageContainer: {
    flex: 1,
    marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius,
    overflow: 'hidden',
    zIndex: 1,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',

  },
  textContainer: {
    justifyContent: 'center',
    paddingTop: 25 - entryBorderRadius,
    paddingBottom: 25,
    paddingHorizontal: 25,
    backgroundColor: 'white',
    borderBottomLeftRadius: entryBorderRadius,
    borderBottomRightRadius: entryBorderRadius,
    ...Platform.select ({
      android: {
        borderWidth: 2,
        borderColor: '#eee',
      }
    })
  },
  title: {
    color: colors.black,
    fontSize: 20,
    letterSpacing: 2,
    fontFamily: Fonts.PoppinsSemiBold
  },
  subtitle: {
    marginTop: 6,
    color: colors.gray,
    fontSize: 12,
    fontStyle: 'italic'
  },
});
