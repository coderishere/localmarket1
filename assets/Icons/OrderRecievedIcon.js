import { Pressable , Text , StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

function OrderRecieved({onPress}){
    return (
    <Pressable onPress={onPress} style={styles.PressableConatainer}>
<MaterialCommunityIcons name="clipboard-check" size={24} color="black" />
</Pressable>
    )
}
export default OrderRecieved;
const styles = StyleSheet.create({
    PressableConatainer:{
        paddingTop: 5,
        marginRight:15
    }
})