import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import { List } from 'react-native-paper'
import Fakerator from 'fakerator'

const DUMMY_DATA_TOTAL = 15

function EduVidsList({ navigation, route }) {
  const [vids, setVids] = useState([])

  useEffect(() => {
    const fakerator = Fakerator()
    const vidsList = []

    for(let i = 0; i < DUMMY_DATA_TOTAL; i++) {
      const title = fakerator.lorem.sentence()
      const author = fakerator.names.name()
      const domain = fakerator.internet.domain()

      vidsList.push({
        title,
        author,
        domain
      })
    }

    // Network simulation
    setTimeout(() => {
      setVids(vidsList)
    }, 1000)
    
    // Only run wehn the component has mounted
  }, [])

  function renderItem({ item, index }) {
    return (
      <List.Item
        key={index}
        title={item.title}
        description={`By: ${item.author} | On: ${item.domain}`}
        onPress={() => navigation.navigate('viewVid', {
          title: item.title,
          domain: item.domain,
          author: item.author
        })}
        left={props => <List.Icon {...props} icon='video' />}
      />
    )
  }

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1
      }}
    >
      <FlatList
        renderItem={renderItem}
        data={vids}
      />
    </View>
    
  )
}

export default EduVidsList
