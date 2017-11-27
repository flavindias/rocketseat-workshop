/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Platform
} from 'react-native';


export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Minicurso GoNative</Text>
        </View>
        <ScrollView contentContainerStyle={styles.repoList}>
          <View style={styles.repo} />
          <View style={styles.repo} />
          <View style={styles.repo} />
          <View style={styles.repo} />
          <View style={styles.repo} />
          <View style={styles.repo} />
          <View style={styles.repo} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  header: {
    height: (Platform.OS === 'ios') ? 70 : 50, //Verificando se está no iOS para dar o padding da statusBar
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#FFF',
    justifyContent: 'center', //Horizontalmente
    alignItems: 'center', //Verticalmente
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  repoList: {
    padding: 20,
  },
  repo: {
    padding: 20,
    backgroundColor: '#FFF',
    height: 120,
    marginBottom: 20,
    borderRadius: 5,
  }
});
