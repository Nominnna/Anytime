import { View, Text, TouchableOpacity } from "react-native";
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen(){
    const navigation = useNavigation();
    return (
        <SafeAreaView className="flex-1 flex-row justify-center items-center">
            <Text className="text-lg">Home Page - </Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')} className="p-1 bg-purple-600 rounded-lg">
                <Text className="text-white text-lg font-bold">Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}