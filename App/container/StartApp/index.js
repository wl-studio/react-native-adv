import React, { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { Button } from 'react-native-elements'

export default function StartPage({ navigation }) {
  return (
    <>
      <ImageBackground
        style={styles.background}
        source={require('./images/bg.jpg')}
      >
        <View style={styles.container}>
          <Text style={styles.title}>云投放</Text>
        </View>
        <Button
          style={styles.startBtn}
          onPress={() => navigation.navigate('Login')}
          title="开始使用"
        />
      </ImageBackground>
    </>
  )
}

StartPage.navigationOptions = {
  header: null
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    flex: 1
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 20
  },
  startBtn: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    left: '50%'
    // transform: [{ translate: '0,-50%' }]
  }
})
