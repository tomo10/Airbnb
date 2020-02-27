import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Episodes, { episodes } from "./src/Episodes";
import Airbnb, {
  assets as airbnbAssets
} from "./src/Airbnb";
import {useNavigation} from 'react-navigation-hooks';
import { enableScreens } from "react-native-screens";
import { SafeAreaProvider } from "react-native-safe-area-context";



const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      Episodes: {
        screen: Episodes,
        navigationOptions: {
          title: "Can it be done in React Native?"
        }
      },
      Airbnb: {
        screen: Airbnb,
        navigationOptions: {
          title: "Airbnb",
          header: () => null
        }
      }
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: 'green',
          borderBottomWidth: 0
        },
        headerTintColor: "white"
      }
    }
  )
);
  


export default function App() {

  // const {navigate} = useNavigation();

  return (
    // <View style={styles.container}>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    //   {/* <Button
    //     onPress={() => navigate('Airbnb')}
    //   >

    //   </Button> */}
    //   <AppNavigator />
    // </View>
    <SafeAreaProvider>
    <AppNavigator />
  </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
