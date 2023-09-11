import {View, Pressable , Image, StyleSheet} from 'react-native'



function HomePageButton({onPress}){
    return(
 <Pressable onPress={onPress}>
     <Image style={styles.HomePageButton} source={require('../Images/logo.png')}></Image>  
</Pressable>            )
}

export default HomePageButton;

const styles = StyleSheet.create({
    HomePageButton:{
        height:30,
        width:24,
    }
})