import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import List from './eduVidsList'
import ViewVid from './viewVid'

const StackNav = createStackNavigator()

/**
 * NOTE
 * =====
 * These should probably be a repository of pre
 * verified video links.
 * Storing the videos locally, unless explicitly requested by the
 * user, is a very bad idea
 */
const EduVidsNav = () => {
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name='listVids'
        options={{
          title: 'List of videos',
          headerStyle: {
            elevation: 1
          }
        }}
        component={List}
      />
      <StackNav.Screen
        name='viewVid'
        options={{
          title: 'View Video',
          headerStyle: {
            elevation: 1
          }
        }}
        component={ViewVid}
      />
    </StackNav.Navigator>
  )
}

export default EduVidsNav