import React, { useEffect, useState } from 'react'
import { List, FAB } from 'react-native-paper'
import { View, FlatList, Text } from 'react-native'
import Fakerator from 'fakerator'

// Number of households to generate
const DUMMY_DATA_TOTAL = 45

const Household = ({ navigation }) => {
  const [houses, setHouses] = useState([])

  useEffect(() => {
    const fakerator = Fakerator()
    const housesList = []

    for(let i = 0; i < DUMMY_DATA_TOTAL; i++) {
      const houseName = fakerator.names.lastName()
      const members = fakerator.random.number(2, 5)
      const address = `Western Cape, Langebaan ${fakerator.address.street()}`

      housesList.push({
        houseName,
        members,
        address
      })
    }

    // Network Simulation
    setTimeout(() => {
      setHouses(housesList)
    }, 1000)

    
    // Run only when the component has mounted
  }, [])

  function renderItem ({ item, index }) {
    return (
      <List.Item
        key={index}
        title={item.houseName}
        description={`Total Members: ${item.members}\n${item.address}`}
        onPress={() => {navigation.navigate('captureData', {
          houseName: item.houseName,
          members: item.members,
          address: item.address,
        })}}
        left={props => <List.Icon {...props} icon='account-group' />}
      />
    )
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white'
      }}
    >
      <FlatList
        ListFooterComponent={() => (
          <View style={{
            height: 75
          }} />
        )}
        data={houses}
        renderItem={renderItem}
      />
    </View>
  )
}

export default Household

