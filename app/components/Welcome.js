import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import Swiper from 'react-native-swiper';
import Alert from 'Alert';
import * as Banks from '../constants/Banks'
import util from 'react-native-util';
import Dimensions from 'Dimensions';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class Welcome extends Component {
    _onPress () {
        let uuid = util.format(Banks.THINGSPACE_DEVICE, '123456');
        Alert.alert(uuid);
    }

    render(){
        return (
            <Swiper>
            <View style={styles.slide}>
              <Image
                style={{width: width*0.8, height: height*0.4}}
                source={require('../assets/images/welcome01.png')}
              />
              <Text style={styles.text}>Thanks for using iCashBack app</Text>
            </View>
            <View style={styles.slide}>
              <Image
                style={{width: width*0.8, height: height*0.4}}
                source={require('../assets/images/welcome02.png')}
              />
              <Text style={styles.text}>Any feedback will be appreciated</Text>
            </View>
            <View style={styles.slide}>
              <Image
                style={{width: width*0.8, height: height*0.4}}
                source={require('../assets/images/welcome03.png')}
              />
              <Text style={styles.text}>Save money always make you happy</Text>
              <TouchableOpacity style = {styles.button} onPress = {this._onPress}>
                <Text style= {styles.buttonText}> Get Started </Text>
              </TouchableOpacity>
            </View>
          </Swiper>
        );
    }
}

const styles = StyleSheet.create({
  container:{
     flex:1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF'
  },
  slide:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  text:{
    color: '#FF6347',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  
  button:{
    position: 'absolute',
    bottom: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6347',
    width: 200,
    height: 40,
    borderRadius: 20
  },

  buttonText:{
    fontWeight: 'bold'
  }
})