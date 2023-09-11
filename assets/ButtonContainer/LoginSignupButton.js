import {Pressable, Text, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native'

function LoginSignupButton({children , onPress }){
  
return(
    <Pressable onPress={onPress} style={styles.LoginButtonConatiner}>
    <Text style={styles.LoginText}>{children}</Text>
  </Pressable>
)
}

export default LoginSignupButton;

const styles = StyleSheet.create({
    LoginButtonConatiner:{
        borderRadius:10,
        backgroundColor: '#000000',
        marginTop:30,
        width:'30%',
        height: 40
      },
      LoginText:{
        color:'white',
        textAlign: 'center',
        paddingTop:10,
        fontWeight: 'bold'
      }
})