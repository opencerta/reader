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
import {View, TouchableOpacity} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import SettingsLayout from '../../components/SettingsLayout';
import {SettingsStackParams} from 'src/navigation/SettingsStack';
import Text from '../../components/Text';
import styles from './styles';

interface Props extends StackScreenProps<SettingsStackParams> {}

const Settings: React.FC<Props> = ({navigation}) => (
  <SettingsLayout title="Settings" goBack={() => navigation.goBack()} invert>
    <View style={styles.content}>
      <TouchableOpacity onPress={() => navigation.navigate('About')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>About / Support</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Sync')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>App Rules</Text>
        </View>
      </TouchableOpacity>
    </View>
  </SettingsLayout>
);

export default Settings;
