import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

export default function Start(){
    const navigation = useNavigation();
    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-1 flex justify-center items-center my-4">
            <Text 
                className="text-white font-bold text-4xl text-center pb-16 m-8">
                Танилцахад таатай байна
            </Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                <View className="flex-row">
                    <Image source={require("../assets/images/logo.png")}
                        style={{width: 300, height: 80}} 
                    />
                </View>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}