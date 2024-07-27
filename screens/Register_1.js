import { View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {ArrowRightIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

export default function Register_1(){
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, check] = useState('');
    const [password1, setPassword] = useState('');

    return (
        <View className="flex-1 bg-purple-600">
            <View className="bg-black rounded-2xl">
                <SafeAreaView >
                    <View className="flex-row justify-center pt-16">
                        <Image source={require('../assets/images/logo.png')} 
                            style={{width: 200, height: 50}} />
                    </View>
                    <View className="flex-row ml-16 pt-8">
                        <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                            <Text className="font-semibold text-purple-600"> Нэвтрэх</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='pl-32' >
                            <Text className="font-semibold text-purple-600"> Бүртгүүлэх</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>
            <View className="flex-1 bg-purple-600 px-8 pt-8">
                <Text 
                    className="text-white font-bold text-3xl text-center pb-8">
                    Мэдээллээ оруулна уу
                </Text>
                <View className="form space-y-2">
                    <Text className="text-white ml-4">Нэвтрэх нэр</Text>
                    <TextInput
                        className="p-5 bg-gray-100 rounded-2xl mb-3"
                        value={username}
                        onChangeText={value=> setUsername(value)}
                    />
                    <Text className="text-white ml-4">Нууц үг</Text>
                    <TextInput
                        className="p-5 bg-gray-100 rounded-2xl mb-3"
                        value={password}
                        onChangeText={value=> setPassword(value)}
                    />
                    <Text className="text-white ml-4">Нууц үгээ давтах</Text>
                    <TextInput
                        className="p-5 bg-gray-100 rounded-2xl mb-7"
                        secureTextEntry
                        value={password1}
                        onChangeText={value=> check(value)}
                    />
                </View>
                <View className="flex-row justify-end">
                    <TouchableOpacity 
                        onPress={()=> navigation.navigate('Register2')}
                        className="flex justify-center items-center bg-blue-600 rounded-3xl"
                        style={{width: 80, height: 50}}
                    >
                        <ArrowRightIcon size="20" color="white" />
                    </TouchableOpacity>
                </View> 
                <View className="flex-row justify-center mt-7">
                    <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                        <Text className="font-semibold text-purple-600"> Нэвтрэх</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}