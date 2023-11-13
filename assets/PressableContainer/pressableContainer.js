import {View, Text, StyleSheet , Pressable} from 'react-native'

function PressableContainer({children, onPress}){

  
  return (
    <View style = {styles.PressableContainer} >
    <Pressable onPress={onPress} style={styles.UserPress} android_ripple={{color:'#2c2929'} }  >
    
          <Text style={styles.PressableText}>{children}</Text>
          
          </Pressable>
          </View>
  )
}

export default PressableContainer;

const styles = StyleSheet.create({
    PressableContainer:{
        marginHorizontal: 20,
        marginTop: 6,
        borderRadius: 28,
        paddingVertical:15,
        overflow: 'hidden',
        elevation:4,
        
         },
         UserPress:{
          backgroundColor: '#ffffffff',
        borderColor: 'white', 
        borderRadius: 28,
        
      },
   
        PressableText: {
          color:'#000000',
          fontWeight:'bold',
          fontSize:20,
          paddingHorizontal: 40,
          paddingVertical: 10
        },
})