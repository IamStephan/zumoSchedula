import React from 'react'
import { View, Text } from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import { Avatar } from 'react-native-paper';

const Drawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30,
      }}>
        <Avatar.Icon icon='hospital-marker'
          style={{
            marginBottom: 15,
            backgroundColor: 'cadetblue'
          }}
          color='white'
        />
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20
          }}
        >
          Healthcare Worker
        </Text>
      </View>
      <DrawerItemList
        {...props}
      />
      <DrawerItem
        label='Help'
        onPress={() => Linking.openURL('https://linkToWebsiteForHCW.com/help')}
      />
    </DrawerContentScrollView>
  )
}

export default Drawer
