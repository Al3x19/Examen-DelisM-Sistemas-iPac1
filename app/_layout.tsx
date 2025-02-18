import { View, StatusBar } from 'react-native';
import React from 'react';
import { Slot } from 'expo-router';
import globalStyles from '@/styles/global-Styles';

const _layout = () => {
  return (
    <View style={globalStyles.background}>
      <Slot />
      {/* Utiliza 'barStyle' en lugar de 'style' */}
      <StatusBar barStyle="light-content" />
    </View>
  );
};

export default _layout;
