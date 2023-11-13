import { StyleSheet,Text, Pressable , View, Alert} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";


function QuickResult({navigation}){
    const [pincode, setPincode] = useState('');
    function QuickResultHandler(){
   console.log('quick')
   
    }
    function ChooseCategoryHandler(){
     console.log('hello')
     navigation.navigate('categories')
    }
    return(
        <View style={styles.MainConatainer}>
            <Pressable  onPress={QuickResultHandler}>
        <Text style={styles.QuickResult}>Quick Result</Text>
       </Pressable>
       <Pressable onPress={ChooseCategoryHandler}>
        <Text style={styles.Notifyseller}>Choose Category</Text>
       </Pressable>
        </View>
        
      
    )
}

export default QuickResult;

const styles= StyleSheet.create({
    MainConatainer:{
        flex:1,
        flexDirection:'row',
        marginTop:20,
        marginLeft:40,
        
    },
    
    QuickResult:{
       backgroundColor:'#1577c7',
       height:40,
       width:140,
       borderRadius:16,
       color:'#ffffff',
       paddingLeft:30,
       paddingTop:10,
       fontWeight:'500'
      },
       Notifyseller:{
   backgroundColor:'#0cad14',
   height:40,
   width:140,
   borderRadius:16,
   color:'#ffffff',
   paddingLeft:16,
   paddingTop:10,
   marginLeft:30,
   fontWeight:'500'
  },
})