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

export default StyleSheet.create({
  flexContainer: {flex: 1},
  helperContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: width * 0.1
  },
  helper: {
    width: width * 0.14,
    height: width * 0.14,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  helperBox: {
    width: width * 0.05,
    height: width * 0.05,
    backgroundColor: 'gray',
    margin: width * 0.005
  },
  helperBoxActive: {
    backgroundColor: 'transparent'
  },
  crossContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cross: {
    width: width * 0.9,
    height: width * 0.9
  }
});
