import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Provider as Paper, DefaultTheme } from 'react-native-paper'

// Screens
// ========
import Home from './screens/home/home'
import Agenda from './screens/agenda/agenda'
import HouseholdNav from './screens/households/householdNav'
import Edu from './screens/eduVids/eduVidsNav'
import Noti from './screens/notifications/notifications'

// Components
// ============
import Drawer from './components/drawer/drawer'

// Theme
// ======
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'cadetblue',
    accent: '#e67e22',
    text: 'white'
  },
};

const DrawerNavigator = createDrawerNavigator()


/**
 * NOTE
 * =====
 * The app requires a live version of the database
 * since the acquisition of a live server would require
 * devOps knowledge and a server(with a monthly fee),
 * the data is simulated according to the database schema
 */
const App = () => {
  return (
    <Paper theme={theme}>
      <NavigationContainer theme={theme}>
        <StatusBar backgroundColor='cadetblue' barStyle='light-content' />
        <DrawerNavigator.Navigator
          initialRouteName='agenda'
          drawerType='slide'
          edgeWidth={50}
          drawerContent={(props) => <Drawer {...props} />}
        >
          <DrawerNavigator.Screen
            name='agenda'
            component={Agenda}
            options={{
              title: 'Your Agenda'
            }}
          />
          <DrawerNavigator.Screen
            name='noti'
            component={Noti}
            options={{
              title: 'Notifications'
            }}
          />
          <DrawerNavigator.Screen
            name='household'
            component={HouseholdNav}
            options={{
              title: 'Households'
            }}
          />
          <DrawerNavigator.Screen
            name='eduVids'
            component={Edu}
            options={{
              title: 'Educational Videos'
            }}
          />
        </DrawerNavigator.Navigator>
      </NavigationContainer>
    </Paper>
  );
};

export default App;
