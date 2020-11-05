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
import {View, Image, TouchableOpacity} from 'react-native';
import cross from '../../../assets/icons/cross.png';
import refresh from '../../../assets/icons/refresh.png';
import Text from '../Text';
import styles from './styles';

interface Props {
  current?: number;
  total?: number;
  onReset: () => void;
}

const ScanHelper: React.FC<Props> = ({current, total, onReset}) => (
  <View style={styles.helperContainer}>
    <View style={styles.counterContainer}>
      {current ? (
        <Text style={styles.counter}>
          Scanning {current} / {Number(total) + 1}
        </Text>
      ) : null}
    </View>

    <View style={styles.crossContainer}>
      <Image source={cross} style={styles.cross} />
    </View>

    <TouchableOpacity onPress={onReset}>
      <View style={styles.resetIconContainer}>
        <Image source={refresh} style={styles.resetIcon} />
      </View>
    </TouchableOpacity>
  </View>
);

export default ScanHelper;
