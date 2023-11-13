import { FlatList, StyleSheet, View , Text, Image} from "react-native";
import { useLayoutEffect } from "react";
import HomePageButton from "../assets/HomePageButon/HomePageButton";

function SellerMyOrders({navigation}){
  function HomePageHandler(){
    navigation.navigate('SellerMainPage')
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


    const Data= [{
        id: 1,
        image: require('../assets/Images/iPhone15Pro.jpg'),
        ProductName: 'Product Name: Apple Iphone 15',
        Cost: 'Price: Rs.150000',
        Delivered : 'Delivered: 2 Jan 2024',
        Rated: 'Rate The Product : ***** '
    },
    {
      id: 2,
      image: require('../assets/Images/bluetoothHeadset.webp'),
      ProductName: 'Product Name: Bluetooth Earphones',
      Cost: 'Price: Rs.150000',
      Delivered : 'Delivered: 2 Jan 2024',
      Rated: 'Rate The Product : ***** '
  },
  {
    id: 3,
    image: require('../assets/Images/trimming.jpg'),
    ProductName: 'Product Name: Philips Trimmer',
    Cost: 'Price: Rs.150000',
    Delivered : 'Delivered: 2 Jan 2024',
    Rated: 'Rate The Product : *****'
},
{
  id: 4,
  image: require('../assets/Images/logo.png'),
  ProductName: 'Product Name: Apple Iphone 15',
  Cost: 'Price: Rs.150000',
  Delivered : 'Delivered: 2 Jan 2024',
  Rated: 'Rate The Product : ***** '
},
  ]

    function OrderHandler({item}){
        return(
          <View style={styles.OrderDetailContainer}>
            <Image style={{height:200, marginTop:40, marginBottom:20}} source={item.image} resizeMode='contain' ></Image>
            <Text style={{fontWeight:'900'}}>{item.ProductName}</Text>
            <Text style={styles.DetailText}>{item.Cost}</Text>
            <Text style={styles.DetailText}>{item.Delivered}</Text>
            <Text style={styles.DetailText}>{item.Rated}</Text>
          </View>
        )
    }
    return(
<View style={styles.MainContainer}>
    <FlatList data={Data} renderItem={OrderHandler} keyExtractor={(item)=> item.id.toString()}>

    </FlatList>
</View>
    )
}

export default SellerMyOrders;

const styles = StyleSheet.create({

    headerLeftContainer: {
        flexDirection: "row",
      },
      HeaderLeftText: {
        paddingTop: 6,
        fontWeight: "bold",
        paddingLeft: 4,
      },
      MainContainer:{
       backgroundColor:'#5A5A5A',
       flex:1
      },
    OrderDetailContainer:{
        flex:1,
        alignItems:'center',
        borderRadius:20,
        borderWidth:1,
        margin:10,
        height:400,
        backgroundColor:'#9ba18d',
        elevation:4
    },
    DetailText:{
      fontWeight:'500'
    }
})