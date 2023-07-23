import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Camera, CameraType } from "expo-camera";

import styles from "./cameracard.style";
import { icons } from "../../../constants";

function CameraCard() {

    const [type, setType] = useState(CameraType.front)
    
    return (
            <View style={styles.container}>
                    <TouchableOpacity style={styles.toggleBtn} onPress={() => setType(type === CameraType.front ? CameraType.back : CameraType.front)}>
                        <Image
                            source={icons.cameraSwitch}
                            style={styles.toggleBtnImage}
                            resizeMode="contain"
                            />
                    </TouchableOpacity>
                    <Camera
                        style={styles.camera}
                        type={type}
                        useCamera2Api={true}
                        ref={ref => { this.camera = ref }}
                        ratio="1:1"
                    />
            </View>
    )
}
        
export default CameraCard