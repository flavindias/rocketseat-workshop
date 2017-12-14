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
  AsyncStorage,
  TouchableOpacity
} from 'react-native';

import Repo from './components/repo';
import NewRepoModal from './components/NewRepoModal';

export default class App extends Component {
  // variável do react que armazena o estado da aplicação e que toda vez que é alterada chama o método render()
  state = {
    modalVisible: false,

    repos: [
      // {
      //   id: 1,
      //   thumbnail: 'https://avatars1.githubusercontent.com/u/6407041?v=4',
      //   title: 'rocketseat.com.br',
      //   author: 'rocketseat',
      // },
      // {
      //   id: 2,
      //   thumbnail: 'https://avatars1.githubusercontent.com/u/6407041?v=4',
      //   title: 'rocketnative.com.br',
      //   author: 'flavindias',
      // },
    ],
  };
  _addRepository = async (newRepoText) => {
    const repoCall = await fetch(`https://api.github.com/repos/${newRepoText}`);
    const response = await repoCall.json();

    const repository = {
      id: response.id,
      thumbnail: response.owner.avatar_url,
      title: response.name,
      author: response.owner.login,
    };

    this.setState({
      modalVisible: false,
      repos: [
        ...this.state.repos,
        repository
      ]
    })
  };

// salvando os dados
  await AsyncStorage.setItem('@Minicurso:repositories', JSON.stringify(this.state.repos)); //@nomedoapp:variavel

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Minicurso GoNative</Text>
          <TouchableOpacity onPress={() => this.setState({
            modalVisible: true
          })}>
            <Text style={styles.headerButton}>+</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.repoList}>

          {/* Mapeando o stado em busca dos repositorios e atribuindo uma chave unica que no caso é o id */}

          {this.state.repos.map(repo =>
            <Repo key={repo.id} data={repo}/>

        )}
        </ScrollView>
        <NewRepoModal
          onAdd={this._addRepository}
        onCancel={() => this.setState({
          modalVisible: false
        })} visible={this.state.modalVisible}/>
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
