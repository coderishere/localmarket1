import { StyleSheet, View, Text, TextInput, Pressable} from "react-native";
import TextInputContainer from "../assets/TextInput/TextInputContainer";
import EditTextInput from "../assets/TextInput/EditTextInput";

function UserDetailEdit({navigation}){

  function DetailSaveHandler(){
    navigation.navigate('Mainpage')
  }
    return(
     <View style={styles.MainContainer}>
      <View style={styles.TextContainer}>
        <Text style={styles.EditText}>UPDATE DETAILS</Text>
        </View>
        <View style={styles.InputContainer}>
        <EditTextInput>Name</EditTextInput>
        <EditTextInput>Email id</EditTextInput>
        <EditTextInput>Phone No.</EditTextInput>
        <EditTextInput>Password</EditTextInput>
        <EditTextInput>confirm Password</EditTextInput>
        <Pressable style={styles.PressableContainer} onPress={DetailSaveHandler}>
          <Text style={styles.PressableText}>SAVE</Text>
        </Pressable>
        </View>
      
     </View>
    )
}

export default UserDetailEdit;

const styles = StyleSheet.create({
  MainContainer:{
    flex:1,
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
  }
})