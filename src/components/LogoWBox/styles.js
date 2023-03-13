import { StyleSheet } from "react-native";
import * as Colors from "../../assets/colors";

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    borderColor: Colors.MAIN_BLUE,
    borderWidth: 1,
    borderRadius: 2,
  },
  logoImg: {
    height: 36,
    width: 33,
  },
});
export default styles;
