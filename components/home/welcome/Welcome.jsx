import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const Welcome = () => {
  const router = useRouter()

  const user = 'Risu'

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello {user}!</Text>
        <Text style={styles.welcomeMessage}>Anything you wanna talk about?</Text>
      </View>

      <View styles={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=''
            onChange={() => {}}
            placeholder='Tell me'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
            <Image source={icons.chevronRight} resizeMode='contain' style={styles.searchBtnImage} />
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default Welcome