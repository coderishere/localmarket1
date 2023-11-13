import { StyleSheet, View, Text, TextInput, Pressable, ScrollView} from "react-native";
import TextInputContainer from "../assets/TextInput/TextInputContainer";
import EditTextInput from "../assets/TextInput/EditTextInput";
import { useLayoutEffect } from "react";
import HomePageButton from "../assets/HomePageButon/HomePageButton";


function UserAddNewAddress({navigation}){
    function DetailSaveHandler(){
        navigation.navigate('Mainpage')
      }
      function HomePageHandler( ){
    
        navigation.navigate('Mainpage')
     
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
      }, [navigation ]);
        return(
         <View style={styles.MainContainer}>
          <View style={styles.TextContainer}>
            <Text style={styles.EditText}>Add a new Address</Text>
            </View>
            <ScrollView style={styles.InputContainer}>
            <EditTextInput>Name</EditTextInput>
            <EditTextInput>Phone No.</EditTextInput>
            <EditTextInput>Pincode</EditTextInput>
            <EditTextInput>District</EditTextInput>
            <EditTextInput>State</EditTextInput>
            <EditTextInput>Address(area & street)</EditTextInput>
            <EditTextInput>LandMark</EditTextInput>
            <Pressable style={styles.PressableContainer} onPress={DetailSaveHandler}>
              <Text style={styles.PressableText}>SAVE</Text>
            </Pressable>
            </ScrollView>
          
         </View>
        )
}

export default UserAddNewAddress;

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
      marginTop:20,
      alignItems:'center',
      borderRadius:20,
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