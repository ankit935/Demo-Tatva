import {Image, View} from 'react-native';
import React from 'react';
import * as Images from '../../assets/images';
import styles from './styles';
const LogoWBox = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logoImg} source={Images.APP_LOGO} />
    </View>
  );
};
export default LogoWBox;
