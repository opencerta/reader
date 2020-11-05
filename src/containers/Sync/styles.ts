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
    padding: width * 0.08
  },
  title: {
    fontSize: width * 0.042,
    fontWeight: '700',
    marginTop: width * 0.05,
    marginBottom: width * 0.02,
    color: '#000'
  },
  text: {
    fontSize: width * 0.039,
    color: '#555',
    textAlign: 'justify',
    marginTop: width * 0.05
  },
  button: {
    backgroundColor: '#00407D',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: width * 0.04,
    borderRadius: width * 0.03,
    width: width * 0.86
  },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: width * 0.04,
    borderRadius: width * 0.03,
    width: width * 0.86
  },
  buttonText: {
    fontSize: width * 0.05,
    color: '#FFF'
  },
  buttonContainer: {
    paddingTop: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deleteButtonContainer: {
    flex: 1,
    paddingBottom: width * 0.1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  message: {
    color: '#0081FF',
    marginTop: width * 0.03
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  stat: {
    color: '#555',
    fontSize: width * 0.03
  }
});
