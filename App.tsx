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

import 'react-native-gesture-handler';
import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTimes, faChevronLeft, faPlus} from '@fortawesome/pro-light-svg-icons';
import SplashScreen from 'react-native-splash-screen';
import Root from './src/navigation/Root';

library.add(faTimes, faChevronLeft, faPlus);

export default class App extends React.Component {
  componentDidMount() {
    this.init();
  }
  init = async () => {
    return SplashScreen.hide();
  };
  render() {
    return <Root />;
  }
}
