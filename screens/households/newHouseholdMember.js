import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

/**
 * Here the healthcare worker has the ability to add new household members
 * to the household list
 * 
 * NOTE
 * =====
 * This should be server driven since a patient ID is required and
 * it also needs to be accounted for in the registration procces
 */
const NewHouseHoldMember = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white'
      }}
    >
      <ScrollView>
        <TextInput
          placeholder='Patient Name'
          mode='outlined'
          style={{
            margin: 10
          }}
        />

        <TextInput
          placeholder='Cell Num'
          mode='outlined'
          style={{
            margin: 10
          }}
        />

        <TextInput
          placeholder='NPI (optional)'
          mode='outlined'
          style={{
            margin: 10
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            padding: 10
          }}
        >
          <Button
            mode='contained'
            style={{
              backgroundColor: 'cadetblue',
              flex: 1,
              marginRight: 10,
              borderRadius: 99
            }}
          >
            Cancel
          </Button>
          <Button
            mode='contained'
            style={{
              backgroundColor: 'cadetblue',
              flex: 1,
              marginLeft: 10,
              borderRadius: 99
            }}
          >
            Submit
          </Button>
        </View>
      </ScrollView>
    </View>
  )
}

export default NewHouseHoldMember
