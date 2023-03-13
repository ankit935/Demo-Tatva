import {Platform, StyleSheet} from 'react-native';
import * as Colors from '../../assets/colors';

const styles = StyleSheet.create({
  linearContainer: {
    flex: 1,
  },
  container: {
    marginHorizontal: 24,
    marginTop: Platform.OS == 'android' ? 35 : 75,
  },
  childContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  agencyContainer: {
    marginHorizontal: 10,
  },
  agencyName: {
    fontSize: 20,
    color: Colors.BLACK,
  },
  signInTxt: {
    fontSize: 14,
    color: Colors.MAIN_BLUE,
  },
  titleTxt: {
    fontSize: 32,
    color: 'black',
    fontStyle: 'normal',
  },
  titleTxtBold: {
    fontWeight: '700',
  },
  btnContainer: {
    marginHorizontal: 50,
    marginTop: 45,
  },
  forgotPassword: {
    color: Colors.MAIN_BLUE,
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  btnSignUp: {
    marginHorizontal: 50,
    marginTop: 25,
  },
  seperatorContainer: {
    height: 25,
    width: '100%',
    flexDirection: 'row',
    marginTop: 50,
  },
  seperatorLine: {
    height: 1,
    backgroundColor: Colors.BORDER_LOW_LIGHTGRAY,
    width: '25%',
    alignSelf: 'center',
  },
  seperatorTxt: {
    paddingHorizontal: 10,
    alignSelf: 'center',
    fontSize: 14,
    color: Colors.BLACK,
  },
});
export default styles;
