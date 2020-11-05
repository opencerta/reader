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
import {SafeAreaView} from 'react-native-safe-area-context';
import flashImage from '../../../assets/icons/action.png';
import cogImage from '../../../assets/icons/settings.png';
import styles from './styles';

interface Props {
  onSettings: () => void;
  onFlash?: () => void;
  flash: boolean;
}

const ScanHeader: React.FC<Props> = ({onSettings, onFlash, flash}) => (
  <SafeAreaView>
    <View style={styles.ScanHeader}>
      <View style={styles.side}>
        <TouchableOpacity onPress={onSettings}>
          <View style={styles.iconContainer}>
            <Image source={cogImage} style={styles.icon} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.center} />
      <View style={styles.side}>
        {onFlash ? (
          <TouchableOpacity onPress={onFlash}>
            <View style={[styles.iconContainer, {backgroundColor: flash ? 'rgba(255, 255, 100, .3)' : 'transparent'}]}>
              <Image source={flashImage} style={styles.icon} />
            </View>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  </SafeAreaView>
);

export default ScanHeader;
