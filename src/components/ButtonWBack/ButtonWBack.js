import {Image, Text, TouchableOpacity, View} from 'react-native';
import * as Colors from '../../assets/colors';
import * as Images from '../../assets/images';
import styles from './styles';
import React from 'react';
export default function ButtonWBack({
  bgColor,
  btnTitle,
  txtColor,
  onPress,
  leftImgH,
  leftImgW,
  rightImgH,
  rightImgW,
  mainBackColor,
  childBackColor,
  borderWidth,
  leftImg,
  rightImg,
  borderColor,
  rightImgIcon,
  rightImgTint,
  leftImgTint,
  fontSize,
  opacity,
  secondaryBorderColor,
  fontFamily,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          borderBottomWidth: borderWidth ? borderWidth : 2,
          borderRightWidth: borderWidth ? borderWidth : 2,
          borderColor: borderColor ? 'transparent' : Colors.MAIN_BORDER_GREEN,
          backgroundColor: mainBackColor ? mainBackColor : null,
          borderWidth: borderWidth ? borderWidth : 0,
          opacity: opacity ? opacity : 1,
        },
        styles.mainContainer,
      ]}>
      <View
        style={[
          {
            backgroundColor: childBackColor ? childBackColor : Colors.MAIN_BLUE,
            borderColor:
              childBackColor == Colors.WHITE || childBackColor == 'transparent'
                ? secondaryBorderColor
                  ? secondaryBorderColor
                  : Colors.WHITE
                : null,
            borderWidth:
              childBackColor == Colors.WHITE || childBackColor == 'transparent'
                ? 1
                : null,
            top:
              childBackColor == Colors.WHITE || childBackColor == 'transparent'
                ? 0
                : -4,
            left:
              childBackColor == Colors.WHITE || childBackColor == 'transparent'
                ? 0
                : -2,
          },
          styles.childContainer,
        ]}>
        {leftImg && (
          <Image
            style={[
              {
                height: leftImgH ? leftImgH : 10,
                width: leftImgW ? leftImgW : 10,
                tintColor: leftImgTint ? leftImgTint : null,
              },
              styles.leftImage,
            ]}
            source={leftImg ? leftImg : Images.PLUS}
          />
        )}

        <Text
          style={[
            {
              color: txtColor ? txtColor : Colors.WHITE,
              fontSize: fontSize,
            },
            styles.btnTitle,
          ]}>
          {btnTitle}
        </Text>
        {rightImg && (
          <Image
            style={[
              {
                height: rightImgH ? rightImgH : 13,
                width: rightImgW ? rightImgW : 34,
                tintColor: rightImgTint ? rightImgTint : null,
              },
              styles.rightImage,
            ]}
            source={rightImgIcon ? rightImgIcon : Images.ARROW}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}
