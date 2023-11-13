import { StyleSheet, View ,Text, Pressable, ScrollView, FlatList } from "react-native";
import { useLayoutEffect } from "react";
import HomePageButton from "../assets/HomePageButon/HomePageButton";
import { Ionicons } from '@expo/vector-icons';

function UserAddress({navigation}){

    function HomePageHandler( ){
    
        navigation.navigate('Mainpage')
     
 }

 function NewAddressHandler(){
   navigation.navigate('UserAddNewAddress')
 }

 function AddressHolderHandler(){
  return(
    <View style={styles.AddressHolder}>
      <Pressable >
  <Text style={{paddingTop:10,paddingHorizontal:10,fontWeight:'500'}}>Rahul Kumar</Text>
  <Text style={{paddingTop:10,paddingHorizontal:10}}>Vikash Nagar Maranga Near Poletchnic, purnea</Text>
  <Text style={{paddingHorizontal:10}}>House No.1, Thane wali Gali</Text>
  <Text style={{paddingHorizontal:10}}>bihar -  854301</Text>
  <Text style={{paddingTop:10,paddingHorizontal:10}}>Phone: 7900300894 </Text>


   </Pressable>
    </View>
  )
  
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
      }, [navigation ]);

    return(
        <View style={{flex:1}}>
           <Pressable style={styles.AddnewContainer} onPress={NewAddressHandler}>
             <Text style={styles.TextAddNew}>+ Add a new address</Text>
            </Pressable>
            <View style={{flex:1}}>
            <FlatList data={[1,1,1,1,1]} renderItem={AddressHolderHandler}>
          
          </FlatList>
            </View>
          
          
        </View>
    )
}

export default UserAddress;

const styles= StyleSheet.create({
    headerLeftContainer: {
        flexDirection: "row",
      },
      HeaderLeftText: {
        paddingTop: 6,
        fontWeight: "bold",
        paddingLeft: 4,
      },
      AddnewContainer:{
        alignItems:'center',
        marginTop:20,
        borderRadius:20,
        borderWidth:1,
        backgroundColor:'#e0a80bea',
        height:40,
        marginHorizontal:10,
       marginBottom:10
      },
      TextAddNew:{
        paddingTop:10,
        color:'#000000',
        fontWeight:'500',
        fontSize:15
      },
      AddressHolder:{
        flex:1,
        borderRadius:10,
        borderWidth:1,
        height:150,
        margin:20
        },
      AddressText:{
        paddingHorizontal:10,
        paddingTop:10,

      }
})