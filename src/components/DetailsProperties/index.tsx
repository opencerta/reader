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
import Text from '../Text';
import styles from './styles';

interface Props {
  properties: {label: string; value: string; capital?: boolean; id?: string}[];
}

const {spacer, subtitle, subtitleContainer, value, valueContainer, capitalText} = styles;

const DetailsProperties: React.FC<Props> = ({properties}) => {
  return (
    <React.Fragment>
      {properties.map((item) =>
        item.value === 'spacer' ? (
          <View style={spacer} key={item.id} />
        ) : !item.value ? null : (
          <React.Fragment key={item.id}>
            <View style={subtitleContainer}>
              <Text style={subtitle}>{item.label}</Text>
            </View>
            <View style={valueContainer}>
              <Text style={[value, item.capital ? capitalText : null]}>{item.value}</Text>
            </View>
          </React.Fragment>
        )
      )}
    </React.Fragment>
  );
};

export default DetailsProperties;
