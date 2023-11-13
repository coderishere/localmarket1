import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import TextInputContainer from "../assets/TextInput/TextInputContainer";
import LoginSignupButton from "../assets/ButtonContainer/LoginSignupButton";


function LoginPage({ navigation }) {
  function ForgotPasswordHandler() {
    console.log("check");
  }
  function SignUpPageHandler() {
    navigation.navigate("signupPage");
  }
  function MainPageHandler() {
    navigation.navigate("Mainpage");
  }

  return (
    
      <View  style={styles.logoContainer}>
      <FontAwesome style={styles.userlogo} name="user-circle" size={150} />

<TextInputContainer>Email/Phone</TextInputContainer>

<TextInputContainer>Password</TextInputContainer>

<Pressable onPress={ForgotPasswordHandler} style={styles.ForgotPasswordContainer}>
  <Text style={styles.forgotText}>FORGOT PASSWORD?</Text>
</Pressable>
<LoginSignupButton onPress={MainPageHandler}>LOGIN</LoginSignupButton>
<View style={styles.SignupContainer}>
  <Text style={styles.NotMemberText}>Not a Member?</Text>
  <Pressable onPress={SignUpPageHandler}>
    <Text style={styles.SignupText}>Sign Up?</Text>
  </Pressable>
</View>
      </View>
      
   
  );
}

export default LoginPage;

const styles = StyleSheet.create({
 
  logoContainer: {
    flex:1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderWidth:1,
    height:100,
    elevation:4
  },
  userlogo: {
    marginVertical: 100,
  },

  passwordConatainer: {
    width: "80%",
    marginVertical: 20,
  },
  ForgotPasswordContainer: {
    marginLeft: 180,
    marginTop: 8,
  },
  forgotText: {
    fontSize: 12,
    color: "#2653e9",
  },
  SignupContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  NotMemberText: {
    fontSize: 14,
    paddingHorizontal: 5,
    color: "#726565",
  },
  SignupText: {
    color: "#2653e9",
    
  },
});
