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
import styles from './styles';

type ThemeName = 'normal' | 'invert' | 'RED' | 'ORANGE' | 'GREEN';
interface Props {
  theme?: ThemeName;
}

const green = '#018E42';
const red = '#FF1300';
const orange = '#D19D00';
const blue = '#00407D';
const white = '#FFF';

const getColor = (theme?: ThemeName): string => {
  const colors: {[key in ThemeName]: string} = {
    normal: blue,
    invert: white,
    GREEN: green,
    RED: red,
    ORANGE: orange
  };

  return (theme && colors[theme]) || colors.normal;
};

const SettingsLayout: React.FC<Props> = ({theme, children}) => {
  return <View style={[styles.content, {backgroundColor: getColor(theme)}]}>{children}</View>;
};

export default SettingsLayout;
