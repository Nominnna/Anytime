import { View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

export default function Login(){
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View className="flex-1 justify-center bg-purple-600">
            <View className="bg-black rounded-3xl" style={{height: 330}}>
                <SafeAreaView className="flex">
                    <View  className="flex-row justify-center py-16">
                        <Image source={require('../assets/images/logo.png')} 
                        style={{width: 200, height: 50}} />
                    </View>
                    <View className="flex-row ml-16 pt-16 ">
                        <TouchableOpacity>
                            <Text className="font-semibold text-purple-600"> Нэвтрэх</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='pl-32' onPress={()=> navigation.navigate('Register1')}>
                            <Text className="font-semibold text-purple-600"> Бүртгүүлэх</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>
            <View
                className="flex-1 justify-center px-8 pt-8 bg-gradient-to-b from-purple-600 to-black">
                <Text 
                className="text-white font-bold text-4xl text-center pb-16">
                    Тавтай морилно уу
                </Text>
                <View className="form space-y-2">
                    <Text className="text-white ml-4">Нэвтрэх нэр</Text>
                    <TextInput 
                        className="p-5 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                        value={username}
                        onChangeText={value=> setUsername(value)}
                    />
                    <Text className="text-white ml-4">Нууц үг</Text>
                    <TextInput 
                        className="p-5 bg-gray-100 text-gray-700 rounded-2xl"
                        secureTextEntry
                        value={password}
                        onChangeText={value=> setPassword(value)}
                    />
                    <TouchableOpacity className="flex items-end">
                        <Text className="text-purple-600 mb-5">Нууц үгээ мартсан уу?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={()=> navigation.navigate('Home')}
                        className="py-3 bg-purple-600 rounded-xl">
                        <Text className="text-xl font-bold text-center text-white">
                            Нэвтрэх
                        </Text>
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-center mt-7">
                    <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
                        <Text className="font-semibold text-purple-600"> Бүртгүүлэх</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}