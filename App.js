import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import React, { Component } from 'react';

import api from './src/services/api';
import Intro from './components/intro';
import LayoutDestinos from './src/pages/layoutDestinos';
import Header from './components/Header';

export default class App extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      destinos: []
    }
  }

  
  async componentDidMount() {
    const response = await api.get('/destinos');
    this.setState({
      destinos: response.data 
    })
  
  }

  render() {
    return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Intro /> 
      <FlatList style={styles.fl}
                data={this.state.destinos}
                keyExtractor={(item) => item.id}
                renderItem= {({item}) => <LayoutDestinos data={item}/>}
      />
    </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  fl: {
    backgroundColor: '#e6f2ee',
    
    
  }
  
  
});
