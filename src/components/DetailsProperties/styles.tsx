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

import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  subtitleContainer: {
    marginHorizontal: width * 0.01,
    paddingTop: width * 0.05
  },
  subtitle: {
    fontSize: width * 0.035,
    fontWeight: '600',
    color: '#000'
  },
  valueContainer: {
    paddingHorizontal: width * 0.01
  },
  value: {
    fontSize: width * 0.04,
    color: '#555'
  },
  spacer: {
    width: width * 0.8,
    height: 1,
    borderColor: 'rgba(0, 0, 0, .1)',
    borderWidth: 0.5,
    marginTop: width * 0.05
  },
  capitalText: {
    textTransform: 'capitalize'
  }
});

export default styles;
