import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Camera } from "expo-camera";

import { COLORS, icons, SIZES } from "../constants";
import { ScreenHeaderBtn, Welcome, CameraCard } from "../components";

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
    
    const [prompt, setPrompt] = useState('')
    const [turnedOn, setTurnedOn] = useState(false)
    
    const showCamera = (permission, turnedOn) => {
        if (permission.granted() && turnedOn) return <CameraCard />
    }
    const setCamera = () => {
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
                            dimension='65%'
                            handlePress={setCamera}
                            state={!permission.granted() ? false : (turnedOn === true ? true : false)}
                        />
                    ),
                    headerTitle: "I'll Help",
                }}
            />

            {showCamera(permission, turnedOn)}

            <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{ flex: 1 }}>
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Welcome
                        prompt={prompt}
                        setPrompt={setPrompt}
                        handleClick={() => setPrompt('')}
                    />
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Home;