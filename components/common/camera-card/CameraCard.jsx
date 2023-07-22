import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { Video } from "expo-av"

import styles from "./cameracard.style";
import { icons } from "../../../constants";

// const requestPerm = async () => {
//     let permission = Camera.useCameraPermissions()
//     // let permission = await Camera.getCameraPermissionsAsync()
//     return permission
// }

const startVideo = async () => {
    if (this.camera) {
        let video = await this.camera.recordAsync({ mute: true })
    }
}
const stopVideo = async () => {
    if (this.camera) this.camera.stopRecording()
}

function CameraCard({ turnedOn }) {

    const [type, setType] = useState(CameraType.front)
    const [cameraPermission, requestCameraPermission] = Camera.useCameraPermissions()
    const [audioPermission, requestAudioPermission] = Camera.useMicrophonePermissions()
    
    const permission = {
        camera: cameraPermission,
        audio: audioPermission,
        granted: () => {
            return ((!cameraPermission.granted && !audioPermission.granted) ? false : true)
        }
    }

    useEffect(() => {
        if (permission.granted && turnedOn === true) startVideo()
        else stopVideo()
    }, [])

    if (!permission) {
        requestCameraPermission()
        requestAudioPermission()
    }


    return (
        <View style={ (!permission || !permission.granted || turnedOn === false) ? styles.containerHidden : styles.container }>
            {/* <Video
                source={{
                    localUri: stream ? stream : ''
                }}
                style={styles.camera}
            /> */}
            <Camera
                style={styles.camera}
                type={type}
                useCamera2Api={true}
                ref={ref => { this.camera = ref }}
            />
            <TouchableOpacity style={styles.toggleBtn} onPress={() => setType(type === CameraType.front ? CameraType.back : CameraType.front)}>
                <Image
                    source={icons.cameraSwitch}
                    style={styles.toggleBtnImage}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    )

}

export default CameraCard

