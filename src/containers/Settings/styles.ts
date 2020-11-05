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

export default StyleSheet.create({
  flexContainer: { flex: 1, backgroundColor: '#FFF' },
  safearea: { flex: 1 },
  content: {
    paddingHorizontal: width * 0.05,
    paddingTop: width * 0.05
  },
  button: {
    paddingVertical: width * 0.05,
    paddingHorizontal: width * 0.08,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, .3)'
  },
  buttonText: {
    color: '#FFF',
    fontSize: width * 0.06,
    fontWeight: '300'
  }
});
