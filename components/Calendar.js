import React from "react"
import { View, Text, ScrollView, SectionList, StyleSheet, Pressable } from "react-native"

export default function Calendar({navigator}){
  const [schedule] = React.useState([
    {title: 'Monday', data: ['08:00 - 09:30']},
    {title: 'Tuesday', data: ['08:00 - 09:30', '10:15 - 11:45', '01:15 - 05:00']},
    {title: 'Wednesday', data: ['08:00 - 09:30', '01:15 - 02:45']},
    {title: 'Thrusday', data: ['10:15 - 01:15', '02:45 - 04:15']},
    {title: 'Friday', data: ['08:00 - 12:30']},
  ])
  return(
    <View style={styles.container}>
      <Pressable></Pressable>
      <Text style={styles.title}>V Semester Schedule</Text>
      <ScrollView>
        <SectionList
          sections={schedule}
          renderSectionHeader={({section})=> <Text style={styles.section}>{section.title}</Text>}
          renderItem={({item, key})=> <Text style={styles.items}>{item}</Text>}
          keyExtractor={(key)=> `day-${key}`}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems:'center'
  },
  title: {
    fontWeight: '900' 
  },
  section: {
    marginTop: 10,
    color: 'blue',
    fontWeight: '600'
  },
  items: {

  }
})
