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
import {View} from 'react-native';
import Text from '../../components/Text';
import {StackScreenProps} from '@react-navigation/stack';
import SettingsLayout from '../../components/SettingsLayout';
import {SettingsStackParams} from 'src/navigation/SettingsStack';
import styles from './styles';

interface Props extends StackScreenProps<SettingsStackParams> {}

const About: React.FC<Props> = ({navigation}) => (
  <SettingsLayout title="About" goBack={() => navigation.goBack()}>
    <View style={styles.content}>
      <Text style={styles.text}>OpenCerta Reader App</Text>

      <Text style={styles.title}>Device Info</Text>
      <Text style={styles.text}>...</Text>

      <Text style={styles.title}>App Version 1.9.9</Text>
    </View>
  </SettingsLayout>
);

export default About;
