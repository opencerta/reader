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
import {View, Image, TouchableOpacity, Modal, ActivityIndicator} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import DetailsLayout from '../../components/DetailsLayout';
import scanImage from '../../../assets/icons/scan.png';
import infoImage from '../../../assets/icons/info.png';
import {DecodeStackParams} from '../../navigation/DecodeStack';
import Verifier from '../../components/Verifier';
import {parseVC} from '../../utils/parseVC';
import Text from '../../components/Text';
import styles from './styles';
import DetailsProperties from '../../components/DetailsProperties';
import ButtonWithIcon from '../../components/ButtonWithIcon';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';

interface Props {
  navigation: StackNavigationProp<DecodeStackParams, 'Details'>;
  route: object;
}

interface State {
  view: string;
  result: {status: string; message: string} | null;
}

const statusMap: Record<string, string> = {
  RED: 'Not valid',
  ORANGE: 'Review',
  GREEN: 'Valid'
};

export default class Details extends React.Component<Props, State> {
  state = {view: 'init', result: null};
  handleVerifierResult = (result: {status: string; message: string}) => {
    this.setState({result});
  };
  render() {
    const {result} = this.state;
    const {navigate} = this.props.navigation;
    const credential = this.props.route.params.payload;
    const data = parseVC(this.props.route.params.payload);
    const {
      patientPhoto,
      vaccine,
      vaccineCode,
      patientName,
      patientFamily,
      practitionerPrefix,
      practitionerName,
      practitionerFamily,
      organization,
      patientGender,
      country
    } = data;

    if (!result) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#999" />
          <Verifier credential={credential} callback={this.handleVerifierResult} />
        </View>
      );
    }

    return (
      <DetailsLayout result={result} showStatus={true} onSettings={() => navigate('Settings')}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.info} activeOpacity={0.8} onPress={() => this.setState({view: 'details'})}>
            {patientPhoto ? (
              <View style={styles.info}>
                <View style={styles.userImageContainer}>
                  <Image source={{uri: 'data:image/png;base64,' + patientPhoto}} style={styles.userImage} />
                  <Image source={infoImage} style={styles.infoIcon} />
                </View>
                <Text style={styles.infoText}>{patientName}</Text>
                <Text style={styles.infoText}>{patientFamily}</Text>
              </View>
            ) : (
              <View style={styles.nameOnlyInfo}>
                <View style={styles.nameOnlyInfoWrapper}>
                  <Text style={[styles.infoText, styles.nameOnlyInfoText]}>{patientName}</Text>
                  <Text style={[styles.infoText, styles.nameOnlyInfoText]}>{patientFamily}</Text>
                </View>
                <Image source={infoImage} style={styles.nameOnlyInfoIcon} />
              </View>
            )}
          </TouchableOpacity>

          <SafeAreaView style={styles.buttons} edges={['bottom']}>
            <ButtonWithIcon icon={scanImage} onPress={() => navigate('Scan')} />
          </SafeAreaView>
        </View>

        <Modal visible={this.state.view === 'details'} animated>
          <DetailsLayout result={result} invert onClose={() => this.setState({view: 'init'})} scrollable>
            <View style={styles.wrapper}>
              <Text style={styles.title}>Certa details</Text>
              <DetailsProperties
                properties={[
                  {label: 'Given Name', value: patientName, capital: true, id: 'gName'},
                  {label: 'Surname', value: patientFamily, capital: true, id: 'sName'},
                  {label: 'Gender', value: patientGender, capital: true, id: 'gender'},
                  {label: '', value: 'spacer', id: 'spacer1'},
                  {label: 'Status', value: statusMap[result.status], capital: true, id: 'status'},
                  {
                    label: 'Issued by',
                    value: practitionerPrefix
                      ? `${practitionerPrefix} ${practitionerName} ${practitionerFamily}`
                      : null,
                    capital: true,
                    id: 'isuuedBy'
                  },
                  {label: 'Organization', value: organization, capital: true, id: 'org'},
                  {label: 'Country of issuance', value: country, id: 'country'},
                  {label: '', value: 'spacer', id: 'spacer2'},
                  {label: 'Vaccine', value: vaccine, id: 'vaccine'},
                  {label: 'Trade name', value: vaccineCode, id: 'tName'}
                ]}
              />
            </View>
          </DetailsLayout>
        </Modal>
      </DetailsLayout>
    );
  }
}
