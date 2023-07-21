import { useState } from "react";
import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import { Welcome } from "../components";

function Home() {

    const router = useRouter()

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerTitle: "I'll Help",
                }}
            />

            <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{ flex: 1 }}>
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Welcome />
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Home;