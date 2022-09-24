import * as React from 'react';
import { StyleSheet } from 'react-native';
import DrawerItems from './ DrawerItems';
import ProfileScreen  from './ProfileScreen';
import ReferScreen from './ReferScreen';
import  Header  from './Header'
import 'react-native-gesture-handler';

import { NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
    <Drawer.Navigator
           initialRouteName="Refer"
           screenOptions={{
             activeTintColor: '#e91e63',
             itemStyle: { marginVertical: 10 },
           }}
    >
           {
             DrawerItems.map(drawer=><Drawer.Screen
               key={drawer.name}
               name={drawer.name}
               component={
                drawer.name==='Profile' ? ProfileScreen
                      : ReferScreen}
             />)
           }
    </Drawer.Navigator>
    </NavigationContainer>
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
