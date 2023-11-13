import { StyleSheet, View,Image, Pressable ,Text} from "react-native";
import EditTextInput from "../assets/TextInput/EditTextInput";
import LoginSignupButton from "../assets/ButtonContainer/LoginSignupButton";

function SellersignupFive({navigation}){
   
    function VerifyPanHandler(){
        console.log('PAN Verified')
    }
     function VerifyBankHandler(){
        console.log('Bank Verified Now Proceed')
        navigation.navigate('SellerMainPage')
     }
    return(
        <View style={styles.MainContainer}>
        <Image style={{marginTop:80,marginBottom:40}} source={require('../assets/Images/Shopdetails.png')}></Image>
        <EditTextInput>Address (Street/Road No.)*</EditTextInput>
        <EditTextInput>LandMark</EditTextInput>
        <EditTextInput>Pincode (Same as GST)*</EditTextInput>
        <EditTextInput>PAN Number*</EditTextInput>
        <Pressable style={styles.VerifyBankPAN} onPress={VerifyPanHandler}>
            <Text style={{color:'#ffffff',fontWeight:'500',paddingTop:8}}>Verify PAN & Save</Text>
        </Pressable>
        <EditTextInput>Bank Account Number*</EditTextInput>
        <EditTextInput>IFSC code*</EditTextInput>
        <Pressable style={styles.VerifyBankPAN} onPress={VerifyBankHandler}>
            <Text style={{color:'#ffffff',fontWeight:'500',paddingTop:8}}>Verify Bank & Proceed</Text>
        </Pressable>
        </View>
    )
}

export default SellersignupFive;

const styles= StyleSheet.create({
    MainContainer:{
        flex:1,
        backgroundColor:'#ffffff',
        alignItems:'center',
        
    },
    VerifyBankPAN:{
        marginTop:30,
        borderRadius:10,
        borderWidth:1,
        backgroundColor:'#000000',
        height:40,
        width:'50%',
        alignItems:'center'
    }
})