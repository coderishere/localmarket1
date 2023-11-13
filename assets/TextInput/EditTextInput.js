import { StyleSheet, View , TextInput } from "react-native";

function EditTextInput({children}){
    return(
        <View style={styles.MainContainer}>
            <TextInput
          style={styles.EditTextInput}
          autoCapitalize="none"
          autoCorrect={false}
          cursorColor={"black"}
          placeholder= {children}
        ></TextInput>
        </View>
    )
}

export default EditTextInput;

const styles = StyleSheet.create({
    MainContainer:{
        alignItems:'center',
        marginTop:20
    },
    EditTextInput:{
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 28,
        height: 45,
        paddingHorizontal: 15,
        width:350
    }
})