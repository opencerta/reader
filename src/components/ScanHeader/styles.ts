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

import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  ScanHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: width * 0.02,
    width
  },
  iconContainer: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: width * 0.07,
    height: width * 0.07,
    padding: width * 0.03,
    resizeMode: 'contain'
  },
  side: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.2
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
