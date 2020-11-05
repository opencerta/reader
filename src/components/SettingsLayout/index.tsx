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
import {View, StatusBar} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import HeaderWithTitle from '../HeaderWithTitle';
import styles from './styles';

interface Props {
  invert?: boolean;
  goBack: () => void;
  title: string;
}

const SettingsLayout: React.FC<Props> = ({title, invert, goBack, children}) => {
  return (
    <View style={[styles.container, {backgroundColor: !invert ? '#FFF' : '#00407D'}]}>
      <View style={[styles.fakeTop, {backgroundColor: invert ? '#FFF' : '#00407D'}]} />
      <ScrollView style={styles.flexContainer}>
        <StatusBar barStyle={invert ? 'dark-content' : 'light-content'} />
        <HeaderWithTitle title={title} invert={invert} goBack={goBack} />
        <View style={[styles.content, {backgroundColor: invert ? '#00407D' : '#FFF'}]}>{children}</View>
      </ScrollView>
    </View>
  );
};

export default SettingsLayout;
