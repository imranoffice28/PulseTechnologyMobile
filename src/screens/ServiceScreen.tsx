import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ServiceScreen = () => {
  return (
    <View style={styles.container}>
      <Text>No service available</Text>
    </View>
  )
}

export default ServiceScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})