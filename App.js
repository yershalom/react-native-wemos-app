import React from 'react';
import { Text, View, Button } from 'react-native-ui-lib';
import { StyleSheet, Dimensions } from 'react-native';
import changeColor from './src/services/api';
import { ColorWheel } from 'react-native-color-wheel';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    }
  }

  change = () => {
    changeColor(this.state.red.toString().padStart(3, '0') +
      this.state.green.toString().padStart(3, '0') +
      this.state.blue.toString().padStart(3, '0')
    );
  }

  render() {
    return (
      <View flex paddingT-120>
        <View>
        <Text blue50 text10>React Native Wemos</Text>
        </View>
          <ColorWheel
            initialColor="#ee0000"
            onColorChange={color => {
              this.setState({red: color['h'], green: color['s'], blue: color['v']})
            }}
            style={{width: (Dimensions.get('window').width - 20)}}
            thumbStyle={{ height: 30, width: 30, borderRadius: 30}} />
        <View marginT-100 center paddingB-50>
          <Button label={`Change Color`} onPress={this.change}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
