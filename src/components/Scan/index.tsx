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
import {Vibration, StatusBar} from 'react-native';
import {RNCamera, Barcode} from 'react-native-camera';
import styles from './styles';

export interface Certa {
  uuid: string;
  photo: string;
  vaccine: string;
  batch: string;
  administration: string;
}

interface ScanChildrenProps {
  current: number;
  total: number;
  reset: () => void;
}

interface Props {
  capture: boolean;
  torch?: boolean;
  onCerta: (certa: Certa) => void;
  children(props: ScanChildrenProps): React.ReactNode;
}

interface State {
  current: number;
  total: number;
}

class Scan extends React.Component<Props, State> {
  camera: React.RefObject<RNCamera>;
  data: string[] = [];

  constructor(props: Props) {
    super(props);
    this.camera = React.createRef();
    this.state = {
      current: 0,
      total: 0
    };
  }
  update = (current: number, total: number) => {
    this.setState({current, total});
  };
  componentDidUpdate(props: Props, prevState: State) {
    if (this.state.current !== prevState.current) {
      Vibration.vibrate(1);
    }
  }
  handleBarcode = (barcode: string) => {
    const match = barcode.match(/(\[([0-9]+)\/([0-9]+)\]:)(.+)/);
    if (match) {
      const index = parseInt(match[2], 10);
      const total = parseInt(match[3], 10);
      const data = match[4];

      if (this.data[index]) {
        return;
      }

      this.data[index] = data;

      const current = this.data.filter(Boolean).length;

      this.update(current, total);

      if (current - 1 >= total) {
        try {
          const token = JSON.parse(this.data.join(''));
          this.reset();
          this.props.onCerta(token as Certa);
        } catch (error) {
          this.reset();
        }
      }
    }
  };
  handleGoogleVisionBarcodeEvent = (event: {barcodes: Barcode[]}) => {
    event.barcodes.forEach((e) => this.handleBarcode(e.data));
  };
  reset = () => {
    this.data = [];
    this.setState({current: 0, total: 0});
  };
  render() {
    const {current, total} = this.state;
    if (!this.props.capture) {
      return null;
    }

    return (
      <RNCamera
        flashMode={this.props.torch ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
        style={styles.flexContainer}
        captureAudio={false}
        ref={this.camera}
        onBarCodeRead={(e) => this.handleBarcode(e.data)}>
        <StatusBar barStyle="light-content" />
        {this.props.children?.({current, total, reset: this.reset})}
      </RNCamera>
    );
  }
}

export default Scan;
