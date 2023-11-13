import { ImageBackground, View , Text, Button, Pressable } from "react-native";
import { StyleSheet, Image } from "react-native";
import LoginPage from "./UserLoginpage";
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from "expo-status-bar";
import PressableContainer from "../assets/PressableContainer/pressableContainer";
import {Ionicons} from '@expo/vector-icons'

function StartingPage({navigation}) {

  function LoginPageHandler(){
       navigation.navigate('loginPage')
  }

  function SellerLoginHandler(){
    navigation.navigate('SellerLogin')
  }
  return (
    <View style={styles.Backgroundcontainer}>
    <StatusBar backgroundColor="#ccc" />
        <View style={styles.StartingPageLogoContainer}>
          <Image source={require('../assets/Images/logo.png')} style={styles.StartingPageLogo}></Image>

          <View style={styles.TaglineContainer}>
          <Text style={styles.Tagline}>Go Local From Your Home Comfort</Text>
          </View>
          
        </View>
        
         
          
          <PressableContainer onPress={LoginPageHandler}><Ionicons name="caret-forward" size={20}/>USER</PressableContainer>
          <PressableContainer onPress={SellerLoginHandler}><Ionicons name="caret-forward" size={20}/>SELLER</PressableContainer>
          <PressableContainer><Ionicons name="caret-forward" size={20}/>DELIVERY PARTNER</PressableContainer>
          
         </View>
       
        
  );
}
export default StartingPage;

const styles = StyleSheet.create({
  Backgroundcontainer: {
   flex:1,
   backgroundColor: '#312a2ae3'
  },
 StartingPageLogoContainer:{
  justifyContent:'center',
  alignItems:'center',
  paddingVertical: 60,
 },
 StartingPageLogo:{
   opacity:0.5
 },


TaglineContainer:{
  paddingTop: 10
},
Tagline:{
  color: "#ffffff",
  fontWeight: 'bold', 
  fontStyle:'italic',
  fontSize: 20,
}

});
