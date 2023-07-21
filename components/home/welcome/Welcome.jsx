import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import Prompt from '../../common/prompt/Prompt'
// import { COLORS, icons, SIZES } from '../../../constants'

const Welcome = () => {
  const router = useRouter()

  const user = 'Risu'

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello {user}</Text>
        <Text style={styles.welcomeMessage}>Anything you want to talk about?</Text>
      </View>

      <View style={{
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'red'
      }}>
      </View>

      <Prompt />

    </View>
  )
}

export default Welcome