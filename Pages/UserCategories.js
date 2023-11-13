import { Pressable, StyleSheet, Text, View, Image, FlatList } from "react-native";
import { useLayoutEffect } from "react";
import HomePageButton from "../assets/HomePageButon/HomePageButton";

function UserCategories({ navigation }) {
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
 
function SelectCatHandler(){
return(
  console.log('selected!')
)
}
function NotifySeller(){
  console.log('notify')
  navigation.navigate('Mainpage')
}

  useLayoutEffect(() => {
    navigation.setOptions({
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
    <View style={styles.FlatlistContainer}>

      <View style={styles.ChooseTextContainer}>
        <Text style={styles.ChooseText}>CHOOSE THE CATEGORY!!</Text>
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
<Pressable style={styles.notifySellerContainer} onPress={NotifySeller}>
  <Text style={styles.NotifySellerText}>NOTIFY SELLER</Text>
</Pressable>
    </View>
    
     
   
  );
}

export default UserCategories;

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
    fontSize: 25,
    fontWeight: "400",
    paddingTop:2
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
