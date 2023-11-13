import { Pressable, StyleSheet, View, Text} from "react-native";
import TextInputContainer from "../assets/TextInput/TextInputContainer";
import { Entypo } from '@expo/vector-icons';
import LoginSignupButton from "../assets/ButtonContainer/LoginSignupButton";

function SellerSignupOne({navigation}){

    function SendOtpHandler(){
        navigation.navigate('SellerSignupTwo')
    }
       function LoginPageHandler(){
        navigation.navigate('SellerLogin')
       }
    return(
     <View style={styles.logoContainer}>
         <Entypo  style={styles.userlogo} name="shop" size={130} color="black" />
        <TextInputContainer>Mobile Number</TextInputContainer>

        <LoginSignupButton onPress={SendOtpHandler}>Send OTP</LoginSignupButton>
        <View style={styles.SignupContainer}>
          <Text style={styles.AlreadyaMemberText}>Already a Member?</Text> 
          <Pressable onPress={LoginPageHandler}>
            <Text style={styles.LoginText}>Login?</Text>
          </Pressable>
        </View>
     </View>
    )
}
export default SellerSignupOne;
 
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
      SignupContainer:{
        flexDirection:'row',
        marginTop: 10,
      },
      AlreadyaMemberText:{
         fontSize: 14,
         paddingHorizontal:5,
         color:'#726565'
      },
      LoginText:{
        color: '#2653e9'
      }
})