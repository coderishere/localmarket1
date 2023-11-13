import {View, TextInput , StyleSheet} from 'react-native'


function TextInputContainer({children}){
return(
    <View style={styles.EmailIdContainer}>
        <TextInput
          style={styles.emailidinput}
          autoCapitalize="none"
          autoCorrect={false}
          cursorColor={"black"}
          placeholder= {children}
        ></TextInput>
      </View>
)
}

export default TextInputContainer;

const styles = StyleSheet.create({
    EmailIdContainer: {
        width: "80%",
        marginVertical: 10,
      },
      emailidinput: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 28,
        height: 45,
        paddingHorizontal: 15,
      },
})