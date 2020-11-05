// @opencerta/essentials
// Copyright (C) 2020 OpenCerta
//
// This library is free software; you can redistribute it and/or
// modify it under the terms of the GNU Lesser General Public
// License as published by the Free Software Foundation; either
// version 3.0 of the License, or (at your option) any later version.
//
// This library is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
// Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public
// License along with this library; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DecodeStack from './DecodeStack';
import SettingsStack from './SettingsStack';

export type RootStackParamList = {
  Decode: {};
  Settings: {};
};

const RootStack = createStackNavigator<RootStackParamList>();

export default function RootNavigation() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="Decode" component={DecodeStack} options={{headerShown: false}} />
          <RootStack.Screen name="Settings" component={SettingsStack} options={{headerShown: false}} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
