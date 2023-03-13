import {StyleSheet} from 'react-native';
import * as Colors from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: '100%',
  },
  title: {
    fontSize: 14,
    fontStyle: 'normal',
    color: Colors.BLACK,
  },
  textFiledCon: {
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightContainer: {
    alignSelf: 'center',
    paddingHorizontal: 15,
    justifyContent: 'center',
    height: '100%',
  },
  txtInputStyle: {textAlignVertical: 'top', flex: 1},
});
export default styles;
