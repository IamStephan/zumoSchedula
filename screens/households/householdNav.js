import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import List from './household'
import NewHouseMem from './newHouseholdMember'
import CaptureData from './captureData'

const StackNav = createStackNavigator()

const HouseholdNav = () => {
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name='list'
        options={{
          title: 'List of Households',
          headerStyle: {
            elevation: 1
          }
        }}
        component={List}
      />
      <StackNav.Screen
        name='captureData'
        options={{
          title: 'Capture Household Data',
          headerStyle: {
            elevation: 1
          }
        }}
        component={CaptureData}
      />
      <StackNav.Screen
        name='newHouseMem'
        options={{
          title: 'Create a New Household Member',
          headerStyle: {
            elevation: 1
          }
        }}
        component={NewHouseMem}
      />
    </StackNav.Navigator>
  )
}

export default HouseholdNav
