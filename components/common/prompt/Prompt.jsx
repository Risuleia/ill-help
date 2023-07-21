import React from "react"
import { View, TextInput, TouchableOpacity, Image } from "react-native"

import { icons } from "../../../constants"
import styles from "./prompt.style"

function Prompt({ prompt, setPrompt, handleClick }) {
    return (
        <>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                    style={styles.searchInput}
                    value={prompt}
                    placeholder='Tell me'
                    onChangeText={(text) => {setPrompt(text)}}
                    />
                </View>
                <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
                    <Image
                    source={icons.chevronRight}
                    resizeMode='contain'
                    style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Prompt

