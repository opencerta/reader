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
import {View, TouchableOpacity, Dimensions} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Text from '../Text';
import styles from './styles';

interface Props {
  goBack: () => void;
  invert?: boolean;
  title: string;
}

const {width} = Dimensions.get('window');

const UserTop: React.FC<Props> = ({title, goBack, invert}) => {
  return (
    <View style={styles.userTop}>
      <View style={styles.side}>
        <TouchableOpacity onPress={goBack}>
          <View style={styles.back}>
            <FontAwesomeIcon icon={['fal', 'chevron-left']} color={invert ? '#00407D' : '#FFF'} size={width * 0.07} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.center}>
        <Text style={[styles.title, {color: invert ? '#000' : '#FFF'}]}>{title}</Text>
      </View>
      <View style={styles.side} />
    </View>
  );
};

export default UserTop;
