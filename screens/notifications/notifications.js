import React, { useEffect, useState } from 'react'
import { View, ScrollView, FlatList } from 'react-native'
import Fakerator from 'fakerator'
// Components
import Notification from '../../components/notifications/notifications'

const fakerator = Fakerator()
// DUMMY DATA
const DUMMY_DATA = [
  {
    title: fakerator.names.name(),
    content: 'Missed an appointment',
    type: 'warn'
  },
  {
    title: fakerator.names.name(),
    content: 'Missed an appointment',
    type: 'warn'
  },
  {
    title: fakerator.names.name(),
    content: `Has an appointment for (Diabetic) tomorrow`,
    type: 'info'
  },
  {
    title: fakerator.names.name(),
    content: `Has an appointment for (PMTCT) tomorrow`,
    type: 'info'
  },
]

const Notifications = () => {
  const [notis, setNotis] = useState()

  useEffect(() => {
    // Network Simulation
    setTimeout(() => {
      setNotifications()
    }, 1000)

    // Only run when te component has mounted
  }, [])

  function setNotifications() {
    setNotis(DUMMY_DATA)
  }

  return (
    <ScrollView>
      <FlatList
        data={notis}
        renderItem={({ item, index }) => (
          <Notification key={index} title={item.title} content={item.content} type={item.type}  />
        )}
      />
      
    </ScrollView>
  )
}

export default Notifications

