import { View, Text, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import beachImage from "@/assets/meditation-images/beach.webp";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";

export default function App() {
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          style={{ flex: 1 }}
          colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}
        >
          <SafeAreaView className="flex-1 justify-between mx-5 my-12">
            <View>
              <Text className="text-white font-bold text-4xl text-center tracking-wider">
                SUKOON
              </Text>
              <Text className="text-white font-normal text-2xl text-center tracking-wider">
                Sukoon for Everyone
              </Text>
            </View>
            <View>
              <CustomButton
                onPress={() => console.log("text")}
                title="Get Started"
              />
            </View>
          </SafeAreaView>
        </LinearGradient>
        <StatusBar style="light" />
      </ImageBackground>
    </View>
  );
}
