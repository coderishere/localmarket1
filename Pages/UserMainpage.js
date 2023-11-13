import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useLayoutEffect } from "react";
import DrawerIcon from "../assets/Icons/DrawerIcon";
import UserNotification from "../assets/Icons/UserNotification";
import UserCart from "../assets/Icons/UserCartIcon";
import HomePageButton from "../assets/HomePageButon/HomePageButton";
import QuickResult from "../assets/PressableContainer/QuickResult";

function UserMainpage({ navigation }) {

  
  function NotificationPageHandler() {
    navigation.navigate("UserNotification");
  }

  function ProfileButtonHandler() {
    navigation.navigate("UserProfile");
  }

  function UserKartHandler(){
    navigation.navigate('UserKart')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={styles.iconsConatiner}>
            <UserCart onPress={UserKartHandler}></UserCart>
            <UserNotification
              onPress={NotificationPageHandler}
            ></UserNotification>
            <DrawerIcon onPress={ProfileButtonHandler}></DrawerIcon>
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
  }, [navigation]);
  return (
    <ScrollView style={styles.Container}>
      <ImageBackground
        style={styles.ImageBackgroundMain}
        source={require("../assets/Images/backgroundImageMain.png")}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/Images/logo.png")}
          ></Image>
          <Text style={styles.TagLine}>THINK LOCAL GET FAST</Text>
        </View>
        <View style={styles.TextinputContainer}>
          <TextInput
            style={styles.SearchInput}
            placeholder="Search"
          ></TextInput>
        </View>
        <QuickResult navigation={navigation}></QuickResult>
      </ImageBackground>
      <ScrollView
        style={styles.ImageSliderFlatlist}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
      >
        <Image
          style={styles.ImageSlider}
          source={require("../assets/Images/mcdAds.png")}
          resizeMode="contain"
        ></Image>
        <Image
          style={styles.ImageSlider}
          source={require("../assets/Images/dominosAds.png")}
          resizeMode="contain"
        ></Image>
      </ScrollView>

      <View style={styles.WorkTextContainer}>
        <Text style={styles.WorkText}>How Local Market Works!!!</Text>
      </View>
      <View style={styles.LinkImageContainer}>
        <Image
          style={styles.LinkImage}
          source={require("../assets/Images/newLinkImage.webp")}
          resizeMode="contain"
        ></Image>
      </View>
      <View style={styles.LinkTextContainer}>
        <Text style={styles.LinkText}>
          COPY THE LINK FROM AN E-COMMERCE WEBSITE
        </Text>
        <Text style={styles.LinkText}>PASTE IT IN THE SEARCH BAR</Text>
      </View>
      <View style={styles.CateogoryContainer}>
        <Image
          style={styles.categoryImage}
          source={require("../assets/Images/cateogoryfinalImg.png")}
          resizeMode="contain"
        ></Image>
        <View style={styles.cateogoryTextContainer}>
        <Text  style={styles.LinkText}>CHOOSE THE CATEGORY ACCORDING TO THE LINK </Text>
        <Text  style={styles.LinkText}>AND THEN NOTIFY THE SELLERS  </Text>
        </View>
 </View>
 <View style={styles.TimerImageContainer}>
          <Image style={styles.TimerImage}source={require('../assets/Images/TImerImage.png')} resizeMode="contain"></Image>
         </View>
         <View style={styles.TimerTextContainer}>
         <Text  style={styles.LinkText}>SEAT BACK AND RELAX!!! WHILE WE NOTIFY YOU</Text>
        <Text  style={styles.LinkText}>THE PRODUCT DETAILS WITHIN  </Text>
        <Text  style={styles.LinkText}>FEW MINUTES</Text>
         </View>
         <View style={styles.quickImageContainer}>
          <Image style={styles.quickImage}source={require('../assets/Images/quickImage.png')} resizeMode="contain" ></Image>
         </View>
         <View style={styles.TimerTextContainer}>
         <Text  style={styles.LinkText}>GO FOR QUICK RESULT TO CHECK WHETHER  </Text>
        <Text  style={styles.LinkText}>THE PRODUCT ALREADY LISTED OR NOT </Text>
        <Text  style={styles.LinkText}>AND CHECK THE PRODUCT DETAILS QUICKLY!!!</Text>
         </View>
        
    </ScrollView>
  );
}
export default UserMainpage;

const deviceWidth = Dimensions.get("window").width;
const deviceheight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginBottom:10
  },
  ImageBackgroundMain: {
    height: 430,
    width: "100%",
    opacity: 0.78,
    flex: 1,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  logo: {
    height: 180,
    width: "35%",
    opacity: 0.89,
  },
  TagLine: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "400",
  },
  TextinputContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  SearchInput: {
    height: 38,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    width: "90%",
    paddingLeft: 15,
    borderWidth: 0.5,
    
  },
  ImageSliderFlatlist: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  ImageSlider: {
    flex: 1,
    height: 300,
    width: Dimensions.get("window").width,
  },
  WorkTextContainer: {
    borderRadius: 16,
    height: 40,
    width: "90%",
    borderWidth: 1,
    elevation: 5,
    backgroundColor: "#e0a80bea",
    flex: 1,
    alignItems: "center",
    marginLeft: 20,
    marginTop: 30,
  },
  WorkText: {
    fontSize: 20,
    paddingTop: 6,
    fontWeight: "500",
  },
  LinkImageContainer: {
    flex: 1,
    marginTop: 40,
    alignItems:'center'
  },
  LinkImage: {
    width: "100%",
    height: 100,
  },
  LinkTextContainer: {
    borderRadius: 16,
    borderWidth: 1,
    height: 60,
    backgroundColor: "#ffffff",
    marginTop: 20,
    alignItems: "center",
    paddingTop: 10,
    marginHorizontal: 10,
  },
  LinkText: {
    fontWeight: "600",
  },
  CateogoryContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  categoryImage: {
    width: Dimensions.get("window").width,
    height: 100,
  },
  cateogoryTextContainer:{
   borderRadius:16,
   borderWidth:1,
   height:60,
   backgroundColor:'#ffffff',
   width:'95%',
   alignItems:'center',
   paddingTop:10,
   marginTop:20
  },
  TimerImageContainer:{
   marginTop:40,
   alignItems:'center'
  },
  TimerImage:{
height:100,
width:Dimensions.get('window').width
  },
  TimerTextContainer:{
    borderRadius:16,
    borderWidth:1,
    height:80,
    backgroundColor:'#ffffff',
    width:'95%',
    alignItems:'center',
    paddingTop:10,
    marginTop:20,
    marginHorizontal:10
  },
  quickImageContainer:{
    marginTop:40,
    alignItems:'center'
  },
  quickImage:{
   height:100,
   width:Dimensions.get('window').width
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
  BottomContainer:{
    height:100,
    backgroundColor:'#504444',
    borderColor:'#e9d3d3',
    borderWidth:1,
    marginTop:10
  }
});
