import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import * as Colors from '../../assets/colors';
import * as Images from '../../assets/images';
import styles from './styles';
import React from 'react';
export default function TextFiled({
  onChangeText,
  title,
  placeholder,
  isSecure,
  keyboardType,
  rightImg,
  rightImgH,
  rightImgW,
  isrightImg,
  marginTop,
  marginBottom,
  onPressEye,
  visible,
  borderColor,
  multiLine,
  numberOfLines,
  defaultValue,
  pressable,
  value,
  descHeight,
  inputTextFamily,
}) {
  return (
    <View style={styles.container}>
      {title && (
        <Text
          style={[
            {
              marginBottom: marginBottom ? marginBottom : 5,
              marginTop: marginTop ? marginTop : 5,
            },
            styles.title,
          ]}>
          {title}
        </Text>
      )}
      {pressable ? (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPressEye}
          style={[
            styles.textFiledCon,
            {
              borderColor: borderColor ? borderColor : Colors.BORDER_LIGHTGRAY,
              height: descHeight ? descHeight : 46,
            },
          ]}>
          <TextInput
            value={value}
            defaultValue={defaultValue}
            secureTextEntry={isSecure ? !visible : visible}
            keyboardType={keyboardType ? keyboardType : 'default'}
            placeholder={placeholder}
            onChangeText={onChangeText}
            multiline={multiLine ? multiLine : false}
            numberOfLines={numberOfLines ? numberOfLines : null}
            style={styles.txtInputStyle}
          />
          {isrightImg && (
            <TouchableOpacity
              style={styles.rightContainer}
              onPress={onPressEye}>
              <Image
                style={{
                  height: rightImgH ? rightImgH : 16,
                  width: rightImgW ? rightImgW : 16,
                  tintColor: visible ? Colors.MAIN_BLUE : null,
                }}
                source={rightImg ? rightImg : Images.EYE}
              />
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      ) : (
        <View
          style={[
            styles.textFiledCon,
            {
              borderColor: borderColor ? borderColor : Colors.BORDER_LIGHTGRAY,
              height: descHeight ? descHeight : 46,
            },
          ]}>
          <TextInput
            defaultValue={defaultValue}
            secureTextEntry={isSecure ? !visible : visible}
            keyboardType={keyboardType ? keyboardType : 'default'}
            placeholder={placeholder}
            onChangeText={onChangeText}
            multiline={multiLine ? multiLine : false}
            numberOfLines={numberOfLines ? numberOfLines : null}
            style={[
              styles.txtInputStyle,
              {
                fontSize: 14,
              },
            ]}
          />
          {isrightImg && (
            <TouchableOpacity
              style={styles.rightContainer}
              onPress={onPressEye}>
              <Image
                style={{
                  height: rightImgH ? rightImgH : 16,
                  width: rightImgW ? rightImgW : 16,
                  tintColor: visible ? Colors.MAIN_BLUE : null,
                }}
                source={rightImg ? rightImg : Images.EYE}
              />
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
}
