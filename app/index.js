import { useState } from "react";
import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Camera } from "react-native-vision-camera";

import { COLORS, icons, images, SIZES } from "../constants";
import { ScreenHeaderBtn, Welcome } from "../components";

async function Home() {

    const cameraPermission = await Camera.getCameraPermissionStatus()
    console.log(cameraPermission)

    const router = useRouter()

    const [prompt, setPrompt] = useState('')

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.videoOff}
                            dimension='70%'
                            handlePress={() => {}}
                        />
                    ),
                    headerTitle: "I'll Help",
                }}
            />

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