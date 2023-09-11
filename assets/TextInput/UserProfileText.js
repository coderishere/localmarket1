import { Text,View, StyleSheet, Button } from "react-native";


function UserProfileText({children}){
    return(
        <View style={styles.TextContainer}>
            <Text style={styles.Text}>{children}</Text>
            
        </View> 
    )
}

export default UserProfileText;

const styles = StyleSheet.create({
    TextContainer:{
        paddingLeft:20,
        paddingTop:10,
        borderRadius:10,
        borderWidth:1,
        height:45,
        borderRadius: 28,
        marginBottom:20,
        marginHorizontal:10
       },
       Text:{
        fontWeight:'bold'
       }
})