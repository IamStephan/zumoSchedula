import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Button, TextInput, List, FAB } from 'react-native-paper'

const CaptureData = ({ route, navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white'
      }}
    >
      <ScrollView>
        <List.Item
          title='Household Name'
          description={route.params.houseName}
        />
        <List.Item
          title='Total Members'
          description={route.params.members}
        />
        <List.Item
          title='Address'
          description={route.params.address}
        />

        {/**
         * Depending on the household, a patient maybe selected
         * to only report the data capture for a specific memeber
         * otherwise it would probably be best to capture data
         * on the the whole household
         */}
        <Button
          mode='contained'
          style={{
            backgroundColor: 'cadetblue',
            flex: 1,
            margin: 10,
            borderRadius: 99
          }}
        >
          Select Member
        </Button>

        <TextInput
          placeholder='Findings (100)'
          multiline
          numberOfLines={10}
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

        <View style={{
          height: 75
        }} />
      </ScrollView>
      <FAB
        style={{
          position: 'absolute',
          margin: 16,
          right: 0,
          bottom: 0,
          backgroundColor: 'cadetblue'
        }}
        icon='plus'
        color='white'
        label='New Member'
        onPress={() => { navigation.navigate('newHouseMem') }}
      />
    </View>
  )
}

export default CaptureData
