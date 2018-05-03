import { StyleSheet, Platform } from 'react-native';
import { itemWidth } from '../../utils/carousel';
import Fonts from '../../utils/fonts';

const colors = {
  black: '#1a1917',
  gray: '#888888',
};

const IS_IOS = Platform.OS === 'ios';
const entryBorderRadius = 8;

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  extraSpaceContainer: {
    paddingTop: 20,
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
    borderRadius: 40 / 2,
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 2,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    ...Platform.select({
      android: {
        borderWidth: 2,
        borderColor: '#eee',
      },
    }),
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  closeIcon: {
    fontSize: 20,
  },
  slideInnerContainer: {
    width: itemWidth,
    height: 'auto',
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
    ...Platform.select({
      android: {
        borderWidth: 2,
        borderColor: '#eee',
      },
    }),
  },
  title: {
    color: colors.black,
    fontSize: 20,
    fontFamily: Fonts.PoppinsSemiBold,
  },
  subtitle: {
    marginTop: 6,
    color: colors.gray,
    fontSize: 16,
    fontFamily: Fonts.Arimo,
    lineHeight: 22,
    ...Platform.select({
      android: {
        lineHeight: 28,
      },
    }),
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 25 - entryBorderRadius,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'flex-start',

    display: 'flex',
  },
  sendButton: {
    marginLeft: 'auto',
  },
  btnText: {
    fontFamily: Fonts.MontserratSemiBold,
  },
  editText: {
    color: '#3a6abe',
  },
  sendText: {
    color: '#4cae4a',
  },
});
