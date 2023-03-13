import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    borderBottomRightRadius: 6,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 6,
  },
  childContainer: {
    height: 45,
    width: '100%',
    position: 'absolute',
    // top: -4,
    // left: -2,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  leftImage: {
    marginRight: 10,
    alignSelf: 'center',
  },
  btnTitle: {
    textAlign: 'center',
  },
  rightImage: {
    marginLeft: 10,
    alignSelf: 'center',
  },
});
export default styles;
