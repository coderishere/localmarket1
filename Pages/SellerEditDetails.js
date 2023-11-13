import { StyleSheet, View, Text, TextInput, Pressable} from "react-native";
import TextInputContainer from "../assets/TextInput/TextInputContainer";
import EditTextInput from "../assets/TextInput/EditTextInput";
import { useState } from "react";
import { useLayoutEffect } from "react";
import HomePageButton from "../assets/HomePageButon/HomePageButton";

function SellerEditDetails({navigation}){

  function HomePageHandler(){
    navigation.navigate('SellerMainPage')
}
  useLayoutEffect(() => {
    navigation.setOptions({
      
      headerLeft: () => {
        return (
          <View style={styles.headerLeftContainer}>
            <HomePageButton onPress={HomePageHandler}></HomePageButton>
            <Text style={styles.HeaderLeftText}>Local Market</Text>
          </View>
        );
      },
    });
  }, [navigation,HomePageHandler ]);
  const [ResetValue, setResetValue] = useState(0);
  function DetailSaveHandler(){
    
  }
  
  function PasswordSaveHandler(){

  }
    return(
     <View style={styles.MainContainer}>
      <View style={styles.TextContainer}>
        <Text style={styles.EditText}>UPDATE DETAILS</Text>
        </View>
        <View style={styles.InputContainer}>
        <EditTextInput>Email id</EditTextInput>
        <EditTextInput>Phone No.</EditTextInput>
        <Pressable style={styles.PressableContainer} onPress={DetailSaveHandler}>
          <Text style={styles.PressableText}>SAVE</Text>
        </Pressable>
        <View style={{alignItems:'center',marginTop:20}}>
        <Text >--------------------------------- OR --------------------------------------</Text>
        </View>
         <Pressable style={styles.ResetPasswordContainer}>
        <Text style={{color:'#ffffff',paddingTop:8,fontWeight:'600'}}>RESET PASSWORD</Text>
      </Pressable>
     <EditTextInput>Current Password</EditTextInput>
     <EditTextInput>New Password</EditTextInput>
     <EditTextInput>Confirm New Password</EditTextInput>
     <Pressable style={styles.PressableContainer} onPress={PasswordSaveHandler}>
          <Text style={styles.PressableText}>SAVE</Text>
        </Pressable>

      
        </View>
     
     </View>
    )
}

export default SellerEditDetails;

const styles = StyleSheet.create({
  MainContainer:{
    flex:1,
  },
  headerLeftContainer: {
    flexDirection: "row",
  },
  HeaderLeftText: {
    paddingTop: 6,
    fontWeight: "bold",
    paddingLeft: 4,
  },
  TextContainer:{
  marginLeft:150 ,
  
  },
  EditText:{
    fontWeight:'bold',
    marginBottom:20,
    marginTop:40
  },
  InputContainer:{
    flex:1
  },
  PressableContainer:{
    marginTop:25,
    alignItems:'center',
    borderRadius:10,
    borderWidth:1,
    borderColor:'white',
    backgroundColor:'#000000',
    marginHorizontal:130,
    height:40,
  },
  PressableText:{
    color:'#ffffff',
    alignItems:'center',
    paddingTop:8,
    fontSize:15,
    fontWeight:'bold'
  },
  ResetPasswordContainer:{
    alignItems:'center',
    marginTop:40,
    borderRadius:10,
    borderWidth:1,
    borderColor:'#ffffff',
    backgroundColor:'#6e4d4d',
    height:40,
    marginHorizontal:20,
    marginBottom:20
  }
})