import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import Prompt from '../../common/prompt/Prompt'
import Response from '../../common/response/Response'
// import { COLORS, icons, SIZES } from '../../../constants'

const Welcome = ({ prompt, setPrompt, handleClick }) => {
  const router = useRouter()

  const user = 'Risu'

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello {user}</Text>
        <Text style={styles.welcomeMessage}>Anything you want to talk about?</Text>
      </View>

      <Response />

      <Prompt
        prompt={prompt}
        setPrompt={setPrompt}
        handleClick={handleClick}
      />

    </View>
  )
}

export default Welcome