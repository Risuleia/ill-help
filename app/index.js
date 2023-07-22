import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Camera, CameraType } from 'expo-camera'

import { COLORS, icons, SIZES } from "../constants";
import { ScreenHeaderBtn, Welcome, CameraCard } from "../components";

function Home() {

    const router = useRouter()

    const [prompt, setPrompt] = useState('')
    const [turnedOn, setTurnedOn] = useState(false)

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={turnedOn === false ? icons.videoOff : icons.videoOn}
                            dimension='70%'
                            handlePress={() => setTurnedOn(turnedOn === true ? false : true)}
                        />
                    ),
                    headerTitle: "I'll Help",
                }}
            />

            <CameraCard
                turnedOn={turnedOn}
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