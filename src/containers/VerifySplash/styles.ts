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
  safe: {
    flex: 1,
    backgroundColor: 'rgb(49, 44, 253)'
  },
  container: {
    flex: 1,
    padding: width * 0.1,
    alignItems: 'center'
  },

  hi: {
    color: '#FFF',
    fontSize: width * 0.13,
    lineHeight: width * 0.13,
    fontWeight: 'bold',
    width: '100%'
  },
  doctor: {
    color: '#FFF',
    fontSize: width * 0.06,
    fontWeight: '300',
    padding: 0,
    margin: 0,
    lineHeight: width * 0.06,
    width: '100%'
  },
  text: {
    color: '#FFF',
    fontSize: width * 0.04,
    marginTop: width * 0.04,
    width: '100%'
  },
  image: {
    width: width * 0.3,
    height: width * 0.3,
    marginVertical: width * 0.1
  },
  listTitle: {
    color: '#FFF',
    fontSize: width * 0.045,
    fontWeight: '600',
    padding: 0,
    margin: 0,
    width: '100%',
    marginBottom: width * 0.02
  },
  listItem: {
    color: '#FFF',
    fontSize: width * 0.035,
    marginBottom: width * 0.01,
    width: '100%'
  },
  button: {
    backgroundColor: '#FFF',
    width: width * 0.9,
    height: width * 0.12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginTop: width * 0.1
  },
  buttonText: {
    color: 'rgb(49, 44, 253)',
    fontSize: width * 0.04,
    fontWeight: '800'
  }
});

export default styles;
