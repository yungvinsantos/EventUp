import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class EventsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>EventsScreen</Text>
        <Button
          title = "press me"
          onPress ={() => this.props.navigation.navigate('detailEvent')}
        />
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
