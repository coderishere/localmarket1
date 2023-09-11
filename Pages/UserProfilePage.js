import {View, Text , StyleSheet, Image, ImageBackground, Button, Pressable, Alert} from 'react-native'
import { useLayoutEffect } from 'react';
import HomePageButton from '../assets/HomePageButon/HomePageButton';
import { FontAwesome } from '@expo/vector-icons';
import UserProfileText from '../assets/TextInput/UserProfileText';
import { MaterialIcons } from '@expo/vector-icons';



function UserProfilePage({navigation}){
 function HomePageHandler( ){
    
        navigation.navigate('Mainpage')
     
 }
 function LoggingoutHandler(){

  navigation.navigate('loginPage')
}
 function LogoutHandler(){
  return(
    Alert.alert('Logging Out!!!', 'Are You Sure?',[{style:'cancel'},{text:'okay', onPress:LoggingoutHandler},{text:'cancel'}])
  )
 }
 useLayoutEffect(() => {
    navigation.setOptions({
      
      headerLeft: ()=>{
        return(
          <View style={styles.headerLeftContainer}>
            <HomePageButton onPress={HomePageHandler }></HomePageButton>
            <Text style={styles.HeaderLeftText}>Local Market</Text>
          </View>
            
        )
    }
    });
  }, [navigation, HomePageHandler]);
return (
    
      <View style={styles.MainContainer}>
        
       
       <ImageBackground style={styles.BackgroundImage} source={require('../assets/Images/backgroundblack.png')}>
       <View style = {styles.UserIcon}>
       <FontAwesome name="user-circle-o" size={150} color="black" />
              </View>
        
        </ImageBackground>
        <Pressable style={styles.EditIconContainer}>
        <FontAwesome name="edit" size={40} color="black" />       
        </Pressable>
        
     <UserProfileText>Name</UserProfileText>
     <UserProfileText>Email</UserProfileText>
     <UserProfileText>Phone</UserProfileText>
     <UserProfileText>Address</UserProfileText>
     <UserProfileText>My orders</UserProfileText>
     
     <View style={styles.LogoutContainer}>
    <Pressable onPress={LogoutHandler}>
    <MaterialIcons style={styles.LogoutText} name="logout" size={24} color="black" />
    </Pressable>
     </View>
      </View>
       
   
)
}
export default UserProfilePage;

const styles = StyleSheet.create({
   MainContainer:{
     flex:1 
   },
   UserIcon:{
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    marginTop:70
   },
   BackgroundImage:{
    height:200,
    width:'100%',
    flex:1
   },
  LogoutContainer:{
    marginLeft:120,
    marginBottom:30,
    marginTop:30,
    backgroundColor:'#000000',
    width:'40%',
    borderWidth:1,
    height:45,
    borderRadius: 10,
  

  },
  LogoutText:{
     paddingHorizontal:60,
    paddingTop:10,
    fontWeight:'bold',
    color:'#ffffff'

  },
  headerLeftContainer:{
    flexDirection:'row'
  },
  HeaderLeftText:{
    paddingTop:6,
    fontWeight:'bold',
    paddingLeft:4,
  },
  EditIconContainer:{
    alignItems:'center',
    marginLeft:300,
    marginBottom:40
  },
  
})