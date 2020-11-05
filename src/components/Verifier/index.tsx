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

import React, {Component} from 'react';
import {View, Platform} from 'react-native';
import {WebView} from 'react-native-webview';
import verfierFile from './verifier.html';
import {verify} from '../../utils/verifier';
//import {getContexts} from '../../services/contexts';

interface VerifierProps {
  callback: (res: {status: string; message: string}) => void;
  credential: unknown;
}

class VerifierComponent extends Component<VerifierProps> {
  webview: WebView | null = null;
  componentDidMount = () => {
    console.log('verifier component mounted');
  };
  handleVerifierResult = async (value: boolean) => {
    const {callback, credential} = this.props;

    if (!value) {
      return callback?.({status: 'RED', message: 'Invalid certa'});
    }

    try {
      const result = await verify(credential);
      console.log('VERIFY:', result);
      callback?.(result);
    } catch (error) {
      callback?.({status: 'ORANGE', message: 'An error ocurred'});
    }
  };
  render() {
    const {credential} = this.props;
    return (
      <View style={{height: 0, width: 0}}>
        <WebView
          ref={(ref) => {
            this.webview = ref;
          }}
          source={Platform.OS === 'ios' ? verfierFile : {uri: 'file:///android_asset/index.html'}}
          originWhitelist={['*']}
          allowFileAccess={true}
          allowUniversalAccessFromFileURLs={true}
          onLoad={() => console.log('verifier.html mounted')}
          onMessage={(event) => {
            const {data} = event.nativeEvent;

            const res = JSON.parse(data);

            console.log(`Res: ${JSON.stringify(res)}`);

            if (res.type === 'ready') {
              console.log('verifier.html ready');
              return this.webview?.postMessage(JSON.stringify({type: 'verify', value: {credential}}));
            }

            if (res.type === 'verified') {
              this.handleVerifierResult(res.value);
            }
          }}
        />
      </View>
    );
  }
}

export default VerifierComponent;
