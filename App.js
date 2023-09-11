import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartingPage from './Pages/Startingpage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './Pages/Loginpage';

export default function App() {
const stack = createNativeStackNavigator();
  
  return (
    <View style={styles.container}>
      
     <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Start' component={StartingPage} options={{
          title: 'WELCOME',
          headerShown: false
        }} />
        <stack.Screen name='loginPage' component={LoginPage}/>
      </stack.Navigator>
     </NavigationContainer>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
flex:1,
  },
});
