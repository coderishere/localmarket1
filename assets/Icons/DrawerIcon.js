import { Pressable , Text , StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';


function DrawerIcon({onPress}){
return <Pressable onPress={onPress} style={styles.PressableConatainer}>
<FontAwesome name="user-circle" size={26} color="black" />
</Pressable>
}

export default DrawerIcon;

const styles = StyleSheet.create({
    PressableConatainer:{
        paddingTop: 5,
        
    }
})