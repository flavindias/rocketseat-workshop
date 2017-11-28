import React, { Component } from 'react';


import {
  View,
  Text,
  Modal,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class NewRepoModal extends Component {
  state = {
    newRepoText: '',
  };
  render() {
    return (
      <Modal animationType="fade" transparent={true} visible={this.props.visible}>
        <View style={styles.modalContainer}>
          <View style={styles.boxContainer}>
            <Text style={styles.boxTitle}> Adicionar repositório</Text>
            <TextInput
              autoFocus //já vem setado como default
              autoCapitalize="none" //metodo de capitalização de texto
              style={styles.boxInput}
              underlineColorAndroid="rgba(0,0,0,0)" //removendo a linha no android
              placeholder="organização/repositório" //placeholder
              value={this.state.newRepoText}
              onChangeText={newRepoText => this.setState({newRepoText})} // newRepoText: newRepoText, como a entrada é igual a saída não precisa declarar para setar ES6
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]} //por serem dois botões que mudarão só a cor pode-se passar em formato de array os estilos
                onPress={this.props.onCancel}
                >
                  <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.subimitButton]} //por serem dois botões que mudarão só a cor pode-se passar em formato de array os estilos
                  onPress={() => this.props.onAdd(this.state.newRepoText)}
                  >
                    <Text style={styles.buttonText}>Adicionar</Text>
                  </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1, //para ocupar toda a tela
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    width: 280,
  },
  boxTitle:{
    fontWeight: 'bold',
    fontSize: 16,
  },
  boxInput:{
    alignSelf: 'stretch',
    marginTop: 10,
    paddingVertical: 0, //necessário informar pois por padrão o Android seta o padding Vertical
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#DDD',
    height: 40,
    borderRadius: 3,

  },
  buttonContainer: {
    marginTop: 10,
    height: 40,
    flexDirection: 'row', //para ficarem um do lado do outro
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  cancelButton: {
    backgroundColor: '#E25F5F',
    marginRight: 5,

  },
  subimitButton: {
    backgroundColor: '#70bd85',
    marginLeft: 5
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 12,
  }
});
