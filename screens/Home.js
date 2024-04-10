import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserList from '../components/UserList'

export default function Home() {
  return (
    <View style={{flex:1, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
      <UserList/>
    </View>
  )
}

const styles = StyleSheet.create({})