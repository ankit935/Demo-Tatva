import { Alert, Dimensions, Linking, PixelRatio } from "react-native";
import { APP_NAME } from "../constants/titles";

const screenWidth = Dimensions.get("screen").width;
const scale = screenWidth / 375;

export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const getOrdinalNum = (number) => {
  let selector;

  if (number <= 0) {
    selector = 4;
  } else if ((number > 3 && number < 21) || number % 10 > 3) {
    selector = 0;
  } else {
    selector = number % 10;
  }

  return number + ["th", "st", "nd", "rd", ""][selector];
};

export const trimString = (text) => {
  if (text) {
    return text.replace(/^\s+|\s+$/g, "");
  }
  return text;
};

export const callNumber = (url) => {
  Linking.canOpenURL(url)
    .then((supported) => {
      if (!supported) {
        console.log("Can't handle url: " + url);
      } else {
        return Linking.openURL(url);
      }
    })
    .catch((err) => console.error("An error occurred", err));
};

export const isValidEmail = (email) => {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(email) === true) {
    return true;
  }
  return false;
};

export const isValidPassword = (password) => {
  if (password.length >= 6) {
    return true;
  }
  return false;
};

export const isValidComparedPassword = (password, confirmPassword) => {
  if (password == confirmPassword) {
    return true;
  }
  return false;
};
export const showAlert = (message, okPress) => {
  Alert.alert(
    APP_NAME,
    message,
    [
      {
        text: "OK",
        onPress: () => {
          console.log("OK Pressed"), okPress;
        },
      },
    ],
    { cancelable: false }
  );
};
