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
import {createStackNavigator} from '@react-navigation/stack';
import Settings from '../containers/Settings';
import About from '../containers/About';
import Sync from '../containers/Sync';

export type SettingsStackParams = {
  Settings: undefined;
  About: undefined;
  Sync: undefined;
};

const SettingsStackNavigator = createStackNavigator<SettingsStackParams>();

export default function SettingsStack() {
  return (
    <SettingsStackNavigator.Navigator mode="modal">
      <SettingsStackNavigator.Screen name="Settings" component={Settings} options={{headerShown: false}} />
      <SettingsStackNavigator.Screen name="About" component={About} options={{headerShown: false}} />
      <SettingsStackNavigator.Screen name="Sync" component={Sync} options={{headerShown: false}} />
    </SettingsStackNavigator.Navigator>
  );
}
