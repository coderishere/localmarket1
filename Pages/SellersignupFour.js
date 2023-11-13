import { StyleSheet, View, Text,Image, Pressable } from "react-native";
import EditTextInput from "../assets/TextInput/EditTextInput";
import LoginSignupButton from "../assets/ButtonContainer/LoginSignupButton";

function SellersignupFour({navigation}){

    function GstVerifyHandler(){
     navigation.navigate('SellerSignupFive')
    }

    return(
     <View style={styles.Maincontainer}>
        <Image style={{marginTop:90,marginBottom:30}} source={require('../assets/Images/SellerSignupImage.png')}></Image>
       <EditTextInput>Email Id*</EditTextInput>
       <EditTextInput>Name*</EditTextInput>
       <EditTextInput>Business Display Name*</EditTextInput>
       <EditTextInput>GST Number*</EditTextInput>
       <EditTextInput>Create Password*</EditTextInput>
       <Pressable style={styles.VerifyGst} onPress={GstVerifyHandler}>
        <Text style={{color:'#ffffff',paddingTop:8,fontWeight:'500'}}>Verify & Continue</Text>
       </Pressable>
       
       
     </View>
    )
}
export default SellersignupFour;
 
const styles = StyleSheet.create({
Maincontainer:{
    flex:1,
    marginTop:20,
    alignItems:'center',
    backgroundColor:'#ffffff',
},
VerifyGst:{
    borderRadius:10,
    borderWidth:1,
    backgroundColor:'#000000',
    height:40,
    width:'40%',
    marginTop:40,
    alignItems:'center'
}
})