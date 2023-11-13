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
import OrderRecieved from "../assets/Icons/OrderRecievedIcon";
import HomePageButton from "../assets/HomePageButon/HomePageButton";

function SellerMainPage({navigation}){

  function SellerProfilePageHandler(){
    navigation.navigate('SellerProfilePage')
  }
  function SellerNotificationHandler(){
    navigation.navigate('SellerNotification')
  }
    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => {
            return (
              <View style={styles.iconsConatiner}>
                <OrderRecieved></OrderRecieved>
                <UserNotification onPress={SellerNotificationHandler}></UserNotification>
                <DrawerIcon onPress={SellerProfilePageHandler}></DrawerIcon>
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
              A PRODUCT QUERY WITH ONLINE DETAILS IS MADE
            </Text>
            <Text style={styles.LinkText}>AVAILABLE TO YOU</Text>
          </View>
          <View style={styles.CateogoryContainer}>
            <Image
              style={styles.categoryImage}
              source={require("../assets/Images/cateogoryfinalImg.png")}
              resizeMode="contain"
            ></Image>
            <View style={styles.cateogoryTextContainer}>
            <Text  style={styles.LinkText}>IF SAME PRODUCT IS IN YOUR STOCK THEN </Text>
            <Text  style={styles.LinkText}>FILL THE DETAILS AND SUBMIT IT TO NOTIFY USER  </Text>
            </View>
     </View>
     <View style={styles.TimerImageContainer}>
              <Image style={styles.TimerImage}source={require('../assets/Images/TImerImage.png')} resizeMode="contain"></Image>
             </View>
             <View style={styles.TimerTextContainer}>
             <Text  style={styles.LinkText}>ONCE A PRODUCT IS SUBMITTED IT WILL BE LISTED</Text>
            <Text  style={styles.LinkText}>AND ANY USER CAN SEE YOUR PRODUCT DETAILS  </Text>
            <Text  style={styles.LinkText}>AND COMPARE IT WITH ONLINE VALUE</Text>
             </View>
             <View style={styles.quickImageContainer}>
              <Image style={styles.quickImage}source={require('../assets/Images/quickImage.png')} resizeMode="contain" ></Image>
             </View>
             <View style={styles.TimerTextContainer}>
             <Text  style={styles.LinkText}>KEEP UPDATING THE STOCK </Text>
            <Text  style={styles.LinkText}>TO INFORM USERS ABOUT CURRENT STOCK </Text>
            <Text  style={styles.LinkText}>FOR SMOOTH TRANSACTIONS</Text>
             </View>
            
        </ScrollView>
      );
    
}

export default SellerMainPage;

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
        marginTop: 90,
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
    