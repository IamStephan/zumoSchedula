import React from 'react'
import { Headline, Paragraph, IconButton } from 'react-native-paper'
import { View, Text } from 'react-native'

const Notification = props => {
  let color, text, icon

  switch(props.type) {
    case 'info': {
      color = 'cadetblue'
      text = 'white'
      icon = 'information'
      break
    }
    case 'warn': {
      color = '#e67e22'
      text = 'white'
      icon = 'alarm'
      break
    }

    default: {
      color = 'cadet'
      text = 'white'
      icon = 'information'
    }
  }

  return (
    <View
      style={{
        backgroundColor: color,
        borderRadius: 10,
        padding: 15,
        margin: 5,
        flexDirection: 'row'
      }}
    >
      <View
        style={{
          marginRight: 15
        }}
      >
        <IconButton icon={icon} color={text} />
      </View>
      <View>
        <Headline
          style={{
            color: text
          }}
        >
          {props.title}
        </Headline>
        <Paragraph
          style={{
            color: text
          }}
        >
          {props.content}
        </Paragraph>
      </View>
    </View>
  )
}

export default Notification
