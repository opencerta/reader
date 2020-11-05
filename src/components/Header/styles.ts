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
  userTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: width * 0.05,
    paddingHorizontal: width * 0.02,
    width
  },
  welcome: {
    color: '#FFF',
    fontSize: width * 0.065,
    fontWeight: '600',
    paddingBottom: width * 0.05,
    marginLeft: width * 0.05
  },
  usernameContainer: {
    flex: 1,
    paddingHorizontal: width * 0.02
  },
  username: {
    color: '#FFF',
    fontSize: width * 0.04,
    fontWeight: '500',
    textAlign: 'right'
  },
  location: {
    color: '#FFF',
    fontSize: width * 0.03,
    fontWeight: '500',
    textAlign: 'right'
  },
  userImgContainer: {
    width: width * 0.125,
    height: width * 0.125,
    borderRadius: width * 0.125,
    borderColor: '#FFF',
    borderWidth: 2,
    overflow: 'hidden',
    backgroundColor: '#FFF',
    marginRight: width * 0.05
  },
  userImg: {
    width: '100%',
    height: '100%'
  },
  chevron: {
    width: width * 0.075,
    height: width * 0.075,
    resizeMode: 'contain'
  },
  back: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonLabel: {
    color: '#FFF',
    fontSize: width * 0.048,
    fontWeight: '400',
    paddingLeft: width * 0.0
  }
});

export default styles;
