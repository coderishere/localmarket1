import { StyleSheet, View ,Text, FlatList, Image, TextInput, Pressable} from "react-native";
import { useLayoutEffect } from "react";
import HomePageButton from "../assets/HomePageButon/HomePageButton";
import { AntDesign } from '@expo/vector-icons';


function UserKart({navigation}){

  function HomePageHandler(){
    navigation.navigate('Mainpage')
}

function RemoveitemHandler(){
console.log('remove item')
}

 function placeOrderHandler(){
  console.log('placeOrder')
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
      }, [navigation,HomePageHandler ]);

      const datas = [
        {
        id:1,
        name: 'Product Name: Apple Iphone 15 Pro',
        image: require('../assets/Images/iPhone15Pro.jpg'),
        Price: 'Price(Offline): Rs.140000',
        Stock: 'Stock Available: 4'
      },
      {
        id:2,
        name: 'Product Name: Apple Iphone 15 Pro',
        image: require('../assets/Images/iPhone15Pro.jpg'),
        Price: 'Price(Offline): Rs.140000',
        Stock: 'Stock Available: 4'
      },
    ]
   
      function kartItemHandler({item}){
        return(
            <View style={styles.ItemContainer}>
             
              <Image style={{height:120, marginTop:20}} source={item.image} resizeMode="contain"></Image>
              <Text style={{marginTop:10, fontWeight:'bold',fontSize:16}} >{item.name}</Text>
              <Text style={{marginTop:10, fontWeight:'600'}}>{item.Price}</Text>
              <Text style={{marginTop:10}}>{item.Stock}</Text>
              <View style={{flexDirection:'row'}}>
                <Pressable>
                <AntDesign name="pluscircle" size={24} color="black"  style={styles.AddMinusText}/>
                </Pressable>
                 <TextInput style={styles.QuantityInput} defaultValue="1"></TextInput>
                 <Pressable>
                 <AntDesign name="minuscircle" size={24} color="black" style={styles.AddMinusText} />
                 </Pressable>
              
              </View>
              <View style={styles.BuyRemovePressableContainer}>
                 <Pressable style={styles.RemovePressable} onPress={RemoveitemHandler}>
                  <Text style={{color:'#000000', paddingLeft:45, paddingTop:8, fontWeight:'600'}}>Remove</Text>
                  </Pressable>
                
                
             
              </View>
              
            </View>
            
        )
      }
    return(
   <View style={styles.MainContainer}>
    <FlatList data={datas} renderItem={kartItemHandler} keyExtractor={(item)=>item.id.toString()}>

    </FlatList>
    <View style={styles.SubtotalContainer}>
       <Text style={{paddingLeft:15,paddingTop:20,fontWeight:'500'}}>TOTAL Rs.2,80,000</Text>
       <Pressable style={styles.PlaceOrderContainer} onPress={placeOrderHandler}>
        <Text style={{paddingLeft:40,paddingTop:8,fontWeight:'500'}}>Place Order</Text>
       </Pressable>
    </View>
   </View>
    )
} 

export default UserKart;

const styles = StyleSheet.create({
MainContainer:{
    flex:1,
    backgroundColor:'#5A5A5A'
},
headerLeftContainer: {
    flexDirection: "row",
  },
  HeaderLeftText: {
    paddingTop: 6,
    fontWeight: "bold",
    paddingLeft: 4,
  },
  ItemContainer:{
    alignItems:'center',
    borderRadius:20,
    borderWidth:1,
    height:400,
    backgroundColor:'#9ba18d',
    margin:10
  },
  QuantityInput:{
    borderBottomWidth:1,
    height:20,
    marginTop:20,
    width:70,
    paddingLeft:30,
    fontSize:20,

  },
  AddMinusText:{
    marginTop:18,
     marginHorizontal:4
  },

  BuyRemovePressableContainer:{
    flexDirection:'row',
    marginTop:40, 
  },
  RemovePressable:{
    marginHorizontal:10,
    borderRadius:20,
    borderWidth:1,
    height:40,
    backgroundColor:'#68744d',
    width:'40%'
  },
  BuyPressable:{
    borderRadius:20,
    borderWidth:1,
    height:40,
    backgroundColor:'#68744d',
    width:'40%'
  },
  SubtotalContainer:{
    borderRadius:10,
    borderWidth:1,
    height:70,
    backgroundColor:'#6f7c50',
    margin:10,
    flexDirection:'row'
  },
  PlaceOrderContainer:{
    borderRadius:15,
    borderWidth:1,
    height:40,
    width:'45%',
    marginLeft:40,
    marginTop:10,
    backgroundColor:'#8d9774'
  }
})