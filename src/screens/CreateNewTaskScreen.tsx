
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';

const CreateNewTaskScreen = ({ navigation }) => {
  const icons = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDIkpn6UmSgeIlGWzIp7_jRPZFz23XuuGJ_FZoRlQtgP233SIE4PZd_T7yoHxu0KhyUhjDFMbHXeXHoGC6v43JKr8g0VXcQYkefK4eWN-yjSvXS1ouCekK3X4_xJIeEfB0RiEAzX2juO-ncFDL9QPN8KvTdB61ZTheg3pk81LSeQvbsXWh2ty7AnipuOeCBH5uWMPi2LeAixZne_Jvosq79_OYPrcEKLn7niy_pMfAL-khMPgEdOEmQTzBkvAsdbc1qNqeyqYhWiw',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBjWUKCtQbhJ8AEteMazGOmHhjbYpUrGJdIdZb-87fUNOOwZwXE3vU7R2Ytkg4LXREFTLPG_uFosR9kmqLxpCGtD5N_l3aDOzR8NX4MbxJ90Rn9B147sYopthSv9iaCHcNuTUsHaZV-PxqD2TjTfXWd9rZjlFnAik61vs3BTejDWqDLsCuw2IJZm1CaVZw-TK8nkpWUA3tyskl6WJIjbLRZw9_Cz8T6yQL75ZeXhnhseqLx0e6QyGwvD8scDTedrqXKPDtJSMt9Ug',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDV_fdvx_HGP-4q9HjOvI_PYAs9u10zZreXToCNDCF15AjX8qwqqxKEVd9SjifzJhLCosHFd6QOCtvaCMHaAZPwcGvXNVyAM-lKy9oapIrWSkHbJ50Y61RwiSSo0q8L0zzn2x-FymNvElTOg6mSrofZNP7ixpZKH_V1KchCDBcuyjIEnDeQDX6bZr5aA4uv8D3T4TITbuI1WGqESzhtBy8Vu6MIwtWc4H-H3t43D4JOlVWgqrxsdi-Y3PYaXjjyZwPm6R6zd63efg',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAXRvlTitaO213btolL6AnmmgKpGqk-gIHU-Yr9A4xlBD63KYcwOb29KE-r2CF-ZapBTRTX3viA8Bl9et3OA25CJOsZKrEpoJvn6dClfliNdhaq6ZgW24v1CTnj0Z4NKlSNnobmbbD05iBNXvb1Cdic9Fqxg_g-Mpg9C-WZRA9p1bYCqbTnC6KQouU-OqoPmQFICD-c-pKqF32RafB9mkUhlSkiXiyFDSPXFITs3rzVBpv_Zp2Ha0lFxF88iWuXS7JkyeMWe0QkKw',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDssKWSGVEGhO_v-BKOiL0TyjI9ZyqV8s1DAzWy7QBVXOikQRB01t9ftDiD_ffWWONSIXlAMkfpJvqGodc8vTZOi9j3j6OhDJIxHU1xwORH9SMiSKMqsp5nzcfvvJTqTbiKsHNwSD7piQeuw7ZuTE5BUaR6VYa3WZfqi9ZqrkU-xQ7VsiKMN6iqTTUAnaiR0TlN_SFlTaPdGGCiMb7-m-bIwUXYPAb6MFGmtnpe-vLIN6TLbcOGq4FDatYcelX7Ae3-wMzG3-cmyg',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuApyWLw1CycEtrsP2XCqIRYe_3eaxx1ifz6dLdyAr52JXRgsU6bbd6g0oSu7bmy77R-IDU77IgXpWpOULdCePQltH3g_HwEqXrbieXrywAlk6vEJ3KHbunJgdIi6qo983eGJ-SOubaY2kO9imv1GLQA7ZknX7p0Qfw0CGPghQOhmwwRlEVhVFpA0xvwmTiZpM4qrm0Ul61rL32Vo3WpjtZFwBE4fWFe2L9WmCMgZHz5pKdsTCIEAbBhveYev6YFOSz6Ph-vEbtyiA',
  ];
  const [selectedIcon, setSelectedIcon] = React.useState(icons[0]);

  return (
    <View className="flex-1 bg-background-light dark:bg-background-dark">
      <View className="flex-row items-center justify-between p-4 bg-background-light dark:bg-background-dark">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="x" size={24} color="gray" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-gray-900 dark:text-white flex-1 text-center">New Task</Text>
        <View className="w-6" />
      </View>
      <ScrollView className="flex-1 p-4" contentContainerClassName="space-y-6 pb-4">
        <TextInput
          className="w-full rounded-lg border-none bg-background-light/50 dark:bg-background-dark/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 p-4 h-14"
          placeholder="Task Name"
        />
        <TextInput
          className="w-full rounded-lg border-none bg-background-light/50 dark:bg-background-dark/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 p-4"
          placeholder="Description"
          multiline
          rows={4}
        />
        <View className="space-y-2">
          <Text className="text-base font-bold text-gray-900 dark:text-white">Due Date</Text>
          {/* Implement custom picker later */}
          <View className="w-full rounded-lg bg-background-light/50 dark:bg-background-dark/50 p-4 h-14 justify-center">
            <Text className="text-gray-900 dark:text-white">Daily</Text>
          </View>
        </View>
        <View className="space-y-2">
          <Text className="text-base font-bold text-gray-900 dark:text-white">Assign To</Text>
          {/* Implement custom picker later */}
          <View className="w-full rounded-lg bg-background-light/50 dark:bg-background-dark/50 p-4 h-14 justify-center">
            <Text className="text-gray-900 dark:text-white">Alex</Text>
          </View>
        </View>
        <View className="space-y-2">
          <Text className="text-base font-bold text-gray-900 dark:text-white">Icon</Text>
          <View className="grid grid-cols-3 gap-4">
            {icons.map((iconUrl) => (
              <TouchableOpacity key={iconUrl} onPress={() => setSelectedIcon(iconUrl)} className="relative">
                <ImageBackground
                  source={{ uri: iconUrl }}
                  className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-xl"
                  imageStyle={{ borderRadius: 12 }}
                >
                  {selectedIcon === iconUrl && (
                    <View className="absolute inset-0 bg-primary/80 rounded-xl flex items-center justify-center">
                      <Feather name="check-circle" size={32} color="white" />
                    </View>
                  )}
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      <View className="p-4 bg-background-light dark:bg-background-dark">
        <TouchableOpacity className="w-full h-12 px-5 bg-primary text-white text-base font-bold rounded-xl flex items-center justify-center">
          <Text className="text-white font-bold">Create Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateNewTaskScreen;
