import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import UserStartingPage from "./Pages/UserStartingpage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserLoginPage from "./Pages/UserLoginpage";
import UserMainpage from "./Pages/UserMainpage";
import UserSignupPage from "./Pages/UserSignupPage";
import UserProfilePage from "./Pages/UserProfilePage";
 

export default function App() {
  const stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
            name="Start"
            component={UserStartingPage}
            options={{
              headerShown: false,
            }}
          />
          <stack.Screen
            name="loginPage"
            component={UserLoginPage}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="signupPage"
            component={UserSignupPage}
            options={{ headerShown: false }}
          />
           <stack.Screen
            name="Mainpage"
            component={UserMainpage}
            options={{title:'',  headerBackVisible: false } }
          />
          <stack.Screen
            name="UserProfile"
            component={UserProfilePage}
            options={{title:'',  headerBackVisible: false } }
          />
         
        </stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
