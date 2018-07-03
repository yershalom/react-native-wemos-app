import React from 'react';
import { Text, View, Button } from 'react-native-ui-lib';
import { Dimensions } from 'react-native';
import changeColor from './src/services/api';
import { ColorWheel } from 'react-native-color-wheel';
import tinycolor from 'tinycolor2';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: {}
    }
  }

  change = () => {
    changeColor(this.state.color);
  }

  render() {
    return (
      <View flex paddingT-120>
        <View paddingL-20>
        <Text blue50 text10>React Native Wemos</Text>
        </View>
          <ColorWheel
            initialColor="#ee0000"
            onColorChange={color => {
              this.setState({color: tinycolor(color).toRgb()})
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
