import { useState } from "react";
import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";

function Home() {

    const router = useRouter()

    return(
        <SafeAreaView>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => { return <Text>Hi</Text> },
                    headerTitle: ""
                }}
            />

            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Text>Home</Text>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Home;