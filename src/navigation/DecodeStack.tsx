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
import Scan from '../containers/Scan';
import Details from '../containers/Details';
import {Certa} from '../types';

export type DecodeStackParams = {
  Scan: {};
  Details: {payload: Certa};
  Settings: undefined;
};

const DecodeStackNavigator = createStackNavigator<DecodeStackParams>();

export default function DecodeStack() {
  return (
    <DecodeStackNavigator.Navigator mode="modal">
      <DecodeStackNavigator.Screen name="Scan" component={Scan} options={{headerShown: false}} />
      <DecodeStackNavigator.Screen name="Details" component={Details} options={{headerShown: false}} />
    </DecodeStackNavigator.Navigator>
  );
}
