import { ImageBackground, View , Text, Button, Pressable } from "react-native";
import { StyleSheet, Image } from "react-native";
import LoginPage from "./Loginpage";
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from "expo-status-bar";

function StartingPage({navigation}) {

   function NewPageHandler(){
        navigation.navigate('loginPage')
   }
  return (
    <View style={styles.Backgroundcontainer}>
    <StatusBar backgroundColor="grey" />
        <Image source={require()}></Image>
         <View style = {styles.PressableContainer} >
         <Pressable style={styles.UserPRess} android_ripple={{color:'grey'}}  >
          <View style = {styles.PressableTextContainer}>
          <Text style={styles.PressableText}>USER</Text>
          </View>
          
          </Pressable>
         </View>
       
        </View>
  );
}
export default StartingPage;

const styles = StyleSheet.create({
  Backgroundcontainer: {
   flex:1,
   backgroundColor: '#353030'
  },
 StartingPageLogo:{
  
 
  height: '80%',
  marginTop:150,
  overflow:'hidden'
 },
 PressableContainer:{
marginHorizontal: 10,
marginTop: 70,

 },
 UserPRess:{
borderRadius: 28,
borderColor: 'white', 
paddingHorizontal:16,
paddingVertical:8,

},
PressableTextContainer:{
backgroundColor: '#ffffffff',
borderRadius: 28,
height:80,
width: '100%'
},
PressableText: {
  color:'#000000',
  fontWeight:'bold',
  fontSize:27,
  paddingHorizontal: 60,
  paddingVertical: 20

}
});
