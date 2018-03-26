import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, Button, TextInput, View
} from 'react-native';
export default class PrakiraanCuaca extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kota: '',
      forecast:{
        main: '-',
        description: '-',
        temp: 0
      }
    };
  }

getWeather= () => {
let url = 'http://api.openweathermap.org/data/2.5/weather?q='+ this.state.kota +'&appid=b5858650bc90c860c120bd6ea4660f23&units=metric';
fetch (url)
.then ((response) => response.json())
.then((responseJson) => {
            //console.log(responseJson);
            this.setState({
              forecast: {
                main: responseJson.weather[0].main,
                description: responseJson.weather[0].description,
                temp: responseJson.main.temp
              }
            });
          });
        }

  render() {
    return (
    <View style={styles.containerMain}>

      <View style={styles.Header}>
          <Text style={{ textAlign: 'center', padding: 30, fontSize: 25, color: '#E8F5E9'}} >Ramalan Cuaca</Text>
      </View>

      <View style={styles.boxInput}>
          <Text style={{ textAlign: 'center', padding: 3, fontSize: 20 , color: '#E8F5E9'}}>Masukan Nama Kota</Text>
          
          <View style={styles.textBoxStyle}>
          <TextInput style = {{height: 50}}
              placeholder="Masukkan Nama Kota"
              onChangeText={(kota)=>this.setState({kota})}
          />
          </View>

          <View style={styles.buttonStyle}>
          <Button
              onPress={
                () => this.getWeather()
              }
              title="Lihat"
              color="#00BCD4"
              accessibilityLabel="Klik untuk melihat"
            />
          </View>
      </View>

      
      <View style={styles.boxOutput}>
        <Text style = {{padding: 10, fontSize: 20, color: 'white'}} >
          Kota : {this.state.kota} {"\n"}
          Cuaca : {this.state.forecast.main} {"\n"}
          Deskripsi : {this.state.forecast.description} {"\n"}
          Temperatur : {this.state.forecast.temp} {"' Celcius"}
        </Text>
      </View>
      
      <View style={styles.Footer}>
          <Text style={{ textAlign: 'right', padding: 18, fontSize: 14,color: 'white' }} >@aryadaputra</Text>
      </View>

</View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#E0F7FA',
    flex: 1,
    flexDirection: 'column'
  },
  Footer: {
    height: 60,
    backgroundColor: '#00BCD4',
  },
  Header: {
    height: 80,
    backgroundColor: '#00BCD4',
  },
  boxInput: {
    flex: 1,
    backgroundColor: '#80DEEA',
    margin: 5
  },
  boxOutput: {
    flex: 2,
    backgroundColor: '#80DEEA',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    flexDirection: 'row'
  },
  buttonStyle: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center'
  },
  textBoxStyle: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    backgroundColor: '#E0F7FA'
  }

});
