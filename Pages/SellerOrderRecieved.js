import { FlatList, StyleSheet, Text, View ,Image, Pressable, Alert} from "react-native";
import { useLayoutEffect } from "react";
import HomePageButton from "../assets/HomePageButon/HomePageButton";
import FilterIcon from "../assets/Icons/Filter";


function SellerOrderRecieved({navigation}){
   
    
      function HomePageHandler(){
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
            }, [navigation,HomePageHandler]);  
    
            function AcceptOrderHandler(){
              return(
                Alert.alert('Delivery Guy Will Collect Order Soon!!!')
              )
            }
    
            const datas = [{
              id: 1,
            image: require('../assets/Images/iPhone15Pro.jpg'),
            ProductName: 'Product Name: Apple Iphone 15',
           Onlinecost: 'Price(Online): Rs.150000 ',
            SellerCost: 'Price(Offline): Rs.140000',
            stock: 'Quantity Purchased: 4',
            Offer: 'Other Description:',
            Returnable: 'Product is Returnable',
            Repalceable: 'Product is Replaceable'
            },
            {
            id: 2,
            image: require('../assets/Images/trimming.jpg'),
            ProductName: 'Product Name: Philips Trimmer',
           Onlinecost: 'Price(Online): Rs.1500 ',
            SellerCost: 'Price(Offline): Rs.1400',
            stock: 'Quantity Purchased: 4',
            Offer: 'Other Description:',
            Returnable: 'Product is Returnable',
            Repalceable: 'Product is Replaceable'
            },
            {
              id: 3,
              image: require('../assets/Images/iPhone15Pro.jpg'),
              ProductName: 'Product Name: Apple Iphone 15',
             Onlinecost: 'Price(Online): Rs.150000 ',
              SellerCost: 'Price(Offline): Rs.140000',
              stock: 'Quantity Purchased: 4',
              Offer: 'Other Description:',
              Returnable: 'Product is Returnable',
              Repalceable: 'Product is Replaceable'
              },
              {
                id: 4,
                image: require('../assets/Images/iPhone15Pro.jpg'),
                ProductName: 'Product Name: Apple Iphone 15',
               Onlinecost: 'Price(Online): Rs.150000 ',
                SellerCost: 'Price(Offline): Rs.140000',
                stock: 'Quantity Purchased: 4',
                Offer: 'Other Description:',
                Returnable: 'Product is Returnable',
                Repalceable: 'Product is Replaceable'
                }
          ] 
    
            function NotificationHandler({item}){
              return(
                <View style={styles.ItemContainer}>
                  <Image style={{height:200, marginTop:40, marginBottom:20}} source={item.image} resizeMode="contain"></Image>
                  <Text style={{fontWeight:'900'}}>{item.ProductName}</Text>
                  <View style={{flexDirection:'row', marginTop:10}}>
                  <Text style={{fontWeight:'500', marginHorizontal:10}}>{item.SellerCost}</Text>
                  </View>
                  <Text style={{marginTop:10,fontWeight:'500'}}>{item.stock}</Text>
                  <View style={styles.DescriptionBox}>
                    <Text style={{paddingLeft:5, paddingTop:14}}>{item.Offer}</Text>
                  </View>
                 
                  <Text style={{fontWeight:'500', marginHorizontal:10 , color:'#013d21',marginTop:10}}>{item.Returnable}</Text>
                  <Text style={{fontWeight:'500', color:'#013d21',marginTop:10}}>{item.Repalceable}</Text>
                 <Pressable style={styles.AddToKartContainer} onPress={AcceptOrderHandler}>
                  <Text style={{color:'#000000', paddingLeft:30, paddingTop:8, fontWeight:'600'}}>Accept Order</Text>
                 </Pressable>
                </View>
              )
            }
    
              return(
           <View style={styles.MainContainer}>
            <FlatList data={datas} renderItem={NotificationHandler} keyExtractor={(item)=> item.id.toString()}>
    
            </FlatList>
           </View>
        )
    }

export default SellerOrderRecieved;

const styles = StyleSheet.create({
    MainContainer:{
      flex:1,
        backgroundColor:'#5A5A5A'
    },
    DropdownContainer:{
      flex:1,
       borderRadius:12,
       height:50,
       borderWidth:1,
       width:'90%',
       backgroundColor:'#ffffff'
    },
    ItemContainer:{
     
            alignItems:'center',
            borderRadius:20,
            borderWidth:1,
            margin:10,
            height:570,
            backgroundColor:'#9ba18d',
            elevation:4
    },
    headerLeftContainer:{
        flexDirection:'row'
    },
    HeaderLeftText: {
        paddingTop: 6,
        fontWeight: "bold",
        paddingLeft: 4,
        color:'#000000'
      },
      DetailText:{
        fontWeight:'500'
      },
      DescriptionBox:{
        borderRadius:20,
        borderWidth:1,
        height:60,
            backgroundColor:'#9ba18d',
            width:'95%',
            marginTop:15,
      },
      AddToKartContainer:{
       marginTop:30,
       borderRadius:20,
       borderWidth:1,
       backgroundColor:'#68744d',
       height:40,
       width:'40%',
      }
    })