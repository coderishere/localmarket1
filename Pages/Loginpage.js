import { View , Text, StyleSheet} from "react-native";

function LoginPage(){
    return(<View style={styles.Container}>
        <Text>Hello HOW ARE YOU</Text>
    </View>)

}

export default LoginPage;

const styles = StyleSheet.create({
    Container : {
        flex:1,
        justifyContent: 'center',
        textAlign:'center'
        
    }
})