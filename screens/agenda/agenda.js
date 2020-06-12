import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Headline } from 'react-native-paper'
import { Agenda as AgendaComp } from 'react-native-calendars'
import Fakerator from 'fakerator'

const fakerator = Fakerator()

function genAppointments(num, type) {
  let content
  switch(type) {
    case 'late': {
      content = 'Missed their appointment'
    }
    case 'today': {
      content = 'Is scheduled for an appoinment today'
    }
    case 'tomorrow': {
      content = 'Is scheduled for an appoinment tomorrow'
    }
  }
  const list = []

  for(let i = 0; i < num; i++) {
    list.push({
      name: fakerator.names.name(),
      content
    })
  }
  return list
}

const DUMMY_DATA = {
  '2020-06-03': genAppointments(3, 'late'),
  '2020-06-04': genAppointments(4, 'today'),
  '2020-06-05': genAppointments(6, 'tomorrow'),
}

const Agenda = () => {
  const [agendaData, setAgendatData] = useState()
  /**
   * Explaination
   * =============
   * This is where the health worker's agenda data would be loaded
   * into the actual agenda and fed into the component.
   * The data should be normalized to look like the dummy data.
   * to update the component the state of the agenda data needs to be updated
   * to rerender the component and show the data
   */
  useEffect(() => {
    // Network Simulation
    setTimeout(() => {
      dataFetchAndNormalize()
    }, 1000)
    
    // This allows the effect to be only run when the component is monted (No cleanup is needed)
  }, [])

  function dataFetchAndNormalize() {
    // Normalization should probably happen at the server level
    setAgendatData(DUMMY_DATA)
  }

  function renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }


  const renderItem = (item, firstItemInDay) => {
    console.log('rendering', item)
    return (
      <TouchableOpacity>
        <View
          style={{
            backgroundColor: 'white',
            margin: 5,
            padding: 5,
            borderRadius: 10,
            flex: 1
          }}
        >
          <Text style={{color: '#282828', fontSize: 20, paddingBottom: 5}}>{item.name}</Text>
          <Text style={{color: '#282828'}}>{item.content}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <AgendaComp
        style={{
          flex: 1
        }}
        items={agendaData}
        //loadItemsForMonth={() => { alert('VOK') }}
        selected={'2020-06-03'}
        renderItem={(item, firstItemInDay) => { return (renderItem(item, firstItemInDay))}}
        renderEmptyDate={renderEmptyDate}
        refreshing={false}
        //rowHasChanged={this.rowHasChanged.bind(this)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});

export default Agenda
