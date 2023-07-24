import 'react-native-url-polyfill/auto'
import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Camera } from "expo-camera";

import { COLORS, icons, SIZES } from "../constants";
import { ScreenHeaderBtn, Welcome } from "../components";

console.reportErrorsAsExceptions = false;

function Home() {

    const [cameraPermission, requestCameraPermission] = Camera.useCameraPermissions()
    const [audioPermission, requestAudioPermission] = Camera.useMicrophonePermissions()

    // if (!cameraPermission || !audioPermission) {
    //     requestCameraPermission()
    //     requestAudioPermission()
    // }
    
    const permission = {
        granted: () => {
            return ((!cameraPermission || !audioPermission || !cameraPermission?.granted || !audioPermission?.granted) ? false : true)
        }
    }
    
    const router = useRouter()
    
    const [turnedOn, setTurnedOn] = useState(false)

    const setupCamera = () => {
        if (!permission.granted()) {
            requestAudioPermission()
            requestCameraPermission()
        }
        setTurnedOn(!permission.granted() ? false : (turnedOn === true ? false : true))
    }

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={!permission.granted() ? icons.videoOff : (turnedOn === true ? icons.videoOn : icons.videoOff)}
                            dimension={turnedOn === false ? '65%' : '62%'}
                            handlePress={setupCamera}
                            state={!permission.granted() ? false : (turnedOn === true ? true : false)}
                        />
                    ),
                    headerTitle: "I'll Help",
                }}
            />

            {/* {showCamera(permission, turnedOn)} */}
            <View style={{ flex: 1, padding: SIZES.medium }}>
                <Welcome
                    permission={permission}
                    turnedOn={turnedOn}
                />
            </View>

            {/* <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{ flex: 1 }}>
            </ScrollView> */}

        </SafeAreaView>
    )
}

export default Home;