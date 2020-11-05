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
import {View, StatusBar, Image, ImageSourcePropType} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import DetailsHeader from '../DetailsHeader';
import ContentBox from '../ContentBox';
import timesImage from '../../../assets/icons/timesCircle.png';
import checkImage from '../../../assets/icons/checkCircle.png';
import reviewImage from '../../../assets/icons/review.png';
import Text from '../Text';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';

interface Props {
  result: {status: 'RED' | 'ORANGE' | 'GREEN'; message: string};
  showStatus?: boolean;
  onSettings?: () => void;
  onClose?: () => void;
  invert?: boolean;
  scrollable: boolean;
}

const green = '#018E42';
const red = '#FF1300';
const orange = '#D19D00';
const white = '#FFF';

const statusMap: Record<string, {color: string; text: string; icon: ImageSourcePropType}> = {
  RED: {color: red, text: 'Denied', icon: timesImage},
  ORANGE: {color: orange, text: 'Review', icon: reviewImage},
  GREEN: {color: green, text: 'Approved', icon: checkImage}
};

const SettingsLayout: React.FC<Props> = ({onSettings, onClose, showStatus, result, children, invert, scrollable}) => {
  return (
    <View style={[styles.flexContainer, {backgroundColor: !invert ? statusMap[result.status]?.color || white : white}]}>
      <View style={[styles.fakeTop, {backgroundColor: invert ? statusMap[result.status]?.color || white : white}]} />
      <ScrollView style={styles.flexContainer} scrollEnabled={scrollable}>
        <StatusBar barStyle={'dark-content'} />
        <DetailsHeader onSettings={onSettings} onClose={onClose} />
        <View style={styles.statusContainer}>
          {showStatus ? (
            <>
              {statusMap[result.status]?.icon ? (
                <Image source={statusMap[result.status]?.icon} style={styles.icon} />
              ) : null}
              <Text style={styles.text}>{statusMap[result.status]?.text || 'Unknown'}</Text>
            </>
          ) : null}
        </View>
        <ContentBox theme={invert ? 'invert' : result.status}>{children}</ContentBox>
      </ScrollView>
    </View>
  );
};

export default SettingsLayout;
