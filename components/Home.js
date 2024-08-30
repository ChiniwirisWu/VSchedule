import React from "react"
import { View, Text, ScrollView, SectionList, StyleSheet, Pressable } from "react-native"

export default function Home({navigation}){
  const [schedule] = React.useState([
    {title: 'Monday', data: ['08:00 - 09:30']},
    {title: 'Tuesday', data: ['08:00 - 09:30', '10:15 - 11:45', '01:15 - 05:00']},
    {title: 'Wednesday', data: ['08:00 - 09:30', '01:15 - 02:45']},
    {title: 'Thrusday', data: ['10:15 - 01:15', '02:45 - 04:15']},
    {title: 'Friday', data: ['08:00 - 12:30']},
    {title: 'Saturday', data: []},
    {title: 'Sunday', data: []},
  ])
  const date = new Date()
   
  return(
    <View style={styles.container}>
      <View style={styles.navigatorContainer}>
        <Pressable onPress={()=> navigation.navigate('calendar')}>
            <Text>Full schedule</Text>
        </Pressable>
      </View>
      <Text style={styles.title}>Today's Schedule</Text>
      <ScrollView>
        <SectionList
          sections={[schedule[date.getDay() - 1]]}
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
  navigatorContainer: {
    padding: 5,
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 15,
    paddingHorizontal: 10,
    margin: 10,
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
