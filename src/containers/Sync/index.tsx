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
import {View, TouchableOpacity, ActivityIndicator, TextInput} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import SettingsLayout from '../../components/SettingsLayout';
import {SettingsStackParams} from '../../navigation/SettingsStack';
import Text from '../../components/Text';
import {syncData} from '../../utils/verifier';
import styles from './styles';
import {getRealm} from '../../database';
import {RULES_LIST_SCHEMA_NAME} from '../../database/schemas/RulesListSchema';

const gistUrl = 'a';

interface Props extends StackScreenProps<SettingsStackParams> {}
interface State {
  status: string;
  showStats: boolean;
  rulesUrl: string;
  downloadStats: {
    rules: number;
    rulesTook: number;
  };
  savedRules: number;
}

export default class Sync extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      status: 'init',
      showStats: false,
      rulesUrl: '',
      downloadStats: {
        rules: 0,
        rulesTook: 0
      },
      savedRules: 0
    };
  }
  downloadRules = async (url: string) => {
    this.setState({showStats: true});
    try {
      this.setState({status: 'loading'});
      const downloadStats = await syncData(url);
      this.setState({status: 'loaded', downloadStats});
      await this.getSavedRules();
    } catch (err) {
      this.setState({status: 'failure'});
    }
  };

  getSavedRules = async () => {
    const realm = await getRealm();
    const allRules = realm.objects(RULES_LIST_SCHEMA_NAME);
    console.log(`Found ${allRules.length} while refreshing`);
    allRules.forEach((rule) => {
      console.log(`Rule: ${JSON.stringify(rule)}`);
    });
    this.setState({savedRules: allRules.length});
  };

  deleteRules = async () => {
    const realm = await getRealm();
    const allRules = realm.objects(RULES_LIST_SCHEMA_NAME);
    realm.write(() => {
      console.log(`Deleting ${allRules.length} rules`);
      realm.delete(allRules);
    });
    await this.getSavedRules();
  };

  render() {
    return (
      <SettingsLayout title="App Rules" goBack={() => this.props.navigation.goBack()}>
        <View style={styles.content}>
          <Text style={styles.title}>Download rules from URL</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            placeholder=" Rules URL"
            onChangeText={(text) => {
              this.setState({rulesUrl: text});
            }}
          />
          {/* <Text style={styles.text}>Rules Url: {this.state.rulesUrl}</Text> */}
          <View style={styles.buttonContainer}>
            {this.state.status === 'loading' ? (
              <View style={styles.loading}>
                <ActivityIndicator size="large" color="rgba(0, 0, 0, .2)" />
                <Text style={styles.message}>Sync in progress</Text>
              </View>
            ) : (
              <>
                <TouchableOpacity onPress={() => this.downloadRules(this.state.rulesUrl)}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>DOWNLOAD AND SAVE</Text>
                  </View>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => this.setState((state) => ({showStats: !state.showStats}))}>
                  <Text style={styles.message}>Your sync is up to date</Text>
                </TouchableOpacity> */}
                {this.state.showStats ? (
                  <>
                    <Text
                      style={
                        styles.text
                      }>{`Downloaded rules: ${this.state.downloadStats.rules}\nDownload took: ${this.state.downloadStats.rulesTook} ms`}</Text>
                    <TouchableOpacity onPress={() => this.setState({showStats: false})}>
                      <Text style={styles.message}>Hide download info</Text>
                    </TouchableOpacity>
                  </>
                ) : null}
              </>
            )}
          </View>
        </View>
        <View style={styles.deleteButtonContainer}>
          <TouchableOpacity onPress={() => this.deleteRules()}>
            <View style={styles.deleteButton}>
              <Text style={styles.buttonText}>DELETE RULES</Text>
            </View>
          </TouchableOpacity>
          <>
            <Text style={styles.text}>{`Saved rules: ${this.state.savedRules}`}</Text>
            <TouchableOpacity onPress={() => this.getSavedRules()}>
              <Text style={styles.message}>Refresh</Text>
            </TouchableOpacity>
          </>
        </View>
      </SettingsLayout>
    );
  }
}
