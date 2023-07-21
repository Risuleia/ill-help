import React from "react"
import { View, Text } from "react-native"

import { icons } from "../../../constants"
import styles from "./response.style"

function Response() {
    const res = ''

    return (
        <View style={styles.container}>
            <View style={styles.responseWrapper}>
                <Text style={styles.responseText}>{res}</Text>
            </View>
        </View>
    )
}

export default Response

