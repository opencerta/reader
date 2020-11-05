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
import {View, Image, SafeAreaView, Modal, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import scanImg from '../../../assets/images/scanSplash.png';
import Text from '../../components/Text';
import styles from './styles';

interface State {
  verifySplash: boolean;
}

export default class VerifySlash extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      verifySplash: true
    };

    this.getData();
  }
  storeData = async () => {
    try {
      this.setState({verifySplash: true});
      await AsyncStorage.setItem('verifySplash', 'true');
    } catch (e) {
      this.setState({verifySplash: true});
    }
  };
  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('verifySplash');
      this.setState({verifySplash: !!value});
    } catch (e) {
      this.setState({verifySplash: true});
    }
  };
  render() {
    return (
      <Modal visible={!this.state.verifySplash} animated>
        <SafeAreaView style={styles.safe}>
          <View style={styles.container}>
            <Text style={styles.hi}>Hi</Text>
            <Text style={styles.doctor}>Doctor</Text>
            <Text style={styles.text}>
              If you have 2 phones, you can go straight to scan below. If not, then either print it, or share it to your
              computer.
            </Text>
            <Image source={scanImg} style={styles.image} />
            <Text style={styles.listTitle}>To scan a CDHC:</Text>
            <Text style={styles.listItem}>1.- Press the scan icon</Text>
            <Text style={styles.listItem}>2.- Give camera access permissions (first use only)</Text>
            <Text style={styles.listItem}>3.- Slowly place each QR code in the camera</Text>
            <Text style={styles.listItem}>4.- the CDHC will be deciphered</Text>
            <TouchableOpacity onPress={this.storeData}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    );
  }
}
