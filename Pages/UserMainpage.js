import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Pressable,
  Button,
  ScrollView,
  TextInput,
} from "react-native";
import { useLayoutEffect } from "react";
import DrawerIcon from "../assets/Icons/DrawerIcon";
import UserNotification from "../assets/Icons/UserNotification";
import UserCart from "../assets/Icons/UserCart";
import { useState } from "react";
import HomePageButton from "../assets/HomePageButon/HomePageButton";

function UserMainpage({ navigation }) {
  function Buttonhandler() {
    navigation.navigate("UserProfile");
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={styles.iconsConatiner}>
            <UserCart></UserCart>
            <UserNotification></UserNotification>
            <DrawerIcon onPress={Buttonhandler}></DrawerIcon>
          </View>
        );
      },
      headerLeft: () => {
        return (
          <View style={styles.headerLeftContainer}>
            <HomePageButton></HomePageButton>
            <Text style={styles.HeaderLeftText}>Local Market</Text>
          </View>
        );
      },
    });
  }, [navigation, Buttonhandler]);
  return (
    <ScrollView style={styles.Container}>
      <ImageBackground
        style={styles.ImageBackgroundMain}
        source={require("../assets/Images/backgroundImageMain.png")}
      >
       <View style={styles.logoContainer}>
       <Image  style={styles.logo} source={require('../assets/Images/logo.png')}></Image>
       <Text style={styles.TagLine}>THINK LOCAL GET FAST</Text>
       </View>
       <View style={styles.TextinputContainer}>
        <TextInput style={styles.SearchInput} placeholder="Search"></TextInput>
       </View>
       <Pressable>
        <Text style={styles.QuickResult}>Ouick Result</Text>
       </Pressable>
      </ImageBackground>
    </ScrollView>
  );
}
export default UserMainpage;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  ImageBackgroundMain: {
    height: 450,
    width: "100%",
    opacity:0.8
  },
  logoContainer:{
    alignItems:'center',
    marginTop:30
  },
  logo:{
   height:180,
    width:'35%',
  opacity:.7
  },
  TagLine:{
    color:'#ffffff',
    fontSize:20,
    fontWeight:'400'
  },
  TextinputContainer:{
   alignItems:'center',
   marginTop:20,
   
  },
  SearchInput:{
   height: 38,
   borderRadius: 20,
   backgroundColor:'#ffffff',
   width:'90%',
   paddingLeft:15,
   borderWidth:0.5
  },
  PressableConatiner:{
   
  },
  QuickResult:{
    height:38,
    width:'40%',
    borderRadius:20,
    color:'#ffffff',
    backgroundColor:'blue'
  },
  iconsConatiner: {
    flexDirection: "row",
  },
  headerLeftContainer: {
    flexDirection: "row",
  },
  HeaderLeftText: {
    paddingTop: 6,
    fontWeight: "bold",
    paddingLeft: 4,
  },
});
