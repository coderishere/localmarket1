import { Pressable, StyleSheet, Text, View, Image, FlatList } from "react-native";
import { useLayoutEffect } from "react";

function SellersignupThree({navigation}){

    function SubmitCategoryHandler(){
       navigation.navigate('SellerSignupFour')
    }

    function SelectCatHandler(){
     console.log('selected')
    }
    const data= [{
        id : 1,
        images : require('../assets/Images/bookImage.png'),
        text: 'Books'
      },
      {
        id: 2,
        images: require('../assets/Images/PhoneCat.png'),
        text: 'Phones and accs.'
      },
      {
        id: 3,
        images: require('../assets/Images/earphonesCat.png'),
        text: 'Headset'
      }, 
      {
        id: 4,
        images: require('../assets/Images/earphonesCategory.png'),
        text: 'Earphones'
      },
      {
        id: 5,
        images: require('../assets/Images/trimmersCat.webp'),
        text: 'Trimmers'
      },
      {
        id: 6,
        images: require('../assets/Images/Homeappliances.jpg'),
        text: 'Home Appliances'
      },
      {
        id: 7,
        images: require('../assets/Images/LaptopCat.png'),
        text: 'Laptop and accs.'
      },
      {
        id: 8,
        images: require('../assets/Images/TabletsCat.png'),
        text: 'Tablet and accs.'
      },
      {
        id: 9,
        images: require('../assets/Images/CameraCat.png'),
        text: 'Camera and accs.'
      },
      {
        id: 10,
        images: require('../assets/Images/SpeakerCat.png'),
        text: 'Speakers'
      },
      ]
      return (
        <View style={styles.FlatlistContainer}>
    
          <View style={styles.ChooseTextContainer}>
            <Text style={styles.ChooseText}>CHOOSE CATEGORIES TO SELL !!!</Text>
          </View>
          
          <FlatList style={styles.FlatList} data={data}  keyExtractor={(item)=>item.id.toString()} numColumns={2} renderItem={({item})=>{
            return(
              <Pressable style={styles.FlatlistContainer} onPress={SelectCatHandler}>
               <Image style={styles.CategoryImage} source={item.images} resizeMode="contain"></Image>
               <View style={styles.CategoryTextContainer}>
               <Text style={styles.CategoryText}>{item.text}</Text>
               </View>
              
            </Pressable>
            )
          }}
          
           >
    
    
    </FlatList>
    <Pressable style={styles.notifySellerContainer} onPress={SubmitCategoryHandler}>
      <Text style={styles.NotifySellerText}>Submit Categories </Text>
    </Pressable>
        </View>
        
         
       
      );
}
export default SellersignupThree;
 
const styles = StyleSheet.create({
 FlatlistContainer:{
    flex:1,

  },
  FlatList:{
marginBottom:10
  },
  headerLeftContainer: {
    flexDirection: "row",
  },
  HeaderLeftText: {
    paddingTop: 6,
    fontWeight: "bold",
    paddingLeft: 4,
  },
  ChooseTextContainer: {
    alignItems: "center",
    marginTop: 40,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: "#e0a80bea",
    width:'85%',
    height:40,
    marginLeft:30
  },
  ChooseText: {
    fontSize: 20,
    fontWeight: "400",
    paddingTop:5
  },
  CategoryImage:{
    height:100,
    width:'100%',
    marginTop:40
  },
  CategoryTextContainer:{
    alignItems:"center",
    marginTop:20,
    borderRadius:20,
    borderWidth:1,
    backgroundColor:'#ffffff',
    marginHorizontal:30,
    height:25
    
  },
  CategoryText:{
   fontWeight:'bold',
   
  },
  notifySellerContainer:{
    borderRadius:20,
    borderWidth:1,
    backgroundColor:'#19be7a',
    height:40,
    alignItems:'center',
    marginBottom:10,
    marginHorizontal:30
  },
  NotifySellerText:{
    paddingTop:10,
    color:'#fffefe',
    fontWeight:'500'
  }
 
});
