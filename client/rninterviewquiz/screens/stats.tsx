import React, {useState} from 'react';
import List from '../components/list';
import Slider from '@react-native-community/slider';
import {StyleSheet, Text, View} from 'react-native';
function Stats() {
  const [value, setValue] = useState(0);
  return (
    <View style={styles.container}>
      <Text>{value}</Text>
      <List />
      <Slider
        style={styles.sliderContainer}
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
    sliderContainer: {
        width: 400,
        height: 100
    }
});
export default Stats;
