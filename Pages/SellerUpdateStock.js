import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { useLayoutEffect , useState } from "react";
import HomePageButton from "../assets/HomePageButon/HomePageButton";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';

function SellerUpdateStock({ navigation }) {

    const [CheckMark , SetCheckMark] = useState(0);

  function HomePageHandler() {
    navigation.navigate("Mainpage");
  }

  function UpdateItemHandler() {
    console.log("remove item");
  }

  function IncreaseStockHandler() {

  }
  function DecreaseStockHandler() {
    
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
      name: "Product Name: Apple Iphone 15 Pro",
      image: require("../assets/Images/iPhone15Pro.jpg"),
      Price: "Price(Offline):",
      Offer:"Other Description"
    },
    {
      id: 2,
      name: "Product Name: Apple Iphone 15 Pro",
      image: require("../assets/Images/iPhone15Pro.jpg"),
      Price: "Price(Offline):",
      Offer:"Other Description"
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
  function kartItemHandler({ item }) {
    return (
      <View style={styles.ItemContainer}>
        <Image
          style={{ height: 120, marginTop: 20 }}
          source={item.image}
          resizeMode="contain"
        ></Image>
        <Text style={{ marginTop: 10, fontWeight: "bold", fontSize: 16 }}>
          {item.name}
        </Text>
        <View style={{flexDirection:'row'}}>
        <Text style={{ marginTop: 10, fontWeight: "600" }}>{item.Price}</Text>
        <TextInput style={styles.PriceInput} inputMode="numeric" cursorColor={"black"}></TextInput>
        </View>
       

        <View style={{ flexDirection: "row" }}>
          <Pressable onPress={IncreaseStockHandler}>
            <AntDesign
              name="pluscircle"
              size={24}
              color="black"
              style={styles.AddMinusText}
            />
          </Pressable>
          <TextInput
            style={styles.QuantityInput}
            defaultValue="1"
            cursorColor={"black"}
            inputMode="numeric"
          ></TextInput>
          <Pressable onPress={DecreaseStockHandler}>
            <AntDesign
              name="minuscircle"
              size={24}
              color="black"
              style={styles.AddMinusText}
            />
          </Pressable>
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
        
        <View style={styles.UpdateStockContainer}>
          <Pressable style={styles.RemovePressable} onPress={UpdateItemHandler}>
            <Text
              style={{
                color: "#000000",
                paddingLeft: 30,
                paddingTop: 8,
                fontWeight: "600",
              }}
            >
              Update Stock
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.MainContainer}>
      <FlatList
        data={datas}
        renderItem={kartItemHandler}
        keyExtractor={(item) => item.id.toString()}
      ></FlatList>
    </View>
  );
}

export default SellerUpdateStock;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: "#5A5A5A",
  },
  headerLeftContainer: {
    flexDirection: "row",
  },
  HeaderLeftText: {
    paddingTop: 6,
    fontWeight: "bold",
    paddingLeft: 4,
  },
  ItemContainer: {
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    height: 500,
    backgroundColor: "#9ba18d",
    margin: 10,
  },
  PriceInput:{
      borderBottomWidth:2,
      borderBottomColor:'#000000',
      height:40,
      fontWeight:'500',
      width:'50%',
      paddingLeft:5
  },
  QuantityInput: {
    borderBottomWidth: 1,
    height: 20,
    marginTop: 20,
    width: 70,
    paddingLeft: 30,
    fontSize: 20,
  },
  AddMinusText: {
    marginTop: 18,
    marginHorizontal: 4,
  },

  UpdateStockContainer: {
    flexDirection: "row",
    marginTop: 30,
  },
  RemovePressable: {
    marginHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    height: 40,
    backgroundColor: "#68744d",
    width: "40%",
  },
  BuyPressable: {
    borderRadius: 20,
    borderWidth: 1,
    height: 40,
    backgroundColor: "#68744d",
    width: "40%",
  },
  DescriptionBox: {
    borderRadius: 20,
    borderWidth: 1,
    height: 60,
    backgroundColor: "#9ba18d",
    width: "95%",
    marginTop: 15,
  },
  ReturnButton:{
    marginHorizontal:3,
     borderRadius: 20,
     borderWidth: 1,
     backgroundColor: '#a0a19c',
     height: 40,
     width: "30%",
     marginTop:10,
     flexDirection:'row'
      
   },
});
