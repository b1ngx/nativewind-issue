/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import './global.css';

function App(): React.JSX.Element {
  return (
    <SafeAreaView className="bg-white">
      <View className="justify-center items-center">
        <Text className="text-lg font-bold">Hello</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
