
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <View className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <Text className="text-3xl font-bold text-center text-gray-900">Sign Up</Text>
        <View className="space-y-6">
          <View>
            <Text className="text-sm font-medium text-gray-700">Full name</Text>
            <TextInput
              className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              autoCapitalize="words"
            />
          </View>
          <View>
            <Text className="text-sm font-medium text-gray-700">Email address</Text>
            <TextInput
              className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View>
            <Text className="text-sm font-medium text-gray-700">Password</Text>
            <TextInput
              className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              secureTextEntry
            />
          </View>
          <View>
            <TouchableOpacity 
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onPress={() => navigation.navigate('Home')}
            >
              <Text className="text-white text-center">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row justify-center">
          <Text className="text-sm text-center text-gray-600">Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text className="font-medium text-indigo-600 hover:text-indigo-500">Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
