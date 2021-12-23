import {StatusBar} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import Toast from 'react-native-toast-message';

import {isReadyRef, navigationRef} from './rootNavigation';
import {RouteList, initialRouteName} from './routeList';

const Stack = createStackNavigator();
export class Route extends Component {
  // componentDidMount() {
  //   return () => {
  //     isReadyRef.current = true;
  //   };
  // }
  render() {
    return (
      <>
      <StatusBar backgroundColor={"#f6f6f6"} />
        {/* <Toast ref={ref => Toast.setRef(ref)} /> */}
        <NavigationContainer
          ref={() => {
            isReadyRef.current = true;
          }}>
          <Stack.Navigator initialRouteName={initialRouteName}>
            {RouteList.map((route, index) => (
              <Stack.Screen
                key={index}
                name={route.name}
                component={route.component}
                options={{headerShown: false}}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

export default Route;