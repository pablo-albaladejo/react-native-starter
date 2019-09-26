import React from 'react';
import { Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const getIcon = (name, color) => {
  const prefix = Platform.OS === 'ios' ? 'ios' : 'md';
  return <Ionicons name={prefix + '-' + name} size={25} color={color} />;
}
