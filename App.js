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
  Platform,
  TouchableOpacity
} from 'react-native';

import Repo from './components/repo';
export default class App extends Component {
  // variável do react que armazena o estado da aplicação e que toda vez que é alterada chama o método render()
  state = {
    repos: [
      {
        id: 1,
        thumbnail: 'https://avatars1.githubusercontent.com/u/6407041?v=4',
        title: 'rocketseat.com.br',
        author: 'rocketseat',
      },
      {
        id: 2,
        thumbnail: 'https://avatars1.githubusercontent.com/u/6407041?v=4',
        title: 'rocketnative.com.br',
        author: 'flavindias',
      },
    ],
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Minicurso GoNative</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.headerButton}>+</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.repoList}>

          {/* Mapeando o stado em busca dos repositorios e atribuindo uma chave unica que no caso é o id */}

          {this.state.repos.map(repo =>
            <Repo key={repo.id} data={repo}/>

        )}
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
    flexDirection: 'row', //impedindo dos itens ficarem um embaixo do outro
    justifyContent: 'space-between', //Horizontalmente espaçado deixando um de um lado o outro do outro
    alignItems: 'center', //Verticalmente
    paddingHorizontal: 20,

  },
  headerButton: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  repoList: {
    padding: 20,
  },

});
