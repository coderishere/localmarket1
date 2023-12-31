import { Pressable, StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';

function UserNotification({onPress}){
    return(
        <Pressable style={styles.PressableConatainer} onPress={onPress}>
            <Ionicons name="ios-notifications" size={22} color="black" />
        </Pressable>
    )
}
export default UserNotification;

const styles = StyleSheet.create({
    PressableConatainer:{
        paddingTop: 5,
        marginRight: 15,
    }
})