import { StyleSheet, View ,Text, Pressable, Alert} from "react-native";
import { useLayoutEffect } from "react";
import HomePageButton from "../assets/HomePageButon/HomePageButton";
import UserProfileText from "../assets/TextInput/UserProfileText";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


function SellerProfile({navigation}){
  
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

      function HomePageHandler(){
          navigation.navigate('SellerMainPage')
      }
      function EditDetailHandler(){
        console.log('Edit')
        navigation.navigate('SellerEditDetails')
       }
       function LogoutHandler(){
        return(
          Alert.alert('Logging Out!!!', 'Are You Sure?',[{style:'cancel'},{text:'okay', onPress:LoggingoutHandler},{text:'cancel'}])
        )
       }
       function LoggingoutHandler(){

        navigation.navigate('SellerLogin')
      }
      function SellerOrderHandler(){
        navigation.navigate('SellerMyOrders')
      }

      function UpdateStockHandler(){
        navigation.navigate('SellerUpdateStock')
      } 
      function PendingItemHandler(){
        navigation.navigate('RespondLater')
      }
    return(
        <View style={styles.MainContainer}>
            <Pressable style={styles.UpdateStockContainer} onPress={UpdateStockHandler}>
              <Text style={{color:'#ffffff',paddingTop:8,fontWeight:'600'}}>UPDATE STOCKS</Text>
              
            </Pressable>
            <Pressable style={styles.PendingItemContainer} onPress={PendingItemHandler}>
              <Text style={{color:'#ffffff',paddingTop:8,fontWeight:'600'}}>LIST PENDING ITEMS</Text>
              
            </Pressable>
            <Pressable style={styles.EditIconContainer} onPress={EditDetailHandler}>
        <FontAwesome name="edit" size={40} color="black" />       
        </Pressable>
            <UserProfileText>Name</UserProfileText>
            <UserProfileText>Business Name</UserProfileText>
            <UserProfileText>Phone Number</UserProfileText>
            <UserProfileText>Email Id</UserProfileText>
            <Pressable onPress={SellerOrderHandler}>
            <UserProfileText>My Orders</UserProfileText>
            </Pressable>
            
            <UserProfileText>My Transaction</UserProfileText>
           

            <View style={styles.LogoutContainer}>
    <Pressable onPress={LogoutHandler}>
    <MaterialIcons style={styles.LogoutText} name="logout" size={24} color="black" />
    </Pressable>
     </View>
     
           
        </View>
    )
}

export default SellerProfile;

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
        flex:1,

      },
      UpdateStockContainer:{
        borderRadius:10,
        borderWidth:1,
        borderColor:'#ffffff',
        height:40,
        backgroundColor:'#000000',
        marginHorizontal:30,
        marginTop:40,
        alignItems:'center',
        marginBottom:30
      },
      EditIconContainer:{
        alignItems:'center',
        marginLeft:300,
        marginBottom:30
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
         paddingHorizontal:65,
        paddingTop:10,
        fontWeight:'bold',
        color:'#ffffff'
    
      },
      PendingItemContainer:{
        borderRadius:10,
        borderWidth:1,
        borderColor:'#ffffff',
        height:40,
        backgroundColor:'#000000',
        marginHorizontal:30,
        alignItems:'center',
        marginBottom:30
      }
})