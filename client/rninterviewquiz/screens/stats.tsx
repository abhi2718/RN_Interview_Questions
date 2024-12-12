import React, {useState} from 'react';
import Chart from '../components/lineChart';
import Slider from '@react-native-community/slider';
import {StyleSheet, Text, View} from 'react-native';
function Stats() {
  const [value, setValue] = useState(0);
  return (
    <View style={styles.container}>
      <Text>{value}</Text>
      <Chart />
      <Slider
        style={{width: 400, height: 100}}
        minimumValue={0}
        step={1}
        maximumValue={10}
        onValueChange={setValue}
        minimumTrackTintColor="red"
        maximumTrackTintColor="blue"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Stats;
