
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const TaskItem = ({ task, points, due }) => (
  <View className="flex-row justify-between items-center bg-white p-4 rounded-lg shadow-sm">
    <View>
      <Text className="text-lg font-medium text-gray-800">{task}</Text>
      <Text className="text-sm text-gray-600">{due}</Text>
    </View>
    <View className="flex-row items-center space-x-2">
      <Text className="text-xs font-semibold text-green-800 bg-green-200 px-2 py-1 rounded-full">{points} points</Text>
      <TouchableOpacity>
        <Feather name="check-circle" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  </View>
);

const RewardItem = ({ reward, points }) => (
  <View className="flex-row justify-between items-center bg-white p-4 rounded-lg shadow-sm">
    <View>
      <Text className="text-lg font-medium text-gray-800">{reward}</Text>
      <Text className="text-sm text-gray-600">{points} points</Text>
    </View>
    <TouchableOpacity className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
      <Text className="text-white">Redeem</Text>
    </TouchableOpacity>
  </View>
);

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView className="bg-gray-100">
      <View className="container mx-auto px-4 py-8">
        <View className="flex-row justify-between items-center">
          <Text className="text-3xl font-bold text-gray-900">Task Monster</Text>
          <View className="flex-row items-center space-x-4">
            <TouchableOpacity>
              <Feather name="bell" size={24} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="settings" size={24} color="gray" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-8">
          <View className="p-6 bg-white rounded-lg shadow-md">
            <View className="flex-row justify-between items-center">
              <Text className="text-2xl font-bold text-gray-900">My Tasks</Text>
              <TouchableOpacity className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700" onPress={() => navigation.navigate('CreateNewTask')}>
                <Text className="text-white">New Task</Text>
              </TouchableOpacity>
            </View>
            <View className="mt-4 space-y-4">
              <TaskItem task="Clean my room" due="Due: Today" points={10} />
              <TaskItem task="Do my homework" due="Due: Tomorrow" points={15} />
            </View>
          </View>

          <View className="p-6 bg-white rounded-lg shadow-md mt-6">
            <Text className="text-2xl font-bold text-gray-900">My Rewards</Text>
            <View className="mt-4 space-y-4">
              <RewardItem reward="1 hour of screen time" points={50} />
              <RewardItem reward="New video game" points={500} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
