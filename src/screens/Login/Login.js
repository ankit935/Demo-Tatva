import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import * as Colors from '../../assets/colors';
import {ButtonWBack, LogoWBox, TextFiled} from '../../components';
import * as alertMessage from '../../constants/alerts';
import * as Titles from '../../constants/titles';
import * as Utility from '../../utils';
import styles from './styles';
import React, {useState} from 'react';

export default function Login() {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const checkValidation = () => {
    if (email === '') {
      Utility.showAlert(alertMessage.ALERT_EMAIL_BLANK);
    } else if (!Utility.isValidEmail(email)) {
      Utility.showAlert(alertMessage.ALERT_EMAIL_INVALID);
    } else if (password === '') {
      Utility.showAlert(alertMessage.ALERT_PASSWORD_BLANK);
    } else {
      setEmail('');
      setPassword('');
      // navigation.navigate('BottomTab');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.childContainer}>
        <LogoWBox />
        <View style={styles.agencyContainer}>
          <Text style={styles.agencyName}>{Titles.AGENCY_NAME}</Text>
          <Text style={styles.signInTxt}>{Titles.SIGN_IN}</Text>
        </View>
      </View>
      <View>
        <TextFiled
          defaultValue={email}
          onChangeText={text => setEmail(text)}
          placeholder={Titles.ENTER_YOUR_EMAIL}
          title={Titles.EMAIL}
          marginTop={30}
        />
        <TextFiled
          defaultValue={password}
          onChangeText={text => setPassword(text)}
          placeholder={Titles.ENTER_YOUR_PASSWORD}
          title={Titles.PASSWORD}
          isrightImg
          marginTop={15}
          isSecure
          visible={visiblePassword}
          onPressEye={() => setVisiblePassword(!visiblePassword)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>{Titles.FORGOT_PASSWORD}</Text>
        <View style={styles.underline}></View>
      </TouchableOpacity>

      <View style={styles.btnContainer}>
        <ButtonWBack
          btnTitle={Titles.SIGN_IN}
          rightImg
          onPress={checkValidation}
        />
      </View>
      <View style={styles.seperatorContainer}>
        <View style={styles.seperatorLine} />
        <Text style={styles.seperatorTxt}>{Titles.DO_NOT_HAVE_AN_ACCOUNT}</Text>
        <View style={styles.seperatorLine} />
      </View>
      <View style={styles.btnSignUp}>
        <ButtonWBack
          btnTitle={'Sign Up'}
          onPress={() => navigation.navigate('SignUp')}
          borderWidth={1}
          childBackColor={Colors.WHITE}
          txtColor={Colors.MAIN_BLUE}
          secondaryBorderColor={Colors.MAIN_BLUE}
          borderColor={Colors.MAIN_BLUE}
        />
      </View>
    </SafeAreaView>
  );
}
