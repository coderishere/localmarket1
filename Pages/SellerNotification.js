import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Alert,
  TextInput,
} from "react-native";
import { useLayoutEffect, useState } from "react";
import HomePageButton from "../assets/HomePageButon/HomePageButton";
import FilterIcon from "../assets/Icons/Filter";
import { FontAwesome5 } from '@expo/vector-icons';

function SellerNotification({ navigation }) {
  const [CheckMark , SetCheckMark] = useState(0);
  function HomePageHandler() {
    navigation.navigate("SellerMainPage");
    
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
  }, [navigation, HomePageHandler]);

  const datas = [
    {
      id: 1,
      image: require("../assets/Images/iPhone15Pro.jpg"),
      ProductName: "Product Name: Apple Iphone 15",
      Onlinecost: "Price(Online): Rs.150000 ",
      SellerCost: "Price(Offline): Rs.140000",
      stock: "Stock Available: 4",
      Offer: "Other Description:",
      Returnable: "Product is Returnable",
      Repalceable: "Product is Replaceable",
    },
    {
      id: 2,
      image: require("../assets/Images/trimming.jpg"),
      ProductName: "Product Name: Philips Trimmer",
      Onlinecost: "Price(Online): Rs.1500 ",
      SellerCost: "Price(Offline): Rs.1400",
      stock: "Stock Available: 4",
      Offer: "Other Description:",
      Returnable: "Product is Returnable",
      Repalceable: "Product is Replaceable",
    },
    {
      id: 3,
      image: require("../assets/Images/iPhone15Pro.jpg"),
      ProductName: "Product Name: Apple Iphone 15",
      Onlinecost: "Price(Online): Rs.150000 ",
      SellerCost: "Price(Offline): Rs.140000",
      stock: "Stock Available: 4",
      Offer: "Other Description:",
      Returnable: "Product is Returnable",
      Repalceable: "Product is Replaceable",
    },
    {
      id: 4,
      image: require("../assets/Images/iPhone15Pro.jpg"),
      ProductName: "Product Name: Apple Iphone 15",
      Onlinecost: "Price(Online): Rs.150000 ",
      Offer: "Other Description:",
      Returnable: "Product is Returnable",
      Repalceable: "Product is Replaceable",
    },
  ];
   function ReturnSelectHandler(){
    SetCheckMark(1)
    
    
   }
   function RepalceableSelectHandler(){
    SetCheckMark(2)
    
   }
   function NoneSelectHandler(){
    SetCheckMark(3)
   }
   function NotifyUserHandler(){
   console.log('Notify User')
   }
  

  function NotificationHandler({ item }) {
    return (
      <View style={styles.ItemContainer}>
        <Image
          style={{ height: 200, marginTop: 40, marginBottom: 20 }}
          source={item.image}
          resizeMode="contain"
        ></Image>
        <Text style={{ fontWeight: "900" }}>{item.ProductName}</Text>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontWeight: "500" }}>{item.Onlinecost}</Text>
        </View>
        <View style={styles.SellerInputContainer}>
          <TextInput 
          style={{paddingHorizontal:10,paddingTop:5}}
          inputMode="numeric"
          cursorColor={"black"}
          placeholder="Enter Your Price">
         </TextInput>
        
        </View>
        <View style={styles.SellerInputContainer}>
        <TextInput 
         style={{paddingHorizontal:10,paddingTop:5}}
         inputMode="numeric"
         cursorColor={"black"}
        placeholder="Stock Available">
       </TextInput>
        </View>
        
        
        <View style={styles.DescriptionBox}>
          <TextInput style={{paddingHorizontal:10,paddingTop:5}}
          cursorColor={"black"}
          placeholder="Other Description (Any Warranty/additional Offer)">
          
          </TextInput>
        </View>

        <Text
          style={{
            fontWeight: "500",
            marginHorizontal: 10,
            color: "#013d21",
            marginTop: 10,
            marginRight:280
          }}
        >
        Product is:
        </Text>
        <View style={{flexDirection:'row'}}>
        <Pressable style={styles.ReturnButton} onPress={ReturnSelectHandler} >
        {CheckMark===1 ?<Text style={{paddingLeft:5,paddingTop:13}}><FontAwesome5 name="check" size={12} color="black" /></Text> : <Text></Text>} 
        <Text  style={{
              color: "#000000",
              paddingLeft: 5,
              paddingTop: 8,
              fontWeight: "600",
            }}>Returnable</Text>
       </Pressable>
       <Pressable style={styles.ReturnButton} onPress={RepalceableSelectHandler}>
       {CheckMark===2 ?<Text style={{paddingLeft:5,paddingTop:13}}><FontAwesome5 name="check" size={12} color="black" /></Text> : <Text></Text>} 
       <Text  style={{
              color: "#000000",
              paddingLeft: 5,
              paddingTop: 8,
              fontWeight: "600",
            }}>Replaceable</Text>
       </Pressable>
       <Pressable style={styles.ReturnButton} onPress={NoneSelectHandler}>
      {CheckMark===3 ?<Text style={{paddingLeft:5,paddingTop:13}}><FontAwesome5 name="check" size={12} color="black" /></Text> : <Text></Text>} 
       <Text  style={{
              color: "#000000",
              paddingLeft: 18,
              paddingTop: 8,
              fontWeight: "600",
            }}>None</Text>
       </Pressable>
        </View>
      <View style={{flexDirection:'row'}}>
      <Pressable style={styles.NotifyUserContainer} onPress={NotifyUserHandler}>
          <Text
            style={{
              color: "#000000",
              paddingLeft: 30,
              paddingTop: 8,
              fontWeight: "600",
            }}
          >
           Notify User
          </Text>
        </Pressable>
        <Pressable style={styles.RepondLaterContainer} onPress={RespondLaterHandler}>
          <Text
            style={{
              color: "#000000",
              paddingLeft: 26,
              paddingTop: 8,
              fontWeight: "600",
            }}
          >
            Respond Later
          </Text>
        </Pressable>
      </View>
       
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#5A5A5A" }}>
      <FlatList
        data={datas}
        renderItem={NotificationHandler}
        keyExtractor={(item) => item.id.toString()}
      ></FlatList>
    </View>
  );
}
export default SellerNotification;

const styles = StyleSheet.create({
  headerLeftContainer: {
    flexDirection: "row",
  },
  HeaderLeftText: {
    paddingTop: 6,
    fontWeight: "bold",
    paddingLeft: 4,
    color: "#000000",
  },
  ItemContainer: {
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    margin: 10,
    height: 650,
    backgroundColor: "#9ba18d",
    elevation: 4,
  },
  SellerInputContainer: {
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    width: "80%",
    marginTop: 10,
  },

  DetailText: {
    fontWeight: "500",
  },
  DescriptionBox: {
    borderRadius: 20,
    borderWidth: 1,
    height: 60,
    backgroundColor: "#9ba18d",
    width: "95%",
    marginTop: 15,
  },
  NotifyUserContainer: {
    marginTop: 30,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: "#68744d",
    height: 40,
    width: "40%",
    marginHorizontal:5
  },
  RepondLaterContainer:{
    marginTop: 30,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: "#69af69",
    height: 40,
    width: "40%",
    marginHorizontal:5
  },
  ReturnButton:{
   marginHorizontal:3,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: '#a0a19c',
    height: 40,
    width: "30%",
    marginTop:5,
    flexDirection:'row'
     
  },

});
