import{View, Text, StyleSheet, Image, Pressable} from 'react-native'
import TextInputContainer from '../assets/TextInput/TextInputContainer';
import LoginSignupButton from '../assets/ButtonContainer/LoginSignupButton';
import { FontAwesome } from "@expo/vector-icons";


function SignupPage({navigation}){
    function LoginPageHandler(){
      navigation.navigate('loginPage')
    }
    function CategoriesPageHandler(){
      navigation.navigate('Mainpage')
    }
    return( 
        <View style={styles.Container}>
             <Image style={styles.Image} source={require('../assets/Images/signup.png')}/>

         
         <TextInputContainer>Full Name</TextInputContainer>
         <TextInputContainer>Phone Number</TextInputContainer>
         <TextInputContainer>Email Id</TextInputContainer>
         <TextInputContainer>Password</TextInputContainer>
         <LoginSignupButton onPress={CategoriesPageHandler}>Sign Up</LoginSignupButton>
         <View style={styles.SignupContainer}>
          <Text style={styles.AlreadyaMemberText}>Already a Member?</Text> 
          <Pressable onPress={LoginPageHandler}>
            <Text style={styles.LoginText}>Login?</Text>
          </Pressable>
        </View>
        </View>
    )
}
export default SignupPage; 

const styles= StyleSheet.create({
    Container:{
        alignItems:'center',
        paddingTop:100,
        backgroundColor:'#ffffff',
        flex:1,
        
    },
    userlogo: {
      marginVertical: 20 ,
    },
    Image:{
        marginBottom:80
    },
    SignupContainer:{
        flexDirection:'row',
        marginTop: 10,
      },
      AlreadyaMemberText:{
         fontSize: 14,
         paddingHorizontal:5,
         color:'#726565'
      },
      LoginText:{
        color: '#2653e9'
      }
})