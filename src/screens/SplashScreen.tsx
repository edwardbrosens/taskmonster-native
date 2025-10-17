
import React from 'react';
import { View, Text } from 'react-native';

const SplashScreen = () => {
  return (
    <View className="flex-1 justify-center items-center bg-indigo-600">
      <Text className="text-5xl font-bold text-white">Task Monster</Text>
      <Text className="mt-2 text-lg text-indigo-200">Get things done, get rewarded.</Text>
    </View>
  );
};

export default SplashScreen;
