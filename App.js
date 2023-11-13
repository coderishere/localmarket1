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
          <stack.Screen
            name="UserNotification"
            component={UserNotification}
            options={{title:'',  headerBackVisible: false, headerStyle:{backgroundColor:'#717a59'} } }
          />
          <stack.Screen
            name="UserDetailEdit"
            component={UserDetailEdit}
            options={{title:''} }
          />
          <stack.Screen
            name="UserMyOrder"
            component={UserMyOrder}
            options={{title:'', headerBackVisible: false,  headerStyle:{backgroundColor:'#717a59'}} }
          />
           <stack.Screen
            name="UserKart"
            component={UserKart}
            options={{title:'', headerBackVisible: false,  headerStyle:{backgroundColor:'#717a59'}} }
          />
           <stack.Screen
            name="UserAddress"
            component={UserAddress}
            options={{title:'', headerBackVisible: false, } }
          />
          <stack.Screen
            name="UserAddNewAddress"
            component={UserAddNewAddress}
            options={{title:'', headerBackVisible: false, } }
          />
          <stack.Screen
            name="SellerLogin"
            component={SellerLogin}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="SellerSignupOne"
            component={SellerSignupOne}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="SellerSignupTwo"
            component={SellersignupTwo}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="SellerSignupThree"
            component={SellersignupThree}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="SellerSignupFour"
            component={SellersignupFour}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="SellerSignupFive"
            component={SellersignupFive}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="SellerMainPage"
            component={SellerMainPage}
            options={{title:'',  headerBackVisible: false } }
           />
           <stack.Screen
            name="SellerProfilePage"
            component={SellerProfile}
            options={{title:'',  headerBackVisible: false } }
           />
            <stack.Screen
            name="SellerEditDetails"
            component={SellerEditDetails}
            options={{title:'',  headerBackVisible: false } }
           />
           <stack.Screen
            name="SellerMyOrders"
            component={SellerMyOrders}
            options={{title:'', headerBackVisible: false,  headerStyle:{backgroundColor:'#717a59'}} }
           />
            <stack.Screen
            name="SellerNotification"
            component={SellerNotification}
            options={{title:'', headerBackVisible: false,  headerStyle:{backgroundColor:'#717a59'}} }
           />
            <stack.Screen
            name="SellerUpdateStock"
            component={SellerUpdateStock}
            options={{title:'', headerBackVisible: false,  headerStyle:{backgroundColor:'#717a59'}} }
           />
            <stack.Screen
            name="RespondLater"
            component={RespondLater}
            options={{title:'', headerBackVisible: false,  headerStyle:{backgroundColor:'#717a59'}} }
           />
             <stack.Screen
            name="OrderRecieved"
            component={SellerOrderRecieved}
            options={{title:'', headerBackVisible: false,  headerStyle:{backgroundColor:'#717a59'}} }
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
