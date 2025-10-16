
import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-[#F8F7FF]">
      <View className="flex-1 justify-center items-center">
        <Image
          source={{
            uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJejuwf2ozOMQdGn4c9QTPLaotEnO-2OmP_LexAPPiKVtqddMCRvkzyM2MENxVI-eMLYf9s1EOw8A7xFgCscqIUeOIPVhBpJB-DmsEQ8luMNOGTf7eiSDaMPsfZII_rCX3SCBaiUQvn5xFzP4ws84oaUWJ24KEPRNUVQzO569UZ7HPEH8m6N5LaZ9byxxjqYNs7vwxh1P62juZ9RwXWgUZDIJ6mHjBiJ2WjLj11SGlBezAA2wlKH1EdbvUo9CSFL2FDp9IWXB0wA',
          }}
          className="w-full h-64 object-contain"
        />
        <Text className="text-4xl font-extrabold text-[#272848] leading-tight mt-8">
          Welcome to <Text className="text-[#6D5FFD]">Task Monster</Text>
        </Text>
        <Text className="mt-4 text-[#272848]/70 text-lg">
          The fun way to conquer your day and earn rewards.
        </Text>
      </View>
      <View className="px-6 pb-8">
        <TouchableOpacity className="w-full bg-[#6D5FFD] text-white font-bold py-4 px-6 rounded-2xl text-lg shadow-lg" onPress={() => navigation.navigate('SignUp')}>
          <Text className="text-white text-center font-bold">Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-full bg-[#6D5FFD]/10 text-[#6D5FFD] font-semibold py-4 px-6 rounded-2xl text-lg mt-4" onPress={() => navigation.navigate('SignIn')}>
          <Text className="text-[#6D5FFD] text-center font-bold">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-full bg-transparent text-text-color/60 font-semibold py-3 px-6 rounded-2xl text-base mt-2" onPress={() => navigation.navigate('Home')}>
          <Text className="text-[#272848]/60 text-center font-semibold">I want to try first</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
