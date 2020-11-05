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

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.65,
    paddingTop: height * 0.028,
    paddingBottom: height * 0.04
  },
  infoText: {
    fontSize: width * 0.045,
    width: width * 0.65,
    fontWeight: '600',
    color: '#FFF',
    textAlign: 'center',
    textTransform: 'capitalize',
    letterSpacing: width * 0.002
  },
  userImageContainer: {
    position: 'relative',
    width: width * 0.65,
    height: height * 0.4,
    marginBottom: width * 0.05
  },
  userImage: {
    width: width * 0.65,
    height: height * 0.4,
    borderRadius: width * 0.05,
    backgroundColor: 'rgba(0, 0, 0, .1)',
    marginBottom: width * 0.05
  },
  buttons: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: width * 0.02,
    paddingBottom: width * 0.08
  },
  icon: {
    width: width * 0.075,
    height: width * 0.075
  },
  iconContainer: {
    padding: width * 0.05,
    paddingBottom: width * 0.05,
    borderRadius: width,
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  },
  wrapper: {
    padding: width * 0.08
  },
  contentContainer: {
    paddingBottom: width * 0.2
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: '500'
  },
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
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  infoIcon: {
    position: 'absolute',
    top: width * 0.04,
    right: width * 0.04,
    width: width * 0.07,
    height: width * 0.07
  },
  spacer: {
    width: width * 0.8,
    height: 1,
    borderColor: 'rgba(0, 0, 0, .1)',
    borderWidth: 0.5,
    marginTop: width * 0.05
  },
  nameOnlyInfo: {
    paddingTop: width * 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'capitalize'
  },
  nameOnlyInfoWrapper: {
    paddingRight: width * 0.05,
    paddingLeft: width * 0.12
  },
  nameOnlyInfoText: {
    fontSize: width * 0.06
  },
  nameOnlyInfoIcon: {
    width: width * 0.07,
    height: width * 0.07
  },
  capitalText: {
    textTransform: 'capitalize'
  }
});

export default styles;
