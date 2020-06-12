import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { Avatar, List, Paragraph, Button } from 'react-native-paper'
import Fakerator from 'fakerator'

const ViewVid = ({ route }) => {
  const [content, setContent] = useState()
  const fakerator = Fakerator()

  useEffect(() => {
    setContent(fakerator.lorem.paragraph())
  }, [])

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'white'
      }}
    >
      <View
        style={{
          position: 'relative'
        }}
      >
        <Image
          style={{
            width: '100%',
            height: 300
          }}
          source={{ uri: `https://picsum.photos/seed/${fakerator.lorem.word()}/500/600/` }}
        />

        <View
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            top: 0,
            left: 0,
            backgroundColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Button
            mode='contained'
            style={{
              backgroundColor: 'cadetblue',
              marginLeft: 10,
              borderRadius: 99
            }}
          >
            Play Video
          </Button>
        </View>
      </View>

      <View
        style={{
          padding: 10,
          flexDirection: 'row'
        }}
      >
        <Avatar.Text
          label='A'
          color='white'
          style={{
            backgroundColor: 'cadetblue'
          }}
        />

        <List.Item
          style={{
            flex: 1
          }}
          title={route.params.title}
          description={`By: ${route.params.author} | On: ${route.params.domain}`}
        />
      </View>

      <View
        style={{
          padding: 20
        }}
      >
        <Paragraph>
          { content }
        </Paragraph>
      </View>
    </ScrollView>
  )
}

export default ViewVid
