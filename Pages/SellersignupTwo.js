import { StyleSheet, View, Text, TextInput} from "react-native";
import EditTextInput from "../assets/TextInput/EditTextInput";
import LoginSignupButton from "../assets/ButtonContainer/LoginSignupButton";

function SellersignupTwo({navigation}){

    function OtpCheckHandler(){
      navigation.navigate('SellerSignupThree')
    }
    return(
     <View style={styles.Maincontainer}>
        <Text style={{fontWeight:'600',color:'#000000'}}>Verify Your Phone Number</Text>
        <View></View>
        <TextInput
          style={styles.OtpTextInput}
          autoCapitalize="none"
          autoCorrect={false}
          cursorColor={"black"}
          placeholder= '*Enter The OTP'
          inputMode="numeric"
        ></TextInput>
        <LoginSignupButton onPress={OtpCheckHandler}>Submit</LoginSignupButton>
     </View>
    )
}
export default SellersignupTwo;
 
const styles = StyleSheet.create({
    Maincontainer:{
        alignItems:'center',
        flex:1,
        justifyContent:'center',
        marginBottom:300
    },
    OtpTextInput:{
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 28,
        height: 45,
        paddingHorizontal: 15,
        width:350,
        marginTop:20
    }
})