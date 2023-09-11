import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function UserCart(){
    return (
        <Pressable style={styles.PressableConatainer}>
            <Ionicons name="cart" size={22} color="black" />
        </Pressable>
    )
}
export default UserCart;

const styles = StyleSheet.create({
    PressableConatainer:{
        paddingTop: 5,
        marginRight: 15,
    }
})