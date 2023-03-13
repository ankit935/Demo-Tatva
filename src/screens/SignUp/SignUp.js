import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import * as Colors from '../../assets/colors';
import {ButtonWBack, LogoWBox, TextFiled} from '../../components';
import * as alertMessage from '../../constants/alerts';
import * as Titles from '../../constants/titles';
import * as Utility from '../../utils';
import styles from './styles';

export default function SignUp() {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const checkValidation = () => {
    if (name === '') {
      Utility.showAlert(alertMessage.ALERT_NAME_BLANK);
    } else if (email === '') {
      Utility.showAlert(alertMessage.ALERT_EMAIL_BLANK);
    } else if (!Utility.isValidEmail(email)) {
      Utility.showAlert(alertMessage.ALERT_EMAIL_INVALID);
    } else if (password === '') {
      Utility.showAlert(alertMessage.ALERT_PASSWORD_BLANK);
    } else if (!Utility.isValidComparedPassword(password, confirmPassword)) {
      Utility.showAlert(alertMessage.ALERT_PASSWORD_COMPARE);
    } else {
      setEmail('');
      setPassword('');
      setName('');
      setConfirmPassword('');
      // navigation.navigate('BottomTab');
    }
  };
  return (
    <ScrollView contentContainerStyle={{paddingBottom: 20}}>
      <SafeAreaView style={styles.container}>
        <View style={styles.childContainer}>
          <LogoWBox />
          <View style={styles.agencyContainer}>
            <Text style={styles.agencyName}>{Titles.AGENCY_NAME}</Text>
            <Text style={styles.signInTxt}>{Titles.SIGN_UP}</Text>
          </View>
        </View>
        <View>
          <TextFiled
            defaultValue={name}
            onChangeText={text => setName(text)}
            placeholder={Titles.ENTER_YOUR_FULLNAME}
            title={Titles.FULL_NAME}
            marginTop={30}
          />
          <TextFiled
            defaultValue={email}
            onChangeText={text => setEmail(text)}
            placeholder={Titles.ENTER_YOUR_EMAIL}
            title={Titles.EMAIL}
            marginTop={15}
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
          <TextFiled
            defaultValue={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
            placeholder={Titles.RE_ENTER_YOUR_PASSWORD}
            title={Titles.CONFIRM_PASSWORD}
            isrightImg
            marginTop={15}
            isSecure
            visible={visibleConfirmPassword}
            onPressEye={() =>
              setVisibleConfirmPassword(!visibleConfirmPassword)
            }
          />
        </View>
        <View style={styles.btnContainer}>
          <ButtonWBack
            btnTitle={Titles.SIGN_UP}
            rightImg
            onPress={checkValidation}
          />
        </View>
        <View style={styles.seperatorContainer}>
          <View style={styles.seperatorLine} />
          <Text style={styles.seperatorTxt}>
            {Titles.ALREADY_HAVE_AN_ACCOUNT}
          </Text>
          <View style={styles.seperatorLine} />
        </View>
        <View style={styles.btnSignUp}>
          <ButtonWBack
            btnTitle={Titles.SIGN_IN}
            onPress={() => navigation.navigate('Login')}
            borderWidth={1}
            secondaryBorderColor={Colors.MAIN_BLUE}
            childBackColor={Colors.WHITE}
            txtColor={Colors.MAIN_BLUE}
            borderColor={Colors.MAIN_BLUE}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
