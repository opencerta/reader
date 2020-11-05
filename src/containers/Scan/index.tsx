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
import {View, StatusBar} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import ScanComponent from '../../components/Scan';
import ScanHeader from '../../components/ScanHeader';
import ScanHelper from '../../components/ScanHelper';
import {DecodeStackParams} from 'src/navigation/DecodeStack';
import styles from './styles';

interface Props extends StackScreenProps<DecodeStackParams, 'Scan'> {}

interface State {
  capture: boolean;
  verifySplash: boolean;
  torch: boolean;
}

class Scan extends React.Component<Props, State> {
  unsubscribeFocus: () => void;
  unsubscribeBlur: () => void;

  constructor(props: Props) {
    super(props);
    this.state = {
      capture: false,
      verifySplash: true,
      torch: false
    };

    this.unsubscribeFocus = this.props.navigation.addListener('focus', () => this.setState({capture: true}));
    this.unsubscribeBlur = this.props.navigation.addListener('blur', () => this.setState({capture: false}));
  }

  componentWillUnmount() {
    this.unsubscribeFocus?.();
    this.unsubscribeBlur?.();
  }

  render() {
    const navigate = this.props.navigation.navigate;

    if (!this.state.capture) {
      return null;
    }

    return (
      <View style={styles.flexContainer}>
        <StatusBar barStyle="dark-content" />
        <ScanComponent
          capture={this.state.capture}
          onCerta={(certa) => navigate('Details', {payload: certa})}
          torch={this.state.torch}>
          {({reset, current, total}) => {
            return (
              <>
                <ScanHeader
                  onSettings={() => navigate('Settings')}
                  flash={this.state.torch}
                  onFlash={() => this.setState((state) => ({torch: !state.torch}))}
                />
                <ScanHelper current={current} total={total} onReset={reset} />
              </>
            );
          }}
        </ScanComponent>
      </View>
    );
  }
}

export default Scan;
