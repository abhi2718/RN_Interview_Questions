import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Posts from './components/posts';
import Stats from './screens/stats';

function App(): React.JSX.Element {
 
  return (
    <SafeAreaView style={styles.container}>
      <Posts />
      {/* <Stats /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});

export default App;
